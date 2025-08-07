import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useParams } from "react-router-dom";
import DashboardSlider from "./dashboard-slider-components/dashboard-slider";
import { getContents } from "../api/get-api";
import { useContentContext } from "./content-context";

function Dashboard() {
  const { id } = useParams();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { setFlashCards, setQuizzes, setSummaries, summaries } = useContentContext();
  const [isLoading, setIsLoading] = useState("");
  const [isContentGenerated, setIsContentGenerated] = useState(false);
  
  useEffect(() => {
    if (id){
      getContents(Number(id), setIsLoading, setIsContentGenerated, setSummaries, setQuizzes, setFlashCards);
    }
  }, [id, setFlashCards, setQuizzes, setSummaries])

  console.log(summaries);
  
  return (
    <div className="sidebar-wrapper mobile-height sm-margin-80px-top">
      <Header />
      {isLoading && (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          {isLoading}
        </>
      )}
      {!isLoading && (
        <>
          <div className="container padding-100px-top sm-padding-50px-top">
            <DashboardSlider id={id}/>
          </div>
          <div style={{ height: "50px" }} />
        </>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
