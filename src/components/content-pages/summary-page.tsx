import { useParams } from "react-router-dom";
import { Summary, useContentContext } from "../content-context";
import SummaryComp from "../content/summary";
import Header from "../header";
import { useEffect, useState } from "react";
import { getSummaries } from "../../api/get-api";

function SummaryPage() {
  const { id } = useParams();
  const [summary, setSummary]  = useState<Summary[]>([{
    chapter: "",
    summary: ""
  }]); 
  const {summaries} = useContentContext();
  
  useEffect(() => {
    if (!summaries) {
      getSummaries(Number(id)).then((data) => setSummary(data.data));
    }
  }, [id, summaries]);

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
              <div className="col-10 text-left p-0">
                <h5 className="alt-font font-weight-500 margin-5px-bottom">
                  Chapter 1
                </h5>
              </div>
            </div>
            <div className="row">
              {summary.map((sm) => {
                return (
                  <SummaryComp
                    chapter={sm.chapter}
                    summary={sm.summary}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SummaryPage;
