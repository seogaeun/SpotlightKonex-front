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
import { Company } from "../Company";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";
import "../../styles/styleguide.css";

export const Main = () => {
  const [buttonInfo, setButtonInfo] = useState("");
  const [selectedTab, setSelectedTab] = useState("section1"); // 초기 탭 "Home"
  const [selectedSection, setSelectedSection] = useState("거래대금"); // 초기 탭 "거래대금"
  const [selectedType, setSelectedType] = useState("종목"); // 초기 탭 "종목"
  const [selectedTheme, setSelectedTheme] = useState("금속 및 화학 제조업"); // 초기 탭 "금속 및 화학 제조업"

  const [stockname, setStockName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const [RankingData, setRankingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const firstData = RankingData[0];
  const navigate = useNavigate();

  //리덕스 상태 저장을 위한 함수
  const [selectedCorp, setSelectedCorp] = useState(null);

  const handleProductClick = (corpName) => {
    setSelectedCorp(corpName);

    // 선택된 기업 데이터를 history state에 저장하며 ./Company로 이동
    navigate("/Company", { state: { corpName } });
  };

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

  const handleTypeChange = (type) => {
    setSelectedType(type);
    // setIsLoading(true);
    // fetchData(section);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // setIsLoading(true);
    // fetchData(section);
  };

  const handleSearch = async () => {
    console.log(stockname);
    if (stockname === "") {
      setSearchError("종목명을 입력해주세요");
      setSearchResults([]);
      setIsLoaded(false);
      Swal.fire({
        text: "종목명을 입력해주세요",
        icon: "error",
        timer: 2000,
      });
    } else {
      fetchBrandData(stockname);
    }
  };

  const clickSearch = async () => {
    handleSearch();
  };

  useEffect(() => {
    setRankingData(dummyRankingData);
  }, []);

  useEffect(() => {
    fetchBrandData(stockname);
  }, [stockname]);

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
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/amount`
        );
        rankingData = response.data.payload.konexList;
      } else if (selectedSection === "section2") {
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/like`
        );
        rankingData = response.data.payload.konexList;
      } else if (selectedSection === "section3") {
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/views`
        );
        rankingData = response.data.payload.konexList;
      }
      setRankingData(rankingData);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  // brand-search
  const fetchBrandData = async (stockname) => {
    if (stockname.trim() === "") {
      setSearchResults([]);
      setIsLoaded(true);
      setSearchError("");
    } else {
      try {
        const response = await axios.get(
          `${window.API_BASE_URL}/find/keyword/${stockname}`
        );
        const brandData = response.data.payload.konexList;
        setSearchResults(brandData);
        setIsLoaded(true);
        setSearchError(null);
        console.log(stockname);
        console.log(brandData);
      } catch (error) {
        console.error("API 요청 실패:", error);
        setSearchResults([]);
        setIsLoaded(true);
        setSearchError("검색 결과가 없습니다.");
      }
    }
  };

  return (
    <div className="main">
      <div className="div-2">
        <Image
          className="main-image"
          icon={<Image7 className="icon-instance-node" />}
        />
        <div className="home-message">
          <ListTitle
            className="home-copyright"
            divClassName="design-component-instance-node"
            rightControl="none"
            title="당신의 코넥스에 투자하세요!"
          />
          <ButtonPrimary
            className="company-login"
            divClassName="button-primary-instance"
            text="기업전용 로그인"
          />
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
          <Tab
            section1Text="Home"
            section2Text="All"
            section3Text="Find"
            onTabChange={handleTabChange}
          />
        </div>
        {selectedTab === "section1" && (
          <>
            <div className="ranking-tab">
              <Toggle
                tabNames={["거래대금", "좋아요수", "조회수"]}
                onTabChange={handleSectionChange}
              />
            </div>
            <div className="ranking-content">
              <div className="rankin">
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image
                            className="image-instance"
                            icon={<Image8 className="icon-instance-node" />}
                          />
                          <Tag className="rank" style="focus" text="1" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">
                            {" "}
                            {firstData && firstData.corp_name
                              ? firstData.corp_name
                              : "로딩 중..."}
                          </div>
                          <p className="price">
                            <span
                              className={`stock-price ${
                                firstData && firstData.cmpprevdd_prc > 0
                                  ? "stock-price-plus"
                                  : "stock-price-minus"
                              }`}
                            >
                              {firstData
                                ? addCommasToNumber(firstData.price)
                                : "로딩 중..."}
                              원
                            </span>
                            <span
                              className={`stock-change ${
                                firstData && firstData.cmpprevdd_prc > 0
                                  ? "stock-change-plus"
                                  : "stock-change-minus"
                              }`}
                            >
                              {firstData
                                ? `${firstData.cmpprevdd_prc}%`
                                : "로딩 중..."}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rankin-etc">
                {RankingData.slice(1).map((item, index) => (
                  <div
                    className="products-wrapper"
                    key={index}
                    onClick={() => handleProductClick(item.corp_name)}
                  >
                    <div className="products">
                      <div className="vertical-card">
                        <div className="company-image">
                          <div className="overlap-group">
                            <Image
                              className="image-instance"
                              icon={<Image8 className="icon-instance-node" />}
                            />
                            <Tag
                              className="rank"
                              style="focus"
                              text={index + 2}
                            />
                          </div>
                        </div>
                        <div className="company-info">
                          <div className="title-2">
                            <div className="company-2">
                              {item && item.corp_name
                                ? item.corp_name
                                : "로딩 중..."}
                            </div>
                            <p className="price">
                              <span
                                className={`stock-price ${
                                  item && item.cmpprevdd_prc > 0
                                    ? "stock-price-plus"
                                    : "stock-price-minus"
                                }`}
                              >
                                {item
                                  ? addCommasToNumber(item.price)
                                  : "로딩 중..."}
                                원
                              </span>
                              <span
                                className={`stock-change ${
                                  item && item.cmpprevdd_prc > 0
                                    ? "stock-change-plus"
                                    : "stock-change-minus"
                                }`}
                              >
                                {item ? `${item.cmpprevdd_prc}%` : "로딩 중..."}
                              </span>
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
                <div
                  className="products-wrapper"
                  key={index}
                  onClick={() => handleProductClick(item.corp_name)}
                >
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image
                            className="image-instance"
                            icon={<Image8 className="icon-instance-node" />}
                          />
                          <Tag
                            className="rank"
                            style="focus"
                            text={index + 1}
                          />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">
                            {item && item.corp_name
                              ? item.corp_name
                              : "로딩 중..."}
                          </div>
                          <p className="price">
                            <span
                              className={`stock-price ${
                                item && item.cmpprevdd_prc > 0
                                  ? "stock-price-plus"
                                  : "stock-price-minus"
                              }`}
                            >
                              {item
                                ? addCommasToNumber(item.price)
                                : "로딩 중..."}
                              원
                            </span>
                            <span
                              className={`stock-change ${
                                item && item.cmpprevdd_prc > 0
                                  ? "stock-change-plus"
                                  : "stock-change-minus"
                              }`}
                            >
                              {item ? `${item.cmpprevdd_prc}%` : "로딩 중..."}
                            </span>
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

        {selectedTab === "section3" && (
          <div className="search-content">
            <div className="search-type">
              <Toggle
                tabNames={["종목", "테마"]}
                onTabChange={handleTypeChange}
              />
            </div>
            {selectedType === "종목" && (
              <div className="brand-search">
                <ListTitle
                  className="home-copyright"
                  divClassName="design-component-instance-node"
                  rightControl="none"
                  title="원하는 기업을 찾아보세요"
                />
                <input
                  className="search-input"
                  type="text"
                  name="stockname"
                  value={stockname}
                  placeholder="종목코드나 종목명을 입력해주세요."
                  onChange={(e) => setStockName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <div className="result-content"></div>
              </div>
            )}
            {isLoaded && (
              <div className="data-display">
                {searchResults.length > 0 ? (
                  searchResults.map((item, index) => (
                    <div
                      className="products-wrapper"
                      key={index}
                      onClick={() => handleProductClick(item.corp_name)}
                    >
                      <div className="products">
                        <div className="vertical-card">
                          <div className="company-image">
                            <div className="overlap-group">
                              <Image
                                className="image-instance"
                                icon={<Image8 className="icon-instance-node" />}
                              />
                            </div>
                          </div>
                          <div className="company-info">
                            <div className="title-2">
                              <div className="company-2">
                                {item && item.corp_name
                                  ? item.corp_name
                                  : "로딩 중..."}
                              </div>
                              <p className="price">
                                <span
                                  className={`stock-price ${
                                    item && item.cmpprevdd_prc > 0
                                      ? "stock-price-plus"
                                      : "stock-price-minus"
                                  }`}
                                >
                                  {item
                                    ? addCommasToNumber(item.price)
                                    : "로딩 중..."}
                                  원
                                </span>
                                <span
                                  className={`stock-change ${
                                    item && item.cmpprevdd_prc > 0
                                      ? "stock-change-plus"
                                      : "stock-change-minus"
                                  }`}
                                >
                                  {item
                                    ? `${item.cmpprevdd_prc}%`
                                    : "로딩 중..."}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="error-message">{searchError}</p>
                )}
              </div>
            )}
            {selectedType === "테마" && (
              <div className="theme-search">
                <ListTitle
                  className="home-copyright"
                  divClassName="design-component-instance-node"
                  rightControl="none"
                  title="테마별 기업을 살펴보세요"
                />
                <div className="theme-content">
                  <Toggle
                    tabNames={[
                      "금속 및 화학 제조업",
                      "식품 및 섬유 제조업",
                      "전자제품 및 기타 제조업",
                      "도매업",
                      "서비스업",
                      "건설 및 공사업",
                      "금융업",
                      "전기 및 전자 관련업",
                    ]}
                    onTabChange={handleThemeChange}
                  />
                  <div className="theme-company">
                    {RankingData.map((item, index) => (
                      <div
                        className="products-wrapper"
                        key={index}
                        onClick={() => handleProductClick(item.corp_name)}
                      >
                        <div className="products">
                          <div className="vertical-card">
                            <div className="company-image">
                              <div className="overlap-group">
                                <Image
                                  className="image-instance"
                                  icon={
                                    <Image8 className="icon-instance-node" />
                                  }
                                />
                                <Tag
                                  className="rank"
                                  style="focus"
                                  text={index + 1}
                                />
                              </div>
                            </div>
                            <div className="company-info">
                              <div className="title-2">
                                <div className="company-2">
                                  {item && item.corp_name
                                    ? item.corp_name
                                    : "로딩 중..."}
                                </div>
                                <p className="price">
                                  <span
                                    className={`stock-price ${
                                      item && item.cmpprevdd_prc > 0
                                        ? "stock-price-plus"
                                        : "stock-price-minus"
                                    }`}
                                  >
                                    {item
                                      ? addCommasToNumber(item.price)
                                      : "로딩 중..."}
                                    원
                                  </span>
                                  <span
                                    className={`stock-change ${
                                      item && item.cmpprevdd_prc > 0
                                        ? "stock-change-plus"
                                        : "stock-change-minus"
                                    }`}
                                  >
                                    {item
                                      ? `${item.cmpprevdd_prc}%`
                                      : "로딩 중..."}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <ListTitle
                  className="home-copyright"
                  divClassName="design-component-instance-node"
                  rightControl="none"
                  title="증권사별 PICK"
                />
                <div className="pick-content">
                  <Toggle
                    tabNames={[
                      "유진투자증권",
                      "신한투자증권",
                      "하이투자증권",
                      "IBK투자증권",
                      "미래에셋증권",
                      "SK증권",
                      "상상인증권",
                      "한화투자증권",
                      "대신증권",
                      "키움증권",
                      "하나증권",
                      "NH투자증권",
                      "현대차증권",
                      "교보증권",
                      "BNK투자증권",
                      "신영증권",
                      "DB금융투자",
                      "한국투자증권",
                      "KB증권",
                      "한양증권",
                      "유안타증권",
                      "기타",
                    ]}
                    onTabChange={handleThemeChange}
                  />
                  <div className="pick-company">
                    {RankingData.map((item, index) => (
                      <div
                        className="products-wrapper"
                        key={index}
                        onClick={() => handleProductClick(item.corp_name)}
                      >
                        <div className="products">
                          <div className="vertical-card">
                            <div className="company-image">
                              <div className="overlap-group">
                                <Image
                                  className="image-instance"
                                  icon={
                                    <Image8 className="icon-instance-node" />
                                  }
                                />
                                <Tag
                                  className="rank"
                                  style="focus"
                                  text={index + 1}
                                />
                              </div>
                            </div>
                            <div className="company-info">
                              <div className="title-2">
                                <div className="company-2">
                                  {item && item.corp_name
                                    ? item.corp_name
                                    : "로딩 중..."}
                                </div>
                                <p className="price">
                                  <span
                                    className={`stock-price ${
                                      item && item.cmpprevdd_prc > 0
                                        ? "stock-price-plus"
                                        : "stock-price-minus"
                                    }`}
                                  >
                                    {item
                                      ? addCommasToNumber(item.price)
                                      : "로딩 중..."}
                                    원
                                  </span>
                                  <span
                                    className={`stock-change ${
                                      item && item.cmpprevdd_prc > 0
                                        ? "stock-change-plus"
                                        : "stock-change-minus"
                                    }`}
                                  >
                                    {item
                                      ? `${item.cmpprevdd_prc}%`
                                      : "로딩 중..."}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
