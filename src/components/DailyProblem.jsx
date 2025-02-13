import React from "react";
function DailyProblem({ problem }) {
  return <div dangerouslySetInnerHTML={{ __html: problem }} />;
}

export default DailyProblem;
