import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Checkbox } from "../../components/Checkbox";
import { Nav } from "../../components/Nav";
import { PdfViewerModal } from "../../components/PdfViewerModal";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
import "../../styles/styleguide.css";

export const Signup = () => {
  // 초기값
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [showPdfModal, setShowPdfModal] = useState(false);
  const [selectedPdfFile, setSelectedPdfFile] = useState("");

  const navigate = useNavigate();

  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isAge, setIsAge] = React.useState(false);
  const [isAgreedService, setIsAgreedService] = React.useState(false);
  const [isAgreedData, setIsAgreedData] = React.useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const [isTimerActive, setIsTimerActive] = useState(false); // 타이머 활성화 여부
  const [remainingTime, setRemainingTime] = useState(300); // 5분은 300초

  const toggleAge = () => {
    setIsAge(!isAge);
  };

  const toggleAgreementService = () => {
    setIsAgreedService(!isAgreedService);
  };

  const toggleAgreementData = () => {
    setIsAgreedData(!isAgreedData);
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    if (currentName.length < 1 || currentName.length > 50) {
      setNameMessage("정확한 회사 이름을 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 회사명입니다.");
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  const onChangeCode = (e) => {
    const currentCode = e.target.value;
    setCode(currentCode);
  };

  const onChangePhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
    const phoneRegExp = /^(\d{2,3})-(\d{3,4})-(\d{3,4})$/;

    if (phoneRegExp.test(currentPhone)) {
      setPhoneMessage("유효한 전화번호입니다.");
      setIsPhone(true);
    } else {
      setPhoneMessage("예) 00(0)-000(0)-000(0)");
      setIsPhone(false);
    }
  };

  // 회원 가입 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      isName && isPassword && isPasswordConfirm && isEmail && isPhone;

    if (isValid) {
      try {
        const response = await axios.post(
          `${window.API_BASE_URL}/auth/signup`,
          {
            email,
            password,
            name,
            phone,
          }
        );

        if (response.status === 200) {
          console.log("회원가입 성공", response.data);
          navigate("/login");
        } else {
          console.error("회원가입 실패", response.data);
          Swal.fire({
            icon: "error",
            title: "회원가입 실패",
            text: "error",
          });
        }
      } catch (error) {
        // 네트워크 오류 또는 서버 응답 없음
        console.error("회원가입 오류", error);
        Swal.fire({
          icon: "error",
          title: "회원가입 실패",
          text: "error",
        });
      }
    }
  };

  // PDF view
  const handleAgreementClick = (pdfUrl) => {
    setSelectedPdfFile(pdfUrl);
    setShowPdfModal(true);
    console.log(selectedPdfFile);
    console.log("ho");
  };

  // nav bar
  const handleLeftIconClick = (link) => {
    navigate("/");
  };

  return (
    <div className="signup">
      <div className="div-2">
        <Nav
          title="회원가입"
          onLeftIconClick={handleLeftIconClick}
          leftIconLink="/main"
        />
        <div className="home-message">Spotlight Konex 시작하기</div>
        <div className="login-field">
          <div className="login-input">
            <div className="subtitle">Name</div>
            <input
              className="input-field"
              type="name"
              name="name"
              value={name}
              placeholder="회사명을 입력해주세요."
              onChange={onChangeName}
            />
            <p className="note-message"> {nameMessage} </p>
            <div className="subtitle">Email</div>
            <input
              className="input-field"
              type="email"
              name="email"
              value={email}
              placeholder="회사 이메일 계정을 입력해주세요."
              onChange={onChangeEmail}
            />
            <p className="note-message"> {emailMessage} </p>
            <div className="subtitle">Phone</div>
            <input
              className="input-field"
              type="phone"
              name="phone"
              value={phone}
              placeholder="'-'를 포함하여 전화번호를 입력해주세요."
              onChange={onChangePhone}
            />
            <p className="note-message"> {phoneMessage} </p>
            <div className="subtitle">Password</div>
            <input
              className="input-field"
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            />
            <p className="note-message"> {passwordMessage} </p>
            <div className="subtitle">Password Confirm</div>
            <input
              className="input-field"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="다시 한 번 비밀번호를 입력해주세요."
              onChange={onChangePasswordConfirm}
            />
            <p className="note-message"> {passwordConfirmMessage} </p>
            <div className="agree-field">
              <div className="check-rule">
                <Checkbox
                  className="checkbox-instance"
                  selected={isAge}
                  size="medium"
                  onClick={toggleAge}
                />
                <div className="rule">
                  만 14세 이상입니다. <span>[필수]</span>
                </div>
              </div>
              <div className="check-rule">
                <Checkbox
                  className="checkbox-instance"
                  selected={isAgreedService}
                  size="medium"
                  onClick={toggleAgreementService}
                />
                <div className="rule">
                  <a
                    href="#"
                    onClick={() =>
                      handleAgreementClick(
                        "import pdfUrl from '../../assets/서비스이용약관.pdf'"
                      )
                    }
                  >
                    서비스 이용약관
                  </a>
                  에 동의합니다. <span>[필수]</span>
                </div>
              </div>
              <div className="check-rule">
                <Checkbox
                  className="checkbox-instance"
                  selected={isAgreedData}
                  size="medium"
                  onClick={toggleAgreementData}
                />
                <div className="rule">
                  <a
                    href="#"
                    onClick={() =>
                      handleAgreementClick(
                        "import pdfUrl from '../../assets/서비스이용약관.pdf'"
                      )
                    }
                  >
                    개인정보 수집 및 활용
                  </a>
                  에 동의합니다. <span>[필수]</span>
                </div>
              </div>
            </div>
            <div className="login-btn-div">
              <button
                type="submit"
                className="login-btn"
                onClick={handleSubmit}
                disabled={
                  !(
                    isEmail &&
                    isName &&
                    isPassword &&
                    isPasswordConfirm &&
                    isPhone &&
                    isAge &&
                    isAgreedService &&
                    isAgreedData
                  )
                }
              >
                회원가입
              </button>
            </div>
            <div className="go-login">
              이미 회원이세요?{" "}
              <a href="/login">
                <span>
                  로그인 하러가기
                  <FiLogOut />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {showPdfModal && (
        <PdfViewerModal
          pdfUrl={selectedPdfFile}
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
