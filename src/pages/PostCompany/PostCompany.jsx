// PostCompany.js

import React, { useState } from "react";
import { LeftButton4 } from "../../icons/LeftButton4";
import { NavBar } from "../../components/NavBar";
import { ListTitle } from "../../components/ListTitle";
import { LinkButton } from "../../components/LinkButton";
import "./styles.css"; // 외부 CSS 파일을 import

export const PostCompany = () => {
  const backClick = () => {
    console.log("back");
  };

  return (
    <div className="postcompany">
      <div className="postcompanyContainer">
        <NavBar
          className="nav-bar-instance"
          icon={<LeftButton4 className="left-button-4" onClick={backClick} />}
          leftControl="icon"
          pageTitle="게시글 올리기"
          rightButtonClassName="design-component-instance-node"
          rightControl="none"
        />

        {/* 제목 */}
        <div className="company-detailinfo">
          <ListTitle
            className="subtitile"
            divClassName="list-title-2"
            rightControl="none"
            title="Title"
          />
          {/* 제목 inputBox */}
          <input className="input-box" placeholder="제목을 입력하세요" />
        </div>

        {/* 내용 */}
        <div className="company-detailinfo">
          <ListTitle
            className="subtitile"
            divClassName="list-title-2"
            rightControl="none"
            title="Content"
          />
          {/* 내용 inputBox */}
          <textarea className="textarea-box" placeholder="내용을 입력하세요" />
        </div>

        {/* Post 버튼 */}
        <LinkButton to={""} isLinked={false} buttonText="이동하기➡️" />
      </div>
    </div>
  );
};
