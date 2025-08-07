import ExamPredictionButton from "./exam-prediction-button";
import FlashCardsButton from "./flash-cards-button";
import PerformanceAnalyticsButton from "./performance-analytics-button";
import QuizzesButton from "./quizzes-button";
import SummaryButton from "./summary-button";
import { useEffect } from "react";

import Swiper from "swiper";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

Swiper.use([Mousewheel, Scrollbar]);

function DashboardSlider( props: any ) {
  useEffect(() => {
    const slider = document.querySelector(".swiper") as HTMLElement;

    if (slider) {
      const options = JSON.parse(
        slider.getAttribute("data-slider-options") ?? "{}"
      );

      new Swiper(slider, options);
    }
  }, []);
  console.log(props);

  return (
    <div className="container padding-100px-top sm-padding-50px-top">
      <div
        className="swiper-bottom-scrollbar-full swiper"
        data-slider-options='{ "slidesPerView": "auto", "allowTouchMove":true, "grabCursor":true, "spaceBetween": 30, "keyboardControl":true, "speed":1000, "keyboard": { "enabled": true }, "scrollbar": { "el": ".swiper-scrollbar", "draggable": true, "hide": false, "snapOnRelease": true }, "mousewheel":{ "enable": true }, "navigation": { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }, "pagination": { "el": null } }'
      >
        <div className="swiper-wrapper padding-35px-bottom">
          <SummaryButton id={props.id}/>
          <QuizzesButton id={props.id}/>
          <FlashCardsButton id={props.id}/>
          <PerformanceAnalyticsButton />
          <ExamPredictionButton />
          <div className="swiper-slide w-150px sm-w-100 sm-h-auto"></div>
        </div>
        <div className="swiper-scrollbar d-none d-md-inline-block"></div>
        <div className="swiper-pagination-vertical position-fixed bullet-deep-pink z-index-5"></div>
      </div>
    </div>
  );
}

export default DashboardSlider;
