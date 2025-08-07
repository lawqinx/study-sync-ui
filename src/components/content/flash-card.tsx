interface FlashCardProps {
  question: string;
  answer: string;
}

function FlashCard({ question, answer }: FlashCardProps) {
  return (
    <div className="col-sm-8 team-block text-start feature-box-15 md-margin-30px-bottom sm-margin-15px-bottom last-paragraph-no-margin wow animate__fadeInUp">
      <figure>
        <div className="feature-box-content sm-w-100">
          <div className="feature-box-image d-flex justify-content-center align-items-center">
            <span className="text-large font-weigh-600 text-center px-4">
              <img src="images/ni-flashcard.png" alt="" />
              <br />
              {question}
            </span>
          </div>
          <div className="hover-content bg-green d-flex justify-content-center align-items-center">
            <div className="padding-twelve-lr">
              <span className="text-medium font-weight-400 d-inline-block text-center">
                {answer}
              </span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default FlashCard;
