import React, { useState, useEffect } from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Image } from "../../components/Image";
import { ListTitle } from "../../components/ListTitle";
import { Tag } from "../../components/Tag";
import { Toggle } from "../../components/Toggle";
import { Tab } from "../../components/Tab/Tab";
import { Image7 } from "../../icons/Image7";
import { Image8 } from "../../icons/Image8";
import axios from "axios";
import "./style.css";
import '../../styles/styleguide.css';


export const Main = () => {
  const [selectedTab, setSelectedTab] = useState("section1"); // 초기 탭 "Home"
  const [selectedSection, setSelectedSection] = useState("section1"); // 초기 탭 "거래대금"
  const [RankingData, setRankingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const firstData = RankingData[0];

  const dummyRankingData = [
    {
      corp_name: "Dummy Corp 1",
      price: 1000,
      cmpprevdd_prc: 5,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
    {
      corp_name: "Dummy Corp 2",
      price: 1500,
      cmpprevdd_prc: -3,
    },
  ];

  function addCommasToNumber(number) {
    if (number !== undefined && number !== null) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "";
    }
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    // setIsLoading(true);
    // fetchData(section);
  };

  useEffect(() => {
    setRankingData(dummyRankingData);
    console.log("ho");
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetchData(selectedSection)
  //     .then(() => {
  //       setIsLoading(false);
  //       // 5초(5000밀리초)마다 fetchData 함수 호출
  //       const intervalId = setInterval(() => {
  //         fetchData(selectedTab);
  //       }, 5000);
  //       // 컴포넌트가 언마운트될 때 clearInterval 호출하여 인터벌 정리
  //       return () => clearInterval(intervalId);
  //     })
  //     .catch((error) => {
  //       console.error("API 요청 실패:", error);
  //       setIsLoading(false); // 에러 발생 시 로딩 숨김
  //     });
  // }, [selectedSection]);

  const fetchRanking = async (selectedSection) => {
    try {
      let rankingData;
      if (selectedSection === "section1") {
        const response = await axios.get(`${window.API_BASE_URL}/main/top/amount`);
        rankingData = response.data.payload.trading_volumes;
      } else if (selectedSection === "section2") {
        const response = await axios.get(`${window.API_BASE_URL}/main/top/like`);
        rankingData = response.data.payload.popularStocks;
      } else if (selectedSection === "section3") {
        const response = await axios.get(`${window.API_BASE_URL}/main/top/views`);
        rankingData = response.data.payload.popularStocks;
      }
      setRankingData(rankingData);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  return (
    <div className="main">
      <div className="div-2">
        <Image className="main-image" icon={<Image7 className="icon-instance-node" />} />
        <div className="home-message">
          <ListTitle
            className="home-copyright"
            divClassName="design-component-instance-node"
            rightControl="none"
            title="당신의 코넥스에 투자하세요!"
          />
          <ButtonPrimary className="company-login" divClassName="button-primary-instance" text="기업전용 로그인" />
        </div>
        <div className="banner">
          <HorizontalCard
            className="KONEX-banner"
            contentClassName="horizontal-card-instance"
            control="none"
            divClassName="design-component-instance-node"
            divClassNameOverride="KONEX-banner-2"
            subtitle="코넥스시장 알아보기"
            title="What is konex?"
            visuals="none"
          />
        </div>
        <div className="tab">
          <Tab section1Text="Home" section2Text="All" section3Text="Find" onTabChange={handleTabChange} />
        </div>
        {selectedTab === "section1" && (
          <>
            <div className="ranking-tab">
              <Toggle section1Text="거래대금" section2Text="좋아요수" section3Text="조회수" onTabChange={handleSectionChange} />
            </div>
            <div className="ranking-content">
              <div className="rankin">
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                          <Tag className="rank" style="focus" text="1" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2"> {firstData && firstData.corp_name ? firstData.corp_name : "로딩 중..."}</div>
                          <p className="price">
                            <span className={`stock-price ${firstData.cmpprevdd_prc > 0 ? 'stock-price-plus' : 'stock-price-minus'}`}>{firstData ? addCommasToNumber(firstData.price) : "로딩 중..."}원</span>
                            <span className={`stock-change ${firstData.cmpprevdd_prc > 0 ? 'stock-change-plus' : 'stock-change-minus'}`}>{firstData ? `${firstData.cmpprevdd_prc}%` : "로딩 중..."}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rankin-etc">
                {RankingData.slice(1).map((item, index) => (
                  <div className="products-wrapper" key={index}>
                    <div className="products">
                      <div className="vertical-card">
                        <div className="company-image">
                          <div className="overlap-group">
                            <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                            <Tag className="rank" style="focus" text={index + 2} />
                          </div>
                        </div>
                        <div className="company-info">
                          <div className="title-2">
                            <div className="company-2">{item && item.corp_name ? item.corp_name : "로딩 중..."}</div>
                            <p className="price">
                              <span className={`stock-price ${item.cmpprevdd_prc > 0 ? 'stock-price-plus' : 'stock-price-minus'}`}>{item ? addCommasToNumber(item.price) : "로딩 중..."}원</span>
                              <span className={`stock-change ${item.cmpprevdd_prc > 0 ? 'stock-change-plus' : 'stock-change-minus'}`}>{item ? `${item.cmpprevdd_prc}%` : "로딩 중..."}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {selectedTab === "section2" && (
          <div className="ranking-content">
          <div className="rankin-etc">
            {RankingData.map((item, index) => (
              <div className="products-wrapper" key={index}>
                <div className="products">
                  <div className="vertical-card">
                    <div className="company-image">
                      <div className="overlap-group">
                        <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                        <Tag className="rank" style="focus" text={index + 1} />
                      </div>
                    </div>
                    <div className="company-info">
                      <div className="title-2">
                        <div className="company-2">{item && item.corp_name ? item.corp_name : "로딩 중..."}</div>
                        <p className="price">
                          <span className={`stock-price ${item.cmpprevdd_prc > 0 ? 'stock-price-plus' : 'stock-price-minus'}`}>{item ? addCommasToNumber(item.price) : "로딩 중..."}원</span>
                          <span className={`stock-change ${item.cmpprevdd_prc > 0 ? 'stock-change-plus' : 'stock-change-minus'}`}>{item ? `${item.cmpprevdd_prc}%` : "로딩 중..."}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
