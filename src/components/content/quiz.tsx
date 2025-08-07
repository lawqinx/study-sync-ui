import { useState } from "react";

interface QuizProps {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

function QuizComp({ question, options, answer, explanation }: QuizProps) {
  console.log(answer);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (!submitted) {
      setSelected(option);
      setSubmitted(true); // lock the selection after one click
    }
  };

  const isCorrect = selected?.trim().charAt(0) === answer;

  return (
    <div className="row">
      <div className="col-12 p-0">
        <p className="alt-font text-extra-large font-weight-500">{question}</p>
        <div className="row padding-20px-bottom">
          <div className="col-10 radio-button-row">
            <div className="radio-group">
              {options.map((option, idx) => {
                const id = `option-${idx}`;
                return (
                  <div>
                    <input
                      type="radio"
                      id={id}
                      name={question}
                      value={option}
                      disabled={submitted}
                      checked={selected === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    <label htmlFor={id}>{option}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center gap-2">
            {submitted && (
              <img
                src={isCorrect ? "images/check.png" : "images/cross.png"}
                width="26"
                height="26"
                alt={isCorrect ? "Correct" : "Incorrect"}
              />
            )}
            <button className="btn btn-very-small btn-green border-radius-7 text-uppercase">
              Submit
            </button>
          </div>
        </div>
        {submitted && (
          <p className="bg-forest-green padding-15px-all sm-padding-10px-all border-radius-7">
            <img
              src="images/i-info.png"
              className="margin-5px-right"
              width="13"
              height="13"
              alt=""
            />{" "}
            {explanation}
          </p>
        )}
      </div>
    </div>
  );
}

export default QuizComp;
