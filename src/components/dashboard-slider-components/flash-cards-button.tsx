import { Link } from "react-router-dom";

function FlashCardsButton() {
  return (
    <div className="swiper-slide w-auto sm-h-auto last-paragraph-no-margin">
      <div className="h-100 align-items-center">
        <div className="d-block position-relative">
          <img src="images/slide-3.png" alt="" />
          <Link to="/flashcards" className="text-black">
            <p className="center-link bottom-text text-extra-large w-100 padding-60px-lr text-black text-uppercase text-left font-weight-500">
              Flash Cards <img src="images/arrow-next-black.png" alt="" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlashCardsButton;
