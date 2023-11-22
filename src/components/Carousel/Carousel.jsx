//기업 상세정보 카드 컴포넌트

import React, { useState, useEffect } from "react";
import "./style.css";

export const Carousel = ({}) => {
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 500ms ease-in-out"
  );

  const moveToNthSlide = (n) => {
    setTimeout(() => {
      setCarouselTransition("");
      setCurrCarousel(n);
    }, 500);
  };

  const dictionaryContents = [
    {
      id: 1,
      word: "이미지1",
      link: "./../../assets/Banner/001.jpg",
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
    {
      id: 2,
      word: "이미지2",
      link: "./../../assets/Banner/002.jpg",
      url: "/calc",
    },
    {
      id: 3,
      word: "이미지3",
      link: "./../../assets/Banner/003.jpg",
      url: "/",
    },
    {
      id: 4,
      word: "이미지4",
      link: "./../../assets/Banner/001.jpg",
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
    {
      id: 5,
      word: "이미지5",
      link: "./../../assets/Banner/002.jpg",
      url: "/calc",
    },
    {
      id: 6,
      word: "이미지6",
      link: "./../../assets/Banner/003.jpg",
      url: "/",
    },
  ];

  const slideNextSoulsCarousel = () => {
    const soulSliderLength = dictionaryContents.length;
    const newCurr = currCarousel + 1;

    // 이미지가 끝에 도달하면 처음 이미지로 이동
    if (newCurr === soulSliderLength - 2) {
      moveToNthSlide(1);
    } else {
      setCurrCarousel(newCurr);
    }

    setCarouselTransition("transform 500ms ease-in-out");
  };

  const slidePrevSoulsCarousel = () => {
    const soulSliderLength = dictionaryContents.length;
    const newCurr = currCarousel - 1;

    // 이미지가 처음에 도달하면 마지막 이미지로 이동
    if (newCurr === 0) {
      moveToNthSlide(soulSliderLength - 3);
    } else {
      setCurrCarousel(newCurr);
    }

    setCarouselTransition("transform 500ms ease-in-out");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideNextSoulsCarousel();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currCarousel]);

  return (
    <div id="carousel">
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${currCarousel * 600}px)`,
            transition: `${carouselTransition}`,
          }}
        >
          {dictionaryContents.length > 0 &&
            dictionaryContents.map((dictionaryContent, index) => (
              <div className="carousel-wrapper" key={dictionaryContent.id}>
                {/* 현재 인덱스가 현재 캐러셀 위치와 일치하는지 확인 */}
                {index >= currCarousel && index < currCarousel + 3 && (
                  <div
                    className="image-section"
                    style={{
                      backgroundImage: `url(${dictionaryContent.link})`,
                    }}
                  >
                    {dictionaryContent.word}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
