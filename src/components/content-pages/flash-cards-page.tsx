import { useContentContext } from "../content-context";
import FlashCard from "../content/flash-card";
import Footer from "../footer";
import Header from "../header";

function FlashCardsPage() {
  const { flashCards } = useContentContext();
  return (
    <div>
      <Header />
      <div className="sidebar-wrapper mobile-height md-margin-80px-top">
        <section
          className="bg-very-dark-gray padding-30px-all sm-padding-15px-lr wow animate__fadeIn"
          style={{ minHeight: "100vh" }}
        >
          <div className="container padding-30px-all sm-padding-15px-tb sm-no-padding-lr">
            <div className="row justify-content-center align-items-center margin-80px-bottom sm-margin-30px-bottom">
              <div className="col-12 text-left p-0 mb-10">
                <h5 className="alt-font font-weight-500 margin-5px-bottom">
                  Title
                </h5>
              </div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-lg-3 row-cols-md-2">
              {flashCards.splice(0, 3).map((card) => {
                return (
                  <FlashCard question={card.question} answer={card.answer} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default FlashCardsPage;
