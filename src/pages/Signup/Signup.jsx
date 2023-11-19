import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Image } from "../../components/Image";
import { ListTitle } from "../../components/ListTitle";
import { Tag } from "../../components/Tag";
import { Toggle } from "../../components/Toggle";
import { Tab } from "../../components/Tab/Tab";
import { Image7 } from "../../icons/Image7";
import { Image8 } from "../../icons/Image8";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import '../../styles/styleguide.css';


export const Signup = () => {
    // 초기값
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [code, setCode] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const navigate = useNavigate();

    // 오류메세지 상태 저장
    const [nameMessage, setNameMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");
    const [codeMessage, setCodeMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    // 유효성 검사
    const [isName, setIsName] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);
    const [isAgreed, setIsAgreed] = React.useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isPhone, setIsPhone] = useState(false);

    const [isTimerActive, setIsTimerActive] = useState(false); // 타이머 활성화 여부
    const [remainingTime, setRemainingTime] = useState(300); // 5분은 300초

    const toggleAgreement = () => {
        setIsAgreed(!isAgreed);
        console.log(isAgreed);
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
            setPhoneMessage('유효한 전화번호입니다.');
            setIsPhone(true);
          } else {
            setPhoneMessage('유효하지 않은 전화번호입니다.');
            setIsPhone(false);
          }
    };

    useEffect(() => {
        let timer;

        if (isTimerActive && remainingTime > 0) {
            timer = setTimeout(() => {
                setRemainingTime(remainingTime - 1);
            }, 1000); // 1초마다 1초씩 감소
        }

        if (remainingTime === 0) {
            // 5분 경과 시
            setIsVerification(false);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isTimerActive, remainingTime]);

    // 이메일로 인증 코드 요청
    const sendVerificationCode = async () => {

        console.log(email);

        try {
            const response = await axios.post(`${window.API_BASE_URL}/user-service/sign-in/email/validation`, {
                email: email
            });
            // const response = await axios.get('http://test2.shinhan.site/user-service/');
            // console.log(response);
            if (response.status === 204) {
                console.log("hihi");
                setCodeMessage('코드가 전송되었습니다.');
                setIsVerification(true);
            } else {
                setCodeMessage('유효하지 않은 이메일 주소입니다.');
                setIsVerification(false);
            }
        } catch (error) {
            console.error('인증 코드 전송 오류:', error);
            setIsVerification(false);
        }
        // 인증 코드 요청 성공 시 타이머 활성화
        if (isVerification) {
            setIsTimerActive(true);
        }
    };

    // 인증 코드 확인
    const handleVerification = async () => {
        if (code) {
            try {
                const response = await axios.post(`https:/for-alpha/user-service/sign-in/email/verification`, {
                    email,
                    verification_code: code,
                });

                if (response.status === 200) {
                    setCodeMessage('인증이 완료되었습니다.');
                    setIsVerification(true);
                } else {
                    setCodeMessage('인증에 실패했습니다.');
                    setIsVerification(false);
                }
            } catch (error) {
                console.error('인증 코드 확인 오류:', error);
                setIsVerification(false);
            }
        } else {
            setCodeMessage('인증 코드를 입력해주세요.');
            setIsVerification(false);
        }

        // 인증 코드 확인 시 타이머 중지
        if (isVerification) {
            setIsTimerActive(false);
            setRemainingTime(300); // 타이머 초기화
        }
    };

    // 회원 가입 처리
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = isName && isPassword && isPasswordConfirm && isEmail && isPhone;

        if (isValid) {
            try {
                const response = await axios.post(`${window.API_BASE_URL}/auth/signup`, {
                    email,
                    password,
                    name,
                    phone
                });

                if (response.status === 200) {
                    console.log('회원가입 성공', response.data);
                    navigate("/")
                } else {
                    console.error('회원가입 실패', response.data);
                }
            } catch (error) {
                // 네트워크 오류 또는 서버 응답 없음
                console.error('회원가입 오류', error);
            }
        }
    };

    return (
        <div className="signup">
            <div className="div-2">
                <div className="home-message">
                    Spotlight Conex 시작하기
                </div>
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
                            placeholder="비밀번호를 입력해주세요."
                            onChange={onChangePasswordConfirm}
                        />
                        <p className="note-message"> {passwordConfirmMessage} </p>
                        <div className="login-btn-div">
                            <button
                                type="submit"
                                className="login-btn"
                                onClick={handleSubmit}
                                disabled={!(isEmail && isName && isPassword && isPasswordConfirm && isPhone)}
                            >
                                회원가입
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
