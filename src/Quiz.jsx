import React from 'react';
import { nanoid } from 'nanoid';

export default function Quiz(props) {
  //
  const renderQuestions = props.data.map((qst, i) => {
    //Destructure each quiz set in the array
    const { ask, wrongAnswers, correctAnswer } = qst;

    const mixedAnswers = [...wrongAnswers, correctAnswer].sort(
      () => Math.random() - 0.5
    );

    // It prints mixedAnswers = wrongs + correct
    const printAnswers = mixedAnswers.map((a) => (
      <div
        key={nanoid()}
        id={i}
        className='answer'
        onClick={(e) => console.log(e.target)}
      >
        {a}
      </div>
    ));

    return (
      <div className='question-frame'>
        <div className='question-cont'>
          <h2 className='question'>{ask}</h2>
          {printAnswers}
        </div>
      </div>
    );
  });

  //
  return <div className='container'>{renderQuestions}</div>;
}
