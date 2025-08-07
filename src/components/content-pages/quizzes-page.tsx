import { useParams } from "react-router-dom";
import { Quiz, useContentContext } from "../content-context";
import QuizComp from "../content/quiz";
import Header from "../header";
import { useEffect, useState } from "react";
import { getQuizzes } from "../../api/get-api";

function QuizzesPage() {
  const { id } = useParams();
  const [quizze, setQuizzes]  = useState<Quiz[]>([{
    question: "",
    options: ["", "", "", ""],
    answer: "",
    explanation: ""
  }]); 
  const {quizzes} = useContentContext();
  
  useEffect(() => {
    if (!quizzes) {
      getQuizzes(Number(id)).then((data) => setQuizzes(data.data));
    }
  }, [id, quizzes]);

  return (
    <div>
      <Header />
      <div className="sidebar-wrapper mobile-height md-margin-80px-top">
        <section
          className="bg-very-dark-gray padding-30px-all sm-padding-15px-lr wow animate__fadeIn"
          style={{ minHeight: "100vh" }}
        >
          <div className="container padding-30px-all sm-padding-15px-tb sm-no-padding-lr">
            <div className="row justify-content-center align-items-center">
              <div className="col-10 margin-three-bottom md-margin-30px-bottom text-left p-0">
                <h5 className="alt-font font-weight-500 margin-5px-bottom">
                  Title
                </h5>
                <p className="alt-font font-weight-500 no-margin-bottom">
                  Sub Title
                </p>
              </div>
              <div className="col-2 margin-four-bottom md-margin-30px-bottom p-0 d-flex justify-content-end">
                <button className="btn btn-very-small btn-dark-gray-gradient border-radius-7 margin-20px-bottom d-table d-lg-inline-block md-margin-lr-auto text-uppercase">
                  Regenerate Quizzes
                </button>
              </div>
            </div>
            {quizze.map((quiz) => {
              return (
                <QuizComp
                  question={quiz.question}
                  options={quiz.options}
                  answer={quiz.answer}
                  explanation={quiz.explanation}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuizzesPage;
