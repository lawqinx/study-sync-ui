import { Link } from "react-router-dom";

function QuizzesButton(props: any) {
  return (
    <div className="swiper-slide w-auto sm-h-auto last-paragraph-no-margin">
      <div className="h-100 align-items-center">
        <div className="d-block position-relative">
          <img src="images/slide-2.png" alt="" />
          <Link to={props.id ? `/quizzes/${props.id}` : "/quizzes"} className="text-black">
            <p className="center-link bottom-text text-extra-large w-100 padding-60px-lr mx-auto text-black text-uppercase text-left font-weight-500">
              Quizzes <img src="images/arrow-next-black.png" alt="" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizzesButton;
