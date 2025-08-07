interface SummaryProps {
  chapter: string;
  summary: string;
}

function Summary({ chapter, summary }: SummaryProps) {
  return (
    <div style={{ color: "#d3d3d3" }}>
      <div className="col-12 p-0">
        <h6>{chapter}</h6>
        <p>{summary}</p>
      </div>
      <div className="col-12 p-0 dot-separator"></div>
    </div>
  );
}

export default Summary;
