import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Image } from "../../components/Image";
import { ListTitle } from "../../components/ListTitle";
import { NoOfItemsWrapper } from "../../components/NoOfItemsWrapper";
import { Tag } from "../../components/Tag";
import { Image7 } from "../../icons/Image7";
import { Image8 } from "../../icons/Image8";
import "./style.css";
import '../../styles/styleguide.css';


export const Main = () => {
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
          <NoOfItemsWrapper
            className="content-switcher-2"
            contentSwitcherDivClassName="design-component-instance-node"
            contentSwitcherDivClassName1="content-switcher-4"
            contentSwitcherDivClassNameOverride="content-switcher-4"
            contentSwitcherSelected={false}
            contentSwitcherSelected1
            contentSwitcherSelectedFalseClassName="content-switcher-6"
            contentSwitcherSelectedTrueClassName="content-switcher-3"
            contentSwitcherSelectedTrueClassNameOverride="content-switcher-5"
            contentSwitcherTitle="Home"
            contentSwitcherTitle1="Enterprise"
            contentSwitcherTitle2="Find"
            divider="https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/655026be6f5df980bf8957e0/img/divider-6.svg"
            img="https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/655026be6f5df980bf8957e0/img/divider-7.svg"
            noOfItems="three"
          />
        </div>
        <div className="ranking-tab">
          <div className="section-tab">
            <div className="chips">
              <Tag className="tag-instance" style="default" text="좋아요수" />
              <Tag className="tag-2" style="default" text="조회수" />
              <Tag className="tag-3" style="focus" text="거래대금" />
            </div>
          </div>
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
      </div>
    </div>
  );
};
