import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"; // axios 추가
import { LeftButton4 } from "../../icons/LeftButton4";
import { NavBar } from "../../components/NavBar";
import { ListTitle } from "../../components/ListTitle";
import { LinkButton } from "../../components/LinkButton";
import "./styles.css";
const apiEndpoint = "http://133.186.215.123:8080";

export const PostCompany = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const backClick = () => {
    console.log("back");
    navigate("/manage");
  };

  const handleSubmit = async () => {
    const corpCode = "01695498";

    try {
      const response = await axios.post(
        `${apiEndpoint}/boards`,
        {
          title: title,
          context: content,
          corpCode: corpCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(content);
      console.log("Response Data:", response.data);
      navigate("/manage");
    } catch (error) {
      console.error("Post 실패:", error);
      // 에러 발생 시 알림창 또는 다른 처리 방법 추가
      alert("게시글 올리기에 실패했습니다.");
    }
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
          <input
            className="input-box"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
          <textarea
            className="textarea-box"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Post 버튼 */}
        <button
          type="button"
          className="link-button"
          onClick={handleSubmit}
          disabled={!title || !content}
        >
          이동하기➡️
        </button>
      </div>
    </div>
  );
};
