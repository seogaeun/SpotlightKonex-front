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
import Loading from "../../components/Loading/Loading";
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
  const [selectedAdvisor, setSelectedAdvisor] = useState("신한투자증권"); // 초기 탭 "신한투자증권"

  const [stockname, setStockName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const [RankingData, setRankingData] = useState([]);
  const [ThemeData, setThemeData] = useState([]);
  const [PickData, setPickData] = useState([]);
  const [AllData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  //리덕스 상태 저장을 위한 함수
  const [selectedCorp, setSelectedCorp] = useState(null);

  const handleProductClick = (corpCode) => {
    setSelectedCorp(corpCode);

    // 선택된 기업 데이터를 history state에 저장하며 ./Company로 이동
    navigate("/Company", { state: { corpCode } });
  };
  const accessToken = sessionStorage.getItem("company_user");

  const firstData =
    RankingData && RankingData.length > 0 ? RankingData[0] : null;

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
    setIsLoading(true);
    fetchThemeData(theme);
  };

  const handleAdvisorChange = (company) => {
    setSelectedAdvisor(company);
    setIsLoading(true);
    fetchPickData(company);
  };

  // brand-search-handlig
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
    fetchBrandData(stockname);
  }, [stockname]);

  // ranking data
  useEffect(() => {
    setIsLoading(true);

    fetchRanking(selectedSection)
      .then(() => {
        setIsLoading(false);
        // 5초(5000밀리초)마다 fetchData 함수 호출
        // const intervalId = setInterval(() => {
        //   fetchRanking(selectedTab);
        // }, 5000);
        // 컴포넌트가 언마운트될 때 clearInterval 호출하여 인터벌 정리
        // return () => clearInterval(intervalId);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        setIsLoading(false); // 에러 발생 시 로딩 숨김
      });
  }, [selectedSection]);

  // all data
  useEffect(() => {
    setIsLoading(true);

    fetchAllData()
      .then(() => {
        setIsLoading(false);
        // 5초(5000밀리초)마다 fetchData 함수 호출
        // const intervalId = setInterval(() => {
        //   fetchRanking(selectedTab);
        // }, 5000);
        // 컴포넌트가 언마운트될 때 clearInterval 호출하여 인터벌 정리
        // return () => clearInterval(intervalId);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        setIsLoading(false); // 에러 발생 시 로딩 숨김
      });
  }, []);

  const fetchRanking = async (selectedSection) => {
    try {
      setIsLoading(true);
      setRankingData([]);

      let rankingData;

      if (selectedSection === "거래대금") {
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/amount`
        );
        rankingData = response.data;
      } else if (selectedSection === "좋아요수") {
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/like`
        );
        rankingData = response.data;
      } else if (selectedSection === "조회수") {
        const response = await axios.get(
          `${window.API_BASE_URL}/main/top/views`
        );
        rankingData = response.data;
      }
      setRankingData(rankingData);
    } catch (error) {
      console.error("API 요청 실패:", error);
      setIsLoading(false);
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
        const brandData = response.data;
        if (brandData.length === 0) {
          setSearchResults([]);
          setSearchError("검색 결과가 없습니다.");
        } else {
          setSearchResults(brandData);
          setSearchError(null);
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("API 요청 실패:", error);
        setSearchResults([]);
        setIsLoaded(true);
        setSearchError("검색 결과가 없습니다.");
      }
    }
  };

  // theme-search

  // convert theme string to numeric value
  const mapThemeToNumber = (theme) => {
    const themeMap = {
      "금속 및 화학 제조업": 1,
      "식품 및 섬유 제조업": 2,
      "전자제품 및 기타 제조업": 3,
      도매업: 4,
      서비스업: 5,
      "건설 및 공사업": 6,
      금융업: 7,
      "전기 및 전자 관련업": 8,
    };

    return themeMap[theme] || theme;
  };

  useEffect(() => {
    setIsLoading(true);

    fetchThemeData(selectedTheme)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        setIsLoading(false); // 에러 발생 시 로딩 숨김
      });
  }, [selectedTheme]);

  const fetchThemeData = async (selectedTheme) => {
    const themeNumber = mapThemeToNumber(selectedTheme);
    let themeData;
    try {
      const response = await axios.get(
        `${window.API_BASE_URL}/find/theme/${themeNumber}`
      );
      themeData = response.data;
      setThemeData(themeData);
    } catch (error) {
      console.error("API 요청 실패:", error);
      setThemeData([]);
      setIsLoaded(true);
      setSearchError("검색 결과가 없습니다.");
    }
  };

  // pick-search

  // convert company string to numeric value
  const mapCompanyToNumber = (company) => {
    const themeMap = {
      유진투자증권: 1,
      신한투자증권: 2,
      하이투자증권: 3,
      IBK투자증권: 4,
      미래에셋증권: 5,
      SK증권: 6,
      상상인증권: 7,
      한화투자증권: 8,
      대신증권: 9,
      키움증권: 10,
      하나증권: 11,
      NH투자증권: 12,
      현대차증권: 13,
      교보증권: 14,
      BNK투자증권: 15,
      신영증권: 16,
      DB금융투자: 17,
      한국투자증권: 18,
      KB증권: 19,
      기타: 20,
    };

    return themeMap[company] || company;
  };

  useEffect(() => {
    setIsLoading(true);

    fetchPickData(selectedAdvisor)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        setIsLoading(false); // 에러 발생 시 로딩 숨김
      });
  }, [selectedAdvisor]);

  const fetchPickData = async (selectedAdvisor) => {
    const companyNumber = mapCompanyToNumber(selectedAdvisor);
    let pickData;
    try {
      const response = await axios.get(
        `${window.API_BASE_URL}/find/adviser/${companyNumber}`
      );
      pickData = response.data;
      setPickData(pickData);
    } catch (error) {
      console.error("API 요청 실패:", error);
      setPickData([]);
      setIsLoaded(true);
      setSearchError("검색 결과가 없습니다.");
    }
  };

  const fetchAllData = async () => {
    let allData;
    try {
      const response = await axios.get(
        `${window.API_BASE_URL}/main/enterprise`
      );
      allData = response.data;
      setAllData(allData);
    } catch (error) {
      console.error("API 요청 실패:", error);
      setAllData([]);
      setIsLoaded(true);
      setSearchError("검색 결과가 없습니다.");
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
          {accessToken ? (
            <a href="/manage">
              <ButtonPrimary
                className="company-login"
                divClassName="button-primary-instance"
                text="내 회사 보기"
              />
            </a>
          ) : (
            <a href="/login">
              <ButtonPrimary
                className="company-login"
                divClassName="button-primary-instance"
                text="기업전용 로그인"
              />
            </a>
          )}
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
        <div className="for-sticky">
          <div className="tab">
            <Tab
              section1Text="Home"
              section2Text="All"
              section3Text="Find"
              onTabChange={handleTabChange}
            />
          </div>
        </div>
        {selectedTab === "section1" && (
          <>
            <div className="for-sticky-toggle">
              <div className="ranking-tab">
                <Toggle
                  tabNames={["거래대금", "좋아요수", "조회수"]}
                  onTabChange={handleSectionChange}
                />
              </div>
            </div>
            <div className="ranking-content">
              <div className="rankin">
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <img
                            className="logo-img"
                            alt="test"
                            src={`img/${
                              firstData && firstData.corpCode
                                ? firstData.corpCode
                                : "1234567"
                            }.png`}
                          ></img>
                          <Tag className="rank" style="focus" text="1" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">
                            {" "}
                            {firstData && firstData.corpName
                              ? firstData.corpName
                              : "로딩 중..."}
                          </div>
                          <p className="price">
                            <span
                              className={`stock-price ${
                                firstData && firstData.cmpprevddPrc > 0
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
                                firstData && firstData.cmpprevddPrc > 0
                                  ? "stock-change-plus"
                                  : "stock-change-minus"
                              }`}
                            >
                              {firstData &&
                              typeof firstData.cmpprevddPrc === "string"
                                ? `${parseFloat(firstData.cmpprevddPrc).toFixed(
                                    2
                                  )}%`
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
                {RankingData &&
                  RankingData.length > 1 &&
                  RankingData.slice(1).map((item, index) => (
                    <div
                      className="productswrapper"
                      key={index}
                      onClick={() => handleProductClick(item.corpCode)}
                    >
                      <div className="products">
                        <div className="vertical-card">
                          <div className="company-image">
                            <div className="overlap-group">
                              <img
                                className="logo-img"
                                alt="test"
                                src={`img/${
                                  item && item.corpCode
                                    ? item.corpCode
                                    : "1234567"
                                }.png`}
                              ></img>
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
                                {item && item.corpName
                                  ? item.corpName
                                  : "로딩 중..."}
                              </div>
                              <p className="price">
                                <span
                                  className={`stock-price ${
                                    item && item.cmpprevddPrc > 0
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
                                    item && item.cmpprevddPrc > 0
                                      ? "stock-change-plus"
                                      : "stock-change-minus"
                                  }`}
                                >
                                  {item && typeof item.cmpprevddPrc === "string"
                                    ? `${parseFloat(item.cmpprevddPrc).toFixed(
                                        2
                                      )}%`
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
          </>
        )}

        {selectedTab === "section2" && (
          <div className="ranking-content">
            <div className="rankin-etc-2">
              {AllData.map((item, index) => (
                <div
                  className="products-wrapper"
                  key={index}
                  onClick={() => handleProductClick(item.corpCode)}
                >
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <img
                            className="logo-img"
                            alt="test"
                            src={`img/${
                              item && item.corpCode ? item.corpCode : "1234567"
                            }.png`}
                          ></img>
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">
                            {item && item.corpName
                              ? item.corpName
                              : "로딩 중..."}
                          </div>
                          <p className="price">
                            <span
                              className={`stock-price ${
                                item && item.cmpprevddPrc > 0
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
                                item && item.cmpprevddPrc > 0
                                  ? "stock-change-plus"
                                  : "stock-change-minus"
                              }`}
                            >
                              {item && typeof item.cmpprevddPrc === "string"
                                ? `${parseFloat(item.cmpprevddPrc).toFixed(2)}%`
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
            {selectedType === "종목" && isLoaded && (
              <div className="data-display">
                {searchResults.length > 0 ? (
                  searchResults.map((item, index) => (
                    <div
                      className="products-wrapper"
                      key={index}
                      onClick={() => handleProductClick(item.corpCode)}
                    >
                      {" "}
                      <div className="products">
                        <div className="vertical-card">
                          <div className="company-image">
                            <div className="overlap-group">
                              <img
                                className="logo-img"
                                alt="test"
                                src={`img/${
                                  item && item.corpCode
                                    ? item.corpCode
                                    : "1234567"
                                }.png`}
                              ></img>
                            </div>
                          </div>
                          <div className="company-info">
                            <div className="title-2">
                              <div className="company-2">
                                {item && item.corpName
                                  ? item.corpName
                                  : "로딩 중..."}
                              </div>
                              <p className="price">
                                <span
                                  className={`stock-price ${
                                    item && item.cmpprevddPrc > 0
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
                                    item && item.cmpprevddPrc > 0
                                      ? "stock-change-plus"
                                      : "stock-change-minus"
                                  }`}
                                >
                                  {item
                                    ? `${item.cmpprevddPrc}%`
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
                    {ThemeData.map((item, index) => (
                      <div
                        className="products-wrapper"
                        key={index}
                        onClick={() => handleProductClick(item.corpCode)}
                      >
                        <div className="products">
                          <div className="vertical-card">
                            <div className="company-image">
                              <div className="overlap-group">
                                <img
                                  className="logo-img"
                                  alt="test"
                                  src={`img/${
                                    item && item.corpCode
                                      ? item.corpCode
                                      : "1234567"
                                  }.png`}
                                ></img>
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
                                  {item && item.corpName
                                    ? item.corpName
                                    : "로딩 중..."}
                                </div>
                                <p className="price">
                                  <span
                                    className={`stock-price ${
                                      item && item.cmpprevddPrc > 0
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
                                      item && item.cmpprevddPrc > 0
                                        ? "stock-change-plus"
                                        : "stock-change-minus"
                                    }`}
                                  >
                                    {item &&
                                    typeof item.cmpprevddPrc === "string"
                                      ? `${parseFloat(
                                          item.cmpprevddPrc
                                        ).toFixed(2)}%`
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
                  <div className="pick-company-toggle">
                    <Toggle
                      tabNames={[
                        "신한투자증권",
                        "유진투자증권",
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
                        "기타",
                      ]}
                      onTabChange={handleAdvisorChange}
                    />
                  </div>
                  <div className="pick-company">
                    {PickData.length > 1 ? (
                      PickData.map((item, index) => (
                        <div
                          className="products-wrapper"
                          key={index}
                          onClick={() => handleProductClick(item.corpCode)}
                        >
                          <div className="products">
                            <div className="vertical-card">
                              <div className="company-image">
                                <div className="overlap-group">
                                  <img
                                    className="logo-img"
                                    alt="test"
                                    src={`img/${
                                      item && item.corpCode
                                        ? item.corpCode
                                        : "1234567"
                                    }.png`}
                                  ></img>
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
                                    {item && item.corpName
                                      ? item.corpName
                                      : "로딩 중..."}
                                  </div>
                                  <p className="price">
                                    <span
                                      className={`stock-price ${
                                        item && item.cmpprevddPrc > 0
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
                                        item && item.cmpprevddPrc > 0
                                          ? "stock-change-plus"
                                          : "stock-change-minus"
                                      }`}
                                    >
                                      {item &&
                                      typeof item.cmpprevddPrc === "string"
                                        ? `${parseFloat(
                                            item.cmpprevddPrc
                                          ).toFixed(2)}%`
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
                </div>
                <div></div>
              </div>
            )}
          </div>
        )}
      </div>
      {isLoading && (
        <div className="spin">
          <Loading />
        </div>
      )}
    </div>
  );
};
