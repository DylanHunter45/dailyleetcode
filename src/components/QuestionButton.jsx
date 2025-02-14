import PropTypes from "prop-types";
import "./QuestionButton.css";

function QuestionButton({ questionLink }) {
  const handleClick = () => {
    if (questionLink) {
      // console.log(questionLink);
      window.open(questionLink, "_blank");
    } else {
      console.log("No questionLink in props");
    }
  };

  return (
    <button className="question-link-btn" onClick={handleClick}>
      LeetCode Link
    </button>
  );
}

QuestionButton.PropTypes = {
  questionLink: PropTypes.string,
};

export default QuestionButton;
