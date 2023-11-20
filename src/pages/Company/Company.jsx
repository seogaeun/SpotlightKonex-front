// Company.js
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
import { Footer } from "../../components/Footer";
import { LinkButton } from "../../components/LinkButton";
import "./style.css";

export const Company = () => {
  const [showCompanyAnswers, setShowCompanyAnswers] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { corpName } = state;
  // 기업 응원수 클릭 버튼 함수 (/enterprise/{id})
  const [heartCount, setCount] = useState(0);

  const heartClick = () => {
    setCount((heartCount) => heartCount + 1);
  };

  //기업 응원수 조회 api연결
  //      여기에 작성(/analysis/like/{crop_code})
  //      createdAt==현재날짜 필터링해서 그것만 갖고오면 될듯?
  //      근데 crop_code??는 어따쓰지 *****

  // 상세정보 전환 탭
  const [selectedTab, setSelectedTab] = useState("section1");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  //뒤로가기 버튼(<)
  //  전 페이지인 home으로 연결

  const backClick = () => {
    console.log("back");
  };

  //기업 상세 정보 데이터 (/enterprise/cropCode)
  const enterpriseData = {
    crop_name: corpName,
    industry_name: "IT 및 소프트웨어",
    establish_date: "2000-01-01",
    public_date: "2005-05-05",
    capital: "10억 원",
    address: "가상시 가상구 가상동 123번지",
    website: "http://www.virtualcompany.com",
  };

  //순위가 아닌가? ***** 일단 보류
  const companyLinkdata = [
    { x: new Date("2023-11-19").getTime(), y: 1 },
    { x: new Date("2023-11-20").getTime(), y: 3 },
    { x: new Date("2023-11-21").getTime(), y: 2 },
    { x: new Date("2023-11-22").getTime(), y: 5 },
    { x: new Date("2023-11-23").getTime(), y: 10 },
    { x: new Date("2023-11-24").getTime(), y: 20 },
    { x: new Date("2023-11-25").getTime(), y: 1 },
  ];

  //기업 뉴스 조회 (/enterprise/news)
  //      GET
  //      Request 뭐지..??
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
  //      2개만 조회
  const visibleNewsDataList = newsDataList.slice(0, 2);

  //채팅 기업 댓글 필터링 (기업 댓글 조회)
  const handleIsCorpMent = () => {
    setShowCompanyAnswers(!showCompanyAnswers);
    //( writer_type===true만 필터링해서 보여주기)
  };

  //기업 게시물 조회 (/boards/{crop_code})
  const cropPosts = [
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
      {/* 전체 화면 */}
      <div className="companyContent">
        {/* 네비바 */}
        <NavBar
          className="nav-bar-instance"
          icon={<LeftButton4 className="left-button-4" onClick={backClick} />}
          leftControl="icon"
          pageTitle="기업 상세정보"
          rightButtonClassName="nav-title-text"
          rightControl="none"
        />
        {/*기업 기본 정보(프로필, 이름, 좋아요) */}
        <div className="company-profile">
          <div className="profile-img">
            <div className="overlap-group">
              <Avatar8 className="avatar-8" />
              <HeartFilled1
                className="heart-filled"
                onClick={heartClick}
                count={heartCount}
              />
            </div>
          </div>
          <div className="name">
            <div className="text-wrapper-2">{enterpriseData.crop_name}</div>
            <div className="text-wrapper-3">기업 소개 한마디</div>
          </div>
        </div>
        {/* 탭 바 */}
        <div className="tab">
          <Tab
            section1Text="Home"
            section2Text="Talk"
            section3Text="Info"
            onTabChange={handleTabChange}
          />
        </div>
        {selectedTab === "section1" && (
          <div className="company-section">
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="기업 정보"
              />
              <div className="infoCard">
                <InfoCard info={enterpriseData} />
              </div>
            </div>
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="순위 변동"
              />
              <Graph dataList={companyLinkdata} reversed="true" />
            </div>
          </div>
        )}

        {selectedTab === "section2" && (
          <div className="company-section">
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
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
                    onChange={handleIsCorpMent}
                  />
                  기업 답변만 보기
                </label>
              </div>
              <ChatBox />
            </div>
          </div>
        )}

        {selectedTab === "section3" && (
          <div className="company-section">
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title={enterpriseData.crop_name + "의 최근 뉴스"}
              />
              <div className="newsContents">
                {visibleNewsDataList.map((news, index) => (
                  <NewsCard key={index} info={news} />
                ))}
              </div>
            </div>
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title={enterpriseData.crop_name + "의 최근 소식"}
              />

              {cropPosts.map((post, index) => (
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
      <Footer></Footer>
    </div>
  );
};
