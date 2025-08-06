import { useEffect, useRef } from "react";

interface UploadFileBoxProps {
  fileName: string;
  fileSize: number;
  progress: number;
  onCancel: (fileName: string) => void;
}

function UploadFileBox({
  fileName,
  fileSize,
  progress = 0,
  onCancel,
}: UploadFileBoxProps) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="col bg-extra-medium-gray margin-20px-bottom margin-15px-lr sm-margin-10px-bottom padding-20px-lr padding-15px-tb border-radius-10 last-paragraph-no-margin text-center text-md-start position-relative">
      <div className="feature-box-6 position-relative margin-15px-bottom">
        <i className="icon-extra-medium">
          <img src="images/i-file.png" alt="" />
        </i>
        <div className="alt-font text-small text-white font-weight-600">
          {fileName}
        </div>
        <p className="text-extra-small text-medium-gray margin-20px-bottom">
          {formatSize(fileSize)}
        </p>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div
          className="progress bg-medium-gray flex-grow-1"
          style={{ height: "6px", position: "relative" }}
        >
          <div
            ref={progressRef}
            className="bg-green"
            role="progressbar"
            aria-progressnow={progress}
            aria-progressmin={0}
            aria-progressmax={100}
            style={{
              width: "0%",
              transition: "width 0.6s ease",
              height: "100%",
            }}
          />
        </div>
        <span
          className="text-small"
          style={{ color: "white", minWidth: "40px" }}
        >
          {progress}%
        </span>
      </div>
      {progress === 100 ? (
        <button
          className="btn-x"
          title="Close (Esc)"
          type="button"
          onClick={() => onCancel(fileName)}
        >
          <img src="images/i-bin.png" alt="" />
        </button>
      ) : (
        <button
          className="btn-x"
          title="Close (Esc)"
          type="button"
          onClick={() => onCancel(fileName)}
        >
          x
        </button>
      )}
    </div>
  );
}

const formatSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  } else {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
};

export default UploadFileBox;
