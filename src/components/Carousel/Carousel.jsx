//기업 상세정보 카드 컴포넌트

import React, { useState, useEffect } from "react";
import "./style.css";
import image1 from "./../../assets/Banner/001.jpg";
import image2 from "./../../assets/Banner/002.jpg";
import image3 from "./../../assets/Banner/003.jpg";

export const Carousel = ({}) => {
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] =
    useState("200ms ease-in-out");

  // 이미지의 너비를 가져와서 사용
  const imageWidth = 600; // 이미지의 너비
  const moveToNthSlide = (n) => {
    setTimeout(() => {
      setCarouselTransition("600px");
      setCurrCarousel(n);
    }, 500);
  };

  const DictionaryContents = [
    {
      id: 1,
      word: "이미지1",
      link: image1,
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
    {
      id: 2,
      word: "이미지1",
      link: image1,
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
    {
      id: 3,
      word: "이미지5",
      link: image2,
      url: "/calc",
    },
    {
      id: 4,
      word: "이미지5",
      link: image2,
      url: "/calc",
    },
    {
      id: 5,
      word: "이미지6",
      link: image3,
      url: "https://apply.nu-angels.com/about",
    },
    {
      id: 6,
      word: "이미지6",
      link: image3,
      url: "https://apply.nu-angels.com/about",
    },
    {
      id: 7,
      word: "이미지1",
      link: image1,
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
    {
      id: 8,
      word: "이미지1",
      link: image1,
      url: "https://www.kirs.or.kr/public/newsview.html?no=1250",
    },
  ];

  const SlideNextSoulsCarousel = () => {
    const soulSliderLength = DictionaryContents.length;
    const newCurr = currCarousel + 1;

    if (newCurr === soulSliderLength - 4) {
      moveToNthSlide(1);
    } else {
      setCurrCarousel(newCurr);
    }
    setCarouselTransition("200ms ease-in-out");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      SlideNextSoulsCarousel();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currCarousel]);

  return (
    <div id="carousel">
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${currCarousel * imageWidth}px)`,
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
                    ></div>
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
