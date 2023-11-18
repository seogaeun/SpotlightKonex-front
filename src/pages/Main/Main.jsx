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
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  const handleSectionChange = (section) => {
    setSelectedSection(section);
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
              <Toggle section1Text="거래대금" section2Text="좋아요수" section3Text="조회수" onTabChange={handleSectionChange}/>
            </div>
            <div className="ranking-content">
              <div className="rankin">
                <div className="company">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                          <Tag className="rank" style="focus" text="TAG" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">기업명</div>
                          <p className="price">
                            <span className="span">23,000원 </span>
                            <span className="text-wrapper-2">-2.5%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rankin-etc">
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                          <Tag className="rank" style="focus" text="TAG" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">기업명</div>
                          <p className="price">
                            <span className="span">23,000원 </span>
                            <span className="text-wrapper-2">-2.5%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                          <Tag className="rank" style="focus" text="TAG" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">기업명</div>
                          <p className="price">
                            <span className="span">23,000원 </span>
                            <span className="text-wrapper-2">-2.5%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-wrapper">
                  <div className="products">
                    <div className="vertical-card">
                      <div className="company-image">
                        <div className="overlap-group">
                          <Image className="image-instance" icon={<Image8 className="icon-instance-node" />} />
                          <Tag className="rank" style="focus" text="TAG" />
                        </div>
                      </div>
                      <div className="company-info">
                        <div className="title-2">
                          <div className="company-2">기업명</div>
                          <p className="price">
                            <span className="span">23,000원 </span>
                            <span className="text-wrapper-2">-2.5%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedTab === "section2" && (
          <div className="hello-world">
            <p>Hello World!</p>
          </div>
        )}
      </div>
    </div>
  );
};
