import "./DailyProblem.css";
function DailyProblem({ props }) {
  return (
    <div>
      <h2
        className="problem-card"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />
    </div>
  );
}

export default DailyProblem;
