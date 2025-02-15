import "./Home.css";
function home() {
  return (
    <div className="problem-forge">
      <section className="intro">
        <div className="container">
          <h2>Solve, Learn, and Grow with the Daily LeetCode Problem</h2>
          <p>
            At <strong>Problem Forge</strong>, we believe that consistent
            practice is the key to mastering coding challenges and improving
            your problem-solving skills. Our platform delivers a daily LeetCode
            problem straight to your fingertips, helping you stay on track with
            your coding journey, no matter your skill level.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Key Features:</h2>
          <ul>
            <li>
              <strong>Daily LeetCode Problem:</strong> Every day, get a fresh
              LeetCode problem with varying difficulty levels. Perfect for daily
              practice or to warm up before your coding interviews!
            </li>
            <li>
              <strong>Random Problems:</strong> Need a break from the routine?
              Explore a wide variety of random coding challenges to test your
              creativity and push your boundaries.
            </li>
            <li>
              <strong>Instant Access:</strong> Get started right away! No
              sign-up needed to access our daily and random problems – just
              come, solve, and grow.
            </li>
            <li>
              <strong>Track Your Progress:</strong> Log your solutions and see
              how you&apos;re improving. Whether you&apos;re focusing on
              algorithmic challenges or brushing up on data structures,
              we&apos;ve got you covered.
            </li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Why Problem Forge?</h2>
          <ul>
            <li>
              <strong>Boost Your Skills:</strong> Regular practice leads to
              mastery. Challenge yourself with problems designed to build your
              coding muscles every day.
            </li>
            <li>
              <strong>For Every Level:</strong> Whether you&apos;re a beginner
              or an experienced coder, you&apos;ll find problems that match your
              expertise.
            </li>
            <li>
              <strong>No More Excuses:</strong> With daily problem suggestions
              and random challenges, you’ll never run out of material to
              practice.
            </li>
          </ul>
          <a href="/daily" className="btn secondary-btn">
            Start the daily problem
          </a>
          <a href="/random" className="btn primary-btn">
            Start solving problems
          </a>
        </div>
      </section>
    </div>
  );
}

export default home;
