import { useEffect, useState } from "react";
import { getDailyProblem } from "../services/api";
import DailyProblem from "../components/DailyProblem";
import QuestionButton from "../components/QuestionButton";

function Daily() {
  const [dailyProblem, setDailyProblem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadDailyProblem = async () => {
      try {
        const findDailyProblem = await getDailyProblem();
        console.log(findDailyProblem);
        setDailyProblem(findDailyProblem);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch daily problem 😭 ... ");
      } finally {
        setLoading(false);
      }
    };
    loadDailyProblem();
  }, []);

  return (
    <div>
      <QuestionButton questionLink={dailyProblem.questionLink} />
      <DailyProblem props={dailyProblem} />
    </div>
  );
}

export default Daily;
