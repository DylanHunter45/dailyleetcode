import "./DailyProblem.css";
function DailyProblem({ question }) {
  return (
    <div>
      <h2
        className="problem-card"
        dangerouslySetInnerHTML={{ __html: question }}
      />
    </div>
  );
}

export default DailyProblem;
