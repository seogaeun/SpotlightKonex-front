import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";

export const Calc = () => {
  // 초기값
  const [invest, setInvest] = React.useState("");
  const [income, setIncome] = React.useState("");
  const [deductionAmount, setDeductionAmount] = React.useState("");

  // 유효성 검사
  const [isInvest, setIsInvest] = React.useState(false);
  const [isIncome, setIsIncome] = React.useState(false);

  const [apiSuccess, setApiSuccess] = React.useState(false);

  // Navigate 훅 초기화
  const navigate = useNavigate();

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const onChangeIncome = (e) => {
    setIncome(e.target.value);
    setIsIncome(true);
  };

  const onChangeInvest = (e) => {
    setInvest(e.target.value);
    setIsInvest(true);
  };

  // 예상 공제액
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isIncome && isInvest) {
      try {
        const response = await axios.get(`http://125.6.38.124/calculator`, {
          params: {
            income: income,
            investment: invest,
          },
        });
        const deductionAmount = response.data;
        setDeductionAmount(deductionAmount);
        setApiSuccess(true); // API 요청 성공 시 상태 업데이트
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    }
  };

  // nav bar
  const handleLeftIconClick = (link) => {
    navigate("/");
  };

  return (
    <div className="calc">
      <div className="div-2">
        <Nav
          title="소득공제 계산기"
          onLeftIconClick={handleLeftIconClick}
          leftIconLink="/main"
        />
        <div className="home-message">
          내가 받을 수 있는 소득공제액, 지금 바로 확인해보세요
        </div>
        <div className="login-field">
          <div className="login-input">
            <div className="subtitle">
              연소득금액(과세표준금액)을 입력해주세요.
            </div>
            <div className="input-area">
              <input
                className="input-field"
                type="text"
                name="income"
                value={income}
                placeholder="70000000"
                onChange={onChangeIncome}
              />
            </div>
            <div className="subtitle">투자금액(출자금액)을 입력해주세요.</div>
            <div className="input-area">
              <input
                className="input-field"
                type="text"
                name="invest"
                value={invest}
                placeholder="20000000"
                onChange={onChangeInvest}
              />
            </div>
            <div className="login-btn-div">
              <button
                type="button"
                className="login-btn"
                onClick={handleSubmit}
                disabled={!(isIncome && isInvest)}
              >
                계산하기
              </button>
            </div>
            {apiSuccess && (
              <div className="rule">
                <React.Fragment>
                  <p className="rule-subtitle">예상 공제액</p>
                  <p className="rule-result">
                    최대 {formatNumberWithCommas(deductionAmount)}을 공제 받으실
                    수 있습니다.
                  </p>
                  <div className="result-desc">
                    지방소득세를 포함한 소득 세부산정 기준에 따라 달라질 수
                    있습니다. 조합출자금액이 아닌 투자금액 기준입니다.
                  </div>
                </React.Fragment>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
