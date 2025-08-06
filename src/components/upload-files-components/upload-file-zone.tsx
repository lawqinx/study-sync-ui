import { useEffect, useRef, useState } from "react";

import DashboardSlider from "../dashboard-slider-components/dashboard-slider";
import UploadFileBox from "./upload-file-box";
import UploadFileBrowser from "./upload-file-browser";
import { generateContents } from "../../api/post-api";

function UploadFileZone() {
  const [files, setFiles] = useState<File[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const allUploadsDone =
    files.length > 0 && files.every((file) => progressMap[file.name] === 100);

  useEffect(() => {
    if (allUploadsDone && bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 300);
    }
  }, [allUploadsDone]);

  const handleCancel = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setProgressMap((prev) => {
      const updated = { ...prev };
      delete updated[fileName];
      return updated;
    });
  };

  return (
    <div>
      <div className="container bg-dark-gray border-radius-30 padding-50px-all">
        <UploadFileBrowser setFiles={setFiles} />
        <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 justify-content-center m-0">
          {files.map((file) => {
            return (
              <UploadFileBox
                fileName={file.name}
                fileSize={file.size}
                progress={progressMap[file.name]}
                onCancel={handleCancel}
              />
            );
          })}
        </div>
        <div className="col-12 margin-five-top md-margin-40px-top sm-margin-30px-top text-center">
          {files.length > 0 && (
            <button
              className="btn btn-medium btn-dark-gray-gradient border-radius-7 margin-20px-bottom d-table d-lg-inline-block md-margin-lr-auto text-uppercase"
              onClick={() => {
                generateContents(files, (fileName, percent) => {
                  setProgressMap((prev) => ({
                    ...prev,
                    [fileName]: percent,
                  }));
                });
              }}
            >
              Generate Contents
            </button>
          )}
        </div>
      </div>
      {allUploadsDone && (
        <div ref={bottomRef}>
          <div className="container padding-100px-top sm-padding-50px-top">
            <DashboardSlider />
          </div>
          <div style={{ height: "50px" }} />{" "}
        </div>
      )}
    </div>
  );
}

export default UploadFileZone;
