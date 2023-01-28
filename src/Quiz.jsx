import React from 'react';
import SelectAnswer from './SelectAnswer';

export default function Quiz(props) {
  //
  const renderQuestions = props.data.map((qst, i) => {
    //Destructure each quiz set
    const { ask, wrongAnswers, correctAnswer } = qst;
    const mixedAnswers = [...wrongAnswers, correctAnswer].sort(
      () => Math.random() - 0.5
    );

    return (
      <div className='question-frame'>
        <div className='question-cont'>
          <h2 className='question'>{ask}</h2>
          <SelectAnswer
            mixedAnswers={mixedAnswers}
            correctAnswer={correctAnswer}
            wrongAnswers={wrongAnswers}
          />
        </div>
      </div>
    );
  });

  //
  return (
    <div className='container'>
      {renderQuestions}
      <button className='check-btn'>Check your answers!</button>
    </div>
  );
}
