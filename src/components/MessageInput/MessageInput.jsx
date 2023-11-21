// MessageInput.js
import React, { useState } from "react";
import "./style.css";
import { Icon2 } from "../../icons/Icon2";
import axios from "axios";
const apiEndpoint = "http://125.6.38.124";

export const MessageInput = ({ pageCorpCode }) => {
  const [text, setText] = useState("");

  const accessEmail = sessionStorage.getItem("email");
  const accessCorpCode = sessionStorage.getItem("corpCode");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    // 공란인 경우 알림창 띄우기
    if (text.trim() === "") {
      alert("메시지를 입력하세요.");
      return; // 메시지가 비어있으면 아무 동작도 하지 않음
    }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const statusParam = showCompanyAnswers ? "true" : "false";
    //       const response = await fetch(
    //         `${apiEndpoint}/enterprise/talk?corpCode=${corpCode}&status=${statusParam}`
    //       );
    //       const data = await response.json();

    //       // 서버 응답 구조에 따라 적절히 수정
    //       if (Array.isArray(data)) {
    //         // 데이터를 적절한 형식으로 변환
    //         const formattedData = data.map((item) => ({
    //           id: item.context,
    //           date: new Date(),
    //           text: item.context,
    //           sender: item.writerType ? "company" : "user",
    //           nickName: item.nickname,
    //         }));

    //         setCompanyTalkdata(formattedData);
    //         console.log("채팅 데이터:", formattedData);
    //       } else {
    //         console.error("채팅 데이터 형식이 올바르지 않습니다:", data);
    //       }
    //     } catch (error) {
    //       console.error("채팅 데이터를 가져오는 중 오류 발생:", error);
    //     }
    //   };

    //   fetchData();
    // }, [corpCode, showCompanyAnswers]);

    try {
      const response = await fetch(`${apiEndpoint}/enterprise/talk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          context: text,
          corpCode: pageCorpCode,
          email: accessEmail,
        }),
      });

      console.log("페이지 코드" + pageCorpCode);
      console.log("페이지 텍스트" + text);
      console.log("페이지 이메일" + accessEmail);
      if (response.ok) {
        setText("");
        // Optionally handle success
      } else {
        // Handle error
        console.error("전송 에러:", response.statusText);

        console.log("페이지 코드" + pageCorpCode);
        console.log("페이지 텍스트" + text);
        console.log("페이지 이메일" + accessEmail);
      }
    } catch (error) {
      console.error("전송에러:", error.message);
      console.log("페이지 코드" + pageCorpCode);
      console.log("페이지 텍스트" + text);
      console.log("페이지 이메일" + accessEmail);
    }
  };

  return (
    <div className="MessageInput">
      <form onSubmit={handleMessageSubmit}>
        <input
          className="inputBox"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메세지를 입력하세요."
        />
        <button className="submitBtn" type="submit">
          <Icon2 className="icon-2" />
        </button>
      </form>
    </div>
  );
};
