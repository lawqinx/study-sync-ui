import { useContentContext } from "../content-context";
import Quiz from "../content/quiz";
import Header from "../header";

function QuizzesPage() {
  const { quizzes } = useContentContext();

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
            {quizzes.map((quiz) => {
              return (
                <Quiz
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
