// Company.js

import React, { useState } from "react";
import { LeftButton4 } from "../../icons/LeftButton4";
import { NavBar } from "../../components/NavBar";
import { Avatar8 } from "../../icons/Avatar8";
import { HeartFilled1 } from "../../icons/HeartFilled1";
import { Tab } from "../../components/Tab/Tab";
import { ListTitle } from "../../components/ListTitle";
import { InfoCard } from "../../components/InfoCard";
import { Graph } from "../../components/Graph";
import { ChatBox } from "../../components/ChatBox";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { InfoToggle } from "../../components/InfoToggle/InfoToggle";
import "./style.css";

export const Company = () => {
  const [selectedTab, setSelectedTab] = useState("section1");
  const [showCompanyAnswers, setShowCompanyAnswers] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const toggleContent = {
    title: "우리 기업을 소개합니다~~ㅎㅎ",
    content: "여기에 컨텐츠 내용이 들어갑니다:)~!",
  };

  const backClick = () => {
    console.log("back");
  };

  const companyData = {
    name: "가상기업",
    industry: "IT 및 소프트웨어",
    establishmentDate: "2000-01-01",
    listingDate: "2005-05-05",
    capital: "10억 원",
    address: "가상시 가상구 가상동 123번지",
    website: "http://www.virtualcompany.com",
  };

  const companyLinkdata = [
    { x: new Date("2023-11-19").getTime(), y: 1 },
    { x: new Date("2023-11-20").getTime(), y: 3 },
    { x: new Date("2023-11-21").getTime(), y: 2 },
    { x: new Date("2023-11-22").getTime(), y: 5 },
    { x: new Date("2023-11-23").getTime(), y: 10 },
    { x: new Date("2023-11-24").getTime(), y: 20 },
    { x: new Date("2023-11-25").getTime(), y: 1 },
  ];

  const newsDataList = [
    {
      date: "2023.11.19",
      title: "기사 제목",
      content: "기사 요약입니다 기사 요약입니다",
    },
    {
      date: "2023.11.18",
      title: "다른 기사 제목",
      content: "다른 기사 요약입니다 다른 기사 요약입니다",
    },
    // 추가적인 뉴스 데이터를 필요한 만큼 추가
    { date: "2023.11.17", title: "뉴스 제목 1", content: "뉴스 내용 1" },
    { date: "2023.11.16", title: "뉴스 제목 2", content: "뉴스 내용 2" },
    { date: "2023.11.15", title: "뉴스 제목 3", content: "뉴스 내용 3" },
    { date: "2023.11.14", title: "뉴스 제목 4", content: "뉴스 내용 4" },
    { date: "2023.11.13", title: "뉴스 제목 5", content: "뉴스 내용 5" },
    { date: "2023.11.12", title: "뉴스 제목 6", content: "뉴스 내용 6" },
    { date: "2023.11.11", title: "뉴스 제목 7", content: "뉴스 내용 7" },
    { date: "2023.11.10", title: "뉴스 제목 8", content: "뉴스 내용 8" },
  ];

  const visibleNewsDataList = newsDataList.slice(0, 2);

  const handleCheckboxChange = () => {
    setShowCompanyAnswers(!showCompanyAnswers);
  };

  const companyPosts = [
    { title: "게시글 1", content: "게시글 내용 1" },
    { title: "게시글 2", content: "게시글 내용 2" },
    { title: "게시글 3", content: "게시글 내용 3" },
    { title: "게시글 4", content: "게시글 내용 4" },
    { title: "게시글 5", content: "게시글 내용 5" },
    { title: "게시글 6", content: "게시글 내용 6" },
    { title: "게시글 7", content: "게시글 내용 7" },
    { title: "게시글 8", content: "게시글 내용 8" },
  ];

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
            <div className="text-wrapper-2">{companyData.name}</div>
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
                <InfoCard info={companyData} />
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
                <Graph dataList={companyLinkdata} />
              </div>
            </div>
          </div>
        )}

        {selectedTab === "section2" && (
          <div className="talk-section">
            <div className="talk-title">
              <ListTitle
                divClassName="list-title-2"
                rightControl="none"
                title="Talk"
              />
              <div className="checkBox">
                <label className="checkLabel">
                  <input
                    className="checkInput"
                    type="checkbox"
                    checked={showCompanyAnswers}
                    onChange={handleCheckboxChange}
                  />
                  기업 답변만 보기
                </label>
              </div>
            </div>
            <ChatBox />
          </div>
        )}

        {selectedTab === "section3" && (
          <div className="companyInfo-section">
            <div className="news">
              <div className="news-title">
                <ListTitle
                  className="list-title-instance"
                  divClassName="design-component-instance-node-2"
                  rightControl="none"
                  title="기업명의 최근 뉴스"
                />
              </div>
              <div className="newsContents">
                {visibleNewsDataList.map((news, index) => (
                  <NewsCard key={index} info={news} />
                ))}
              </div>
            </div>
            <div className="company">
              <ListTitle
                className="list-title-instance"
                divClassName="design-component-instance-node-2"
                rightControl="none"
                title="기업명의 최근 소식"
              />
              {companyPosts.map((post, index) => (
                <InfoToggle
                  key={index}
                  title={post.title}
                  content={post.content}
                  isOpen={index === 0}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
