import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import "../../styles/styleguide.css";

export const Calc = () => {
    // 초기값
    const [invest, setInvest] = React.useState("");
    const [income, setIncome] = React.useState("");
    const [deductionAmount, setDeductionAmount] = React.useState("");

    // 유효성 검사
    const [isInvest, setIsInvest] = React.useState(false);
    const [isIncome, setIsIncome] = React.useState(false);

    // Navigate 훅 초기화
    const navigate = useNavigate();

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const onChangeIncome = (e) => {
        const currentIncome = parseFloat(e.target.value);
        setIncome(currentIncome);
        setIsIncome(true);
    };

    const onChangeInvest = (e) => {
        const currentInvest = parseFloat(e.target.value);
        setInvest(currentInvest);
        setIsInvest(true);
    };

    // 예상 공제액
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isIncome && isInvest) {
            try {
                const response = await axios.get(
                    `http://125.6.38.124/calculator`,
                    {
                        params: {
                            income,
                            invest
                        }
                    }
                );
                const deductionAmount = response.data;
                setDeductionAmount(deductionAmount);
            } catch (error) {
                console.error('API 요청 실패:', error);
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
                <div className="home-message">내가 받을 수 있는 소득공제액, 지금 바로 확인해보세요</div>
                <div className="login-field">
                    <div className="login-input">
                        <div className="subtitle">연소득금액(과세표준금액)을 입력해주세요.</div>
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
                                type="submit"
                                className="login-btn"
                                onClick={handleSubmit}
                                disabled={!(isIncome && isInvest)}
                            >
                                계산하기
                            </button>
                        </div>
                        <div className="rule">
                            <p>예상 공제액</p>
                            <p>최대 ${formatNumberWithCommas(deductionAmount)}을 공제 받으실 수 있습니다.
                                지방소득세를 포함한 소득 세부산정 기준에 따라 달라질 수 있습니다.
                                조합출자금액이 아닌 투자금액 기준입니다.</p>
                            <a href="https://home.kban.or.kr/">
                                <span>
                                    엔젤투자 시작하기
                                    <FiLogIn />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
