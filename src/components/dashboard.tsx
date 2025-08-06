import Footer from "./footer";
import Header from "./header";
import UploadFileZone from "./upload-files-components/upload-file-zone";

function Dashboard() {
  return (
    <div className="sidebar-wrapper mobile-height sm-margin-80px-top">
      <Header />
      <section className="bg-very-dark-gray wow animate__fadeIn">
        <UploadFileZone />
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
