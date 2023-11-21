import React from "react";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate를 import
import "./style.css";

export const LinkButton = ({ to, buttonText, isLinked }) => {
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleClick = () => {
    if (isLinked === true) {
      window.open(to, "_blank");
    } else {
      navigate(to); // useHistory 대신 useNavigate 사용
    }
  };

  return (
    <button className="LinkBtn" onClick={handleClick}>
      {buttonText}
    </button>
  );
};
