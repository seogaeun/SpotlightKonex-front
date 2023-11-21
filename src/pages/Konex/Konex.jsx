import React from "react";
import { Nav } from "../../components/Nav"
import "./style.css";
import '../../styles/styleguide.css';
import { useNavigate } from 'react-router-dom';

export const Konex = () => {  
  const navigate = useNavigate();
  // nav bar
  const handleLeftIconClick = (link) => {
    navigate("/main");
  };

    return (
        <div className="konex">
            <div className="div-2">
              <Nav
                title="What is KONEX"
                onLeftIconClick={handleLeftIconClick}
                leftIconLink="/"
              />
              <div className="subtitle">
                코넥스는 코스닥 상장 요건을 충족하지 못하는 벤처기업과 중소기업이 상장할 수 있도록 2013년 7월 1일부터 개장한 중소기업 전용 주식시장입니다. 우수한 기술력을 보유하고 있음에도 불구하고 짧은 경력 등을 이유로 자금조달에 어려움을 겪는 초기 기업이 자금을 원활하게 조달할 수 있도록 하기 위해 설립된 자본시장이라고 할 수 있습니다.
              </div>
            </div>
        </div>
    );
};
