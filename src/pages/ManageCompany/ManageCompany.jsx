// ManageCompany.js

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
import { LinkButton } from "../../components/LinkButton";

import "./style.css";

export const ManageCompany = () => {
  //기본 정보
  const apiEndpoint = "http://133.186.215.123:8080";
  const corpCode = "01695498";

  const [companyBoarddata, setCompanyBoarddata] = useState([]);

  const accessToken = sessionStorage.getItem("company_user");
  const [showManageCompanyAnswers, setShowManageCompanyAnswers] =
    useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [enterpriseData, setEnterpriseData] = useState({
    corp_name: "",
  });

  // 상세정보 전환 탭
  const [selectedTab, setSelectedTab] = useState("section1");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  //기업 거래량 조회
  const [corptransdata, setCropTransdata] = useState([]);

  //기업 응원수 조회
  const [corplikedata, setCorpLikedata] = useState([]);

  //기업 순위 조회
  const [managecompanyLinkdata, setCompanyLinkdata] = useState([]);

  // 기업 응원수 클릭 버튼 함수 (/enterprise/{id})
  const [heartCount, setHeartCount] = useState(0);
  // 응원수 조회 연결
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await fetch(
          `${apiEndpoint}/enterprise/like?corpCode=${corpCode}`
        );
        const data = await response.json();
        setHeartCount(data.count);
      } catch (error) {
        console.error("응원수 조회 오류:", error);
      }
    };

    fetchLikeCount();
  }, [heartCount, corpCode]);

  //기업 이름 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/enterprise/${corpCode}`);
        const data = await response.json();

        setEnterpriseData({
          corp_name: data.corpName,
        });
      } catch (error) {
        console.error("기업 데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, [corpCode]);

  //기업 응원수 조회 api연결
  //      여기에 작성(/analysis/like/{corp_code})
  //      createdAt==현재날짜 필터링해서 그것만 갖고오면 될듯?
  //      근데 corp_code??는 어따쓰지 *****

  // 좋아요 분석 연결
  useEffect(() => {
    const fetchData = async () => {
      console.log(corpCode);
      try {
        const response = await fetch(
          `${apiEndpoint}/analysis/like/${corpCode}`
        );
        const data = await response.json();

        // data가 배열이 아니라면 빈 배열로 설정
        const dataArray = Array.isArray(data) ? data : [];

        console.log(dataArray);
        // 데이터를 적절한 형식으로 변환
        const formattedData = dataArray.map((item) => ({
          x: new Date(item.createdAt),
          y: item.count,
        }));

        // 변환된 데이터를 state에 설정
        setCorpLikedata(formattedData);
      } catch (error) {
        console.error("기업 좋아요 가져오기 오류:", error);
      }
    };

    fetchData();
  }, [corpCode]);

  // 거래량 분석 연결
  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await fetch(
          `${apiEndpoint}/analysis/transaction/${corpCode}`
        );
        const data = await response.json();

        // data가 배열이 아니라면 빈 배열로 설정
        const dataArray = Array.isArray(data) ? data : [];

        console.log(dataArray);
        // 데이터를 적절한 형식으로 변환
        const formattedData = dataArray.map((item) => ({
          x: new Date(item.createdAt),
          y: item.tradingVolume,
        }));

        // 변환된 데이터를 state에 설정
        setCropTransdata(formattedData);
      } catch (error) {
        console.error("기업 거래량 가져오기 오류:", error);
      }
    };

    fetchTransactionData();
  }, [corpCode]);

  //순위 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiEndpoint}/enterprise/rank/${corpCode}`
        );
        const data = await response.json();

        // 데이터를 적절한 형식으로 변환
        const formattedData = data.map((item) => ({
          x: new Date(item.day),
          y: item.ranking,
        }));

        // 변환된 데이터를 state에 설정
        setCompanyLinkdata(formattedData);
      } catch (error) {
        console.error("기업 데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, [corpCode]);

  //뒤로가기 버튼(<)
  //  전 페이지인 home으로 연결

  const backClick = () => {
    console.log("back");
    navigate("/main");
  };

  //채팅 기업 댓글 필터링 (기업 댓글 조회)
  const handleIsCorpMent = () => {
    setShowManageCompanyAnswers(!showManageCompanyAnswers);
    //( writer_type===true만 필터링해서 보여주기)
  };

  // 기업 보드 데이터 가져오기
  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/boards/${corpCode}`);
        const data = await response.json();

        // 데이터를 적절한 형식으로 변환
        const formattedData = data.map((item) => ({
          id: item.noticeSeq,
          title: item.title,
          content: item.context,
        }));

        // 변환된 데이터를 state에 설정
        setCompanyBoarddata(formattedData);
      } catch (error) {
        console.error("기업 보드 가져오기 오류:", error);
      }
    };

    fetchBoardData();
  }, [corpCode]);

  return (
    <div className="managecompany">
      {/* 전체 화면 */}
      <div className="managecompanyContent">
        {/* 네비바 */}
        <NavBar
          className="nav-bar-instance"
          icon={<LeftButton4 className="left-button-4" onClick={backClick} />}
          leftControl="icon"
          pageTitle={enterpriseData.corp_name + "의 관리창"}
          rightButtonClassName="nav-title-text"
          rightControl="none"
        />
        {/*기업 기본 정보(프로필, 이름, 좋아요) */}
        <div className="managecompany-profile">
          <div className="profile-img">
            <div className="overlap-group">
              <Avatar8 className="avatar-8" />
              <HeartFilled1 className="heart-filled" count={heartCount} />
            </div>
          </div>
          <div className="name">
            <div className="text-wrapper-2">{enterpriseData.corp_name}</div>
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
          <div className="managecompany-section">
            <div className="managecompany-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="응원수"
              />
              <Graph dataList={corplikedata} />
            </div>
            <div className="managecompany-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="거래량"
              />
              <Graph dataList={corptransdata} />
            </div>

            <div className="managecompany-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="순위 변동"
              />
              <Graph dataList={managecompanyLinkdata} reversed="true" />
            </div>
          </div>
        )}

        {selectedTab === "section2" && (
          <div className="managecompany-section">
            <div className="managecompany-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title="Talk"
              />
              <ChatBox />
            </div>
          </div>
        )}

        {selectedTab === "section3" && (
          <div className="managecompany-section">
            <div className="managecompany-detailinfo">
              <div className="subSection">
                <ListTitle
                  className="subtitile"
                  divClassName="list-title-2"
                  rightControl="none"
                  title={enterpriseData.corp_name + "의 최근 소식"}
                />
                <LinkButton to={"/post"} isLinked={false} buttonText="Add" />
              </div>

              {companyBoarddata.map((post, index) => (
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
