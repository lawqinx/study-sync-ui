import { Dispatch, SetStateAction, useRef } from "react";

interface UploadFileBrowserProps {
  setFiles: Dispatch<SetStateAction<File[]>>;
}

function UploadFileBrowser({ setFiles }: UploadFileBrowserProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFiles((prev: File[]) => {
        const newFiles = Array.from(files);
        const existingNames = new Set(prev.map((f) => f.name));
        const filtered = newFiles.filter((f) => !existingNames.has(f.name));
        return [...prev, ...filtered];
      });
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 margin-five-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center">
        <div className="alt-font text-medium-gray text-uppercase margin-35px-bottom">
          <img src="images/i-upload.png" alt="" />
        </div>
        <h6 className="alt-font text-extra-light-gray font-weight-500 margin-5px-bottom">
          Upload files to generate study contents
        </h6>
        <p className="text-dark-gray margin-35px-bottom">
          Lecture notes, slides, PDF documents &amp; images
        </p>
        <button
          className="btn btn-medium btn-dark-gray-gradient border-radius-7 margin-20px-bottom d-table d-lg-inline-block md-margin-lr-auto text-uppercase text-white"
          onClick={handleBrowseClick}
        >
          Browse Files
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default UploadFileBrowser;
