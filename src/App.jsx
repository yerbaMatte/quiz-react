import React, { useState } from 'react';
import Welcome from './Welcome';
import Quiz from './Quiz';

export default function App() {
  const [isStarted, setIsStarted] = useState(true);
  const [quiz, setQuiz] = useState([]);

  function unEscape(htmlStr) {
    htmlStr = htmlStr.replace(/&lt;/g, '<');
    htmlStr = htmlStr.replace(/&gt;/g, '>');
    htmlStr = htmlStr.replace(/&quot;/g, '"');
    htmlStr = htmlStr.replace(/&#039;/g, "'");
    htmlStr = htmlStr.replace(/&amp;/g, '&');
    htmlStr = htmlStr.replace(/&ntilde/g, 'ñ');
    return htmlStr;
  }

  React.useEffect(function () {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple'
    )
      .then((x) => x.json())
      .then((data) =>
        setQuiz(
          data.results.map((singleSet) => {
            const formatBadAnswers = singleSet.incorrect_answers.map((x) =>
              unEscape(x)
            );
            const formatCorrect = unEscape(singleSet.correct_answer);

            return {
              ask: [unEscape(singleSet.question)],
              wrongAnswers: formatBadAnswers,
              correctAnswer: formatCorrect,
            };
          })
        )
      );
  }, []);

  return (
    <div>
      {isStarted ? (
        <Quiz data={quiz} />
      ) : (
        <Welcome handleClick={() => setIsStarted((prev) => !prev)} />
      )}
    </div>
  );
}
