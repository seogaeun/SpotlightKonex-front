//기업 상세정보 카드 컴포넌트

import React, { useState, useEffect } from "react";
import "./style.css";

export const Carousel = ({}) => {
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] =
    useState("500ms ease-in-out");

  const moveToNthSlide = (n) => {
    setTimeout(() => {
      setCarouselTransition("");
      setCurrCarousel(n);
    }, 500);
  };

  const DictionaryContents = [
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
    { id: 3, word: "이미지3", link: "./../../assets/Banner/003.jpg", url: "/" },
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
    { id: 6, word: "이미지6", link: "./../../assets/Banner/003.jpg", url: "/" },
  ];

  const SlideNextSoulsCarousel = () => {
    const soulSliderLength = DictionaryContents.length;
    const newCurr = currCarousel + 1;

    if (newCurr === soulSliderLength - 2) {
      moveToNthSlide(1);
    } else {
      setCurrCarousel(newCurr);
    }
    setCarouselTransition("500ms ease-in-out");
  };

  const SlidePrevSoulsCarousel = () => {
    const soulSliderLength = DictionaryContents.length;
    const newCurr = currCarousel - 1;

    if (newCurr === 0) {
      moveToNthSlide(soulSliderLength - 3);
    } else {
      setCurrCarousel(newCurr);
    }
    setCarouselTransition("500ms ease-in-out");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      SlideNextSoulsCarousel();
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
          {DictionaryContents.length > 0 &&
            DictionaryContents.map((dictionaryContent, index) => (
              <div className="carousel-wrapper" key={dictionaryContent.id}>
                {index >= currCarousel && index < currCarousel + 3 && (
                  <a
                    href={dictionaryContent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="image-section"
                      style={{
                        backgroundImage: `url(${dictionaryContent.link})`,
                      }}
                    >
                      {dictionaryContent.word}
                    </div>
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
