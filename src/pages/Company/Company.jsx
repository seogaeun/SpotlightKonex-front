import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LeftButton4 } from "../../icons/LeftButton4";
import { NavBar } from "../../components/NavBar";
import { Nav } from "../../components/Nav";
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
import {Heart} from "react-animated-heart";

import "./style.css";

// const apiEndpoint = process.env.REACT_APP_API_BASE_URL;
const apiEndpoint = "http://125.6.38.124";

// const initialCropCode = "00125664";

export const Company = () => {
  const [selectedTab, setSelectedTab] = useState("section1");
  const [enterpriseData, setEnterpriseData] = useState({
    corp_name: "",
    industry_name: "",
    establish_date: "",
    public_date: "",
    capital: "",
    address: "",
    website: "",
  });

  //하트 개수 받아오기
  const [heartCount, setHeartCount] = useState(0);

  //기업 것만 보기
  const [showCompanyAnswers, setShowCompanyAnswers] = useState(false);

  //기업 순위 조회
  const [companyLinkdata, setCompanyLinkdata] = useState([]);

  //기업 채팅 조회
  const [companyTalkdata, setCompanyTalkdata] = useState([]);

  //기업 뉴스 조회
  const [companyNewsdata, setCompanyNewsdata] = useState([]);

  //기업 게시글 조회
  const [companyBoarddata, setCompanyBoarddata] = useState([]);

  //채팅창

  //채팅 전송
  const [successSignal, setSuccessSignal] = useState(null);

  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
  };

  const navigate = useNavigate();
  const { state } = useLocation();
  const { corpCode } = state;

  //API 연결

  //INFO 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/enterprise/${corpCode}`);
        const data = await response.json();

        setEnterpriseData({
          corp_name: data.corpName,
          industry_name: data.indutyName,
          establish_date: data.establish_date,
          public_date: data.public_date,
          capital: data.capital,
          address: data.address,
          website: data.url,
          description: data.description,
        });
      } catch (error) {
        console.error("기업 데이터 가져오기 오류:", error);
      }
    };

    fetchData();
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

  //뉴스 데이터 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiEndpoint}/news/?corpCode=${corpCode}`
        );
        const data = await response.json();

        // 데이터를 적절한 형식으로 변환
        const formattedData = data.map((item) => ({
          id: item.id,
          date: item.pubDate,
          title: item.title,
          content: item.description,
          url: item.link,
        }));

        // 변환된 데이터를 state에 설정
        setCompanyNewsdata(formattedData);
      } catch (error) {
        console.error("기업 데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, [corpCode]);

  // 채팅 데이터 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusParam = showCompanyAnswers ? "true" : "false";
        const response = await fetch(
          `${apiEndpoint}/enterprise/talk?corpCode=${corpCode}&status=${statusParam}`
        );
        const data = await response.json();

        // 서버 응답 구조에 따라 적절히 수정
        if (Array.isArray(data)) {
          // 데이터를 적절한 형식으로 변환
          const formattedData = data.map((item) => ({
            id: item.context,
            date: new Date(),
            text: item.context,
            sender: item.writerType ? "company" : "user",
            nickName: item.nickname,
          }));

          setCompanyTalkdata(formattedData);
          console.log("채팅 데이터:", formattedData);
        } else {
          console.error("채팅 데이터 형식이 올바르지 않습니다:", data);
        }
      } catch (error) {
        console.error("채팅 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [corpCode, showCompanyAnswers, successSignal]);

  // ...

  const handleIsCorpMent = async () => {
    setShowCompanyAnswers((prevShowCompanyAnswers) => !prevShowCompanyAnswers);
  };

  //보드 데이터 연결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/boards/${corpCode}`);
        const data = await response.json();

        // 데이터를 적절한 형식으로 변환
        const formattedData = data.map((item) => ({
          corpCode: item.corpCode,
          title: item.title,
          context: item.context,
          noticeSeq: item.noticeSeq,
        }));

        // 변환된 데이터를 state에 설정
        setCompanyBoarddata(formattedData);
      } catch (error) {
        console.error("기업 보드 가져오기 오류:", error);
      }
    };

    fetchData();
  }, [corpCode]);

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

  const heartClick = async () => {
    // 서버에 응원 수를 업데이트
    try {
      const response = await fetch(
        `${apiEndpoint}/enterprise/like?corpCode=${corpCode}`,
        {
          method: "POST",
          headers: {},
        }
      );

      if (response.ok) {
        // 서버 업데이트가 성공하면 클라이언트 상태 업데이트
        setHeartCount((prevCount) => prevCount + 1);
      } else {
        console.error("서버 응답 오류:", response.status);
      }
    } catch (error) {
      console.error("서버 연결 오류:", error);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const backClick = () => {
    navigate("/");
  };

  // const companyLinkdata = [
  //   { x: new Date("2023-11-19").getTime(), y: 1 },
  //   { x: new Date("2023-11-20").getTime(), y: 3 },
  //   { x: new Date("2023-11-21").getTime(), y: 2 },
  //   { x: new Date("2023-11-22").getTime(), y: 5 },
  //   { x: new Date("2023-11-23").getTime(), y: 10 },
  //   { x: new Date("2023-11-24").getTime(), y: 20 },
  //   { x: new Date("2023-11-25").getTime(), y: 1 },
  // ];

  // const newsDataList = [
  //   {
  //     date: "2023.11.19",
  //     title: "기사 제목",
  //     content: "기사 요약입니다 기사 요약입니다",
  //   },
  //   {
  //     date: "2023.11.18",
  //     title: "다른 기사 제목",
  //     content: "다른 기사 요약입니다 다른 기사 요약입니다",
  //   },
  //   { date: "2023.11.17", title: "뉴스 제목 1", content: "뉴스 내용 1" },
  //   { date: "2023.11.16", title: "뉴스 제목 2", content: "뉴스 내용 2" },
  // ];

  // const corpPosts = [
  //   { title: "게시글 1", content: "게시글 내용 1" },
  //   { title: "게시글 2", content: "게시글 내용 2" },
  //   { title: "게시글 3", content: "게시글 내용 3" },
  //   { title: "게시글 4", content: "게시글 내용 4" },
  //   { title: "게시글 5", content: "게시글 내용 5" },
  //   { title: "게시글 6", content: "게시글 내용 6" },
  //   { title: "게시글 7", content: "게시글 내용 7" },
  //   { title: "게시글 8", content: "게시글 내용 8" },
  // ];

  // nav bar
  const handleLeftIconClick = (link) => {
    navigate("/");
  };

  return (

    <div className="company">

      <div className="companyContent">
        <Nav
          title={enterpriseData.corp_name}
          onLeftIconClick={backClick}
          leftIconLink="/"
        />
        <div className="company-profile">
          <div className="profile-img">
            <div className="overlap-group">
              <img
                className="logo-img"
                alt="test"
                src={`img/${corpCode}.png`}
              ></img>
              <HeartFilled1
                className="heart-filled"
                onClick={heartClick}
                count={heartCount}
              />
            </div>
          </div>
          <div className="name">
            <div className="text-wrapper-2">{enterpriseData.corp_name}</div>
            <div className="text-wrapper-3">{enterpriseData.description}</div>
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

              <ChatBox
                messages={companyTalkdata}
                PageCorpCode={corpCode}
                successSignal={successSignal}
                handleSuccess={(signal) => setSuccessSignal(signal)}
              />
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
                title={enterpriseData.corp_name + "의 최근 뉴스"}
              />
              <div className="newsContents">
                {companyNewsdata.map((news, index) => (
                  <NewsCard key={index} info={news} />
                ))}
              </div>
            </div>
            <div className="company-detailinfo">
              <ListTitle
                className="subtitile"
                divClassName="list-title-2"
                rightControl="none"
                title={enterpriseData.corp_name + "의 최근 소식"}
              />

              {companyBoarddata.map((post, index) => (
                <InfoToggle
                  key={index}
                  title={post.title}
                  content={post.context}
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
