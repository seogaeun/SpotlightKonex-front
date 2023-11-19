import React, { useState, useEffect } from "react";
import { ArrowDownWrapper } from "../../components/ArrowDownWrapper";
import { ListTitle } from "../../components/ListTitle";
import { NavBar } from "../../components/NavBar";
import { NoOfItemsWrapper } from "../../components/NoOfItemsWrapper";
import { Avatar8 } from "../../icons/Avatar8";
import { HeartFilled1 } from "../../icons/HeartFilled1";
import { Icon2 } from "../../icons/Icon2";
import { LeftButton4 } from "../../icons/LeftButton4";
import { Graph } from "../../components/Graph";
import { Tab } from "../../components/Tab/Tab";

import "./style.css";

const backClick = () => {
  console.log("back");
};

export const Company = () => {
  const [selectedTab, setSelectedTab] = useState("section1"); // 초기 탭 "Home"

  const handleTabChange = (tab) => {
    console.log(tab); // 콘솔에 선택된 탭 출력
    setSelectedTab(tab);
  };

  return (
    <div className="company">
      <div className="div-2">
        <NavBar
          className="nav-bar-instance"
          icon={<LeftButton4 className="left-button-4" onClick={backClick} />}
          leftControl="icon"
          pageTitle="기업 상세정보"
          rightButtonClassName="design-component-instance-node"
          rightControl="none"
        />
        <div className="company-profile">
          <div className="profile-img">
            <div className="overlap-group">
              <Avatar8 className="avatar-8" />
              <HeartFilled1 className="heart-filled" />
            </div>
          </div>
          <div className="name">
            <div className="text-wrapper-2">기업이름</div>
            <div className="text-wrapper-3">기업 소개 한마디</div>
          </div>
        </div>
        <div className="tab">
          <Tab
            section1Text="Home"
            section2Text="Talk"
            section3Text="Info"
            onTabChange={handleTabChange}
          />
        </div>
        {selectedTab === "section1" && (
          <div className="company-home-section">
            <div className="company-detailinfo">
              <ListTitle
                className="list-title-instance"
                divClassName="list-title-2"
                rightControl="none"
                title="기업 정보"
              />
              <div className="infoCard">
                <div className="list-item">
                  <div className="content-2">
                    <p className="p">
                      <span className="span">한글명: </span>
                      <span className="text-wrapper-4">
                        기업이름
                        <br />
                      </span>
                      <span className="span">업종: </span>
                      <span className="text-wrapper-4">
                        업종
                        <br />
                      </span>
                      <span className="span">주요제품: </span>
                      <span className="text-wrapper-4">
                        주요제품, 주요제품, 주요제품
                        <br />
                      </span>
                      <span className="span">
                        설립일
                        <br />
                        상장일
                        <br />
                        자본금
                        <br />
                        주소
                        <br />
                        홈페이지
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rank-graph">
              <ListTitle
                className="list-title-instance"
                divClassName="list-title-2"
                rightControl="none"
                title="순위 변동"
              />
              <div className="image-wrapper">
                <Graph></Graph>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "section2" && (
          <div className="talk-section">
            <div className="chat-input-component">
              <div className="chat-input">
                <div className="message-input">
                  <div className="text-input">
                    <div className="text">
                      <div className="placeholder">메세지를 입력하세요.</div>
                    </div>
                    <div className="icon-wrapper">
                      <Icon2 className="icon-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-bubble-section">
              <div className="message-bubble">
                <div className="name-2">가명</div>
                <div className="message">응원합니다~</div>
              </div>
              <div className="message-bubble-2">
                <div className="name-2">가명</div>
                <div className="message">안녕하세요~~</div>
              </div>
              <div className="office-message">
                <div className="name-3">기업담당자</div>
                <div className="message">확인해보고 답변드리겠습니다.</div>
              </div>
              <div className="message-bubble-3">
                <div className="name-2">가명</div>
                <div className="message">A써밋에 해당 기업도 참여하나요?</div>
              </div>
            </div>
            <div className="talk-title">
              <ListTitle
                divClassName="list-title-2"
                rightControl="none"
                title="Talk"
              />
            </div>
          </div>
        )}

        {selectedTab === "section3" && (
          <div className="companyInfo-section">
            <div className="news">
              <div className="news-list-component">
                <div className="news-bubble">
                  <div className="name-4">2023.11.10</div>
                  <p className="message-2">
                    <span className="text-wrapper-5">
                      기사 제목
                      <br />
                    </span>
                    <span className="text-wrapper-6">
                      기사 요약입니다 기사 요약입니다
                    </span>
                  </p>
                </div>
                <div className="news-bubble">
                  <div className="name-4">2023.11.10</div>
                  <p className="message-2">
                    <span className="text-wrapper-5">
                      기사 제목
                      <br />
                    </span>
                    <span className="text-wrapper-6">
                      기사 요약입니다 기사 요약입니다
                    </span>
                  </p>
                </div>
                <div className="news-bubble">
                  <div className="name-4">2023.11.10</div>
                  <p className="message-2">
                    <span className="text-wrapper-5">
                      기사 제목
                      <br />
                    </span>
                    <span className="text-wrapper-6">
                      기사 요약입니다 기사 요약입니다
                    </span>
                  </p>
                </div>
                <div className="news-bubble">
                  <div className="name-4">2023.11.10</div>
                  <p className="message-2">
                    <span className="text-wrapper-5">
                      기사 제목
                      <br />
                    </span>
                    <span className="text-wrapper-6">
                      기사 요약입니다 기사 요약입니다
                    </span>
                  </p>
                </div>
              </div>
              <div className="news-title">
                <ListTitle
                  className="list-title-instance"
                  divClassName="design-component-instance-node-2"
                  rightControl="none"
                  title="기업명의 최근 소식"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
