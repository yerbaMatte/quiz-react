import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function PrintAnswers(props) {
  const isSelectedArray = props.mixedAnswers.map((a) => ({
    answer: a,
    isSelected: false,
    id: nanoid(),
    value: props.correctAnswer.includes(a),
  }));

  const [isSelected, setIsSelected] = useState(isSelectedArray);

  function selectAnswer(e) {
    const selectedItem = e.target.id;
    console.log(isSelected);
    setIsSelected((prev) => {
      const newSelected = prev.map((ans) => {
        if (ans.id === selectedItem) {
          return { answer: ans, isSelected: true, id: ans.id };
        } else {
          return { ...ans, isSelected: false };
        }
      });
      return newSelected;
    });
  }

  const printAnswers = props.mixedAnswers.map((a, i) => (
    <div
      id={isSelected[i].id}
      key={nanoid()} //useless
      className={isSelected[i].isSelected ? 'answer selected-answer' : 'answer'}
      onClick={selectAnswer}
    >
      {a}
    </div>
  ));

  return <div>{printAnswers}</div>;
}
