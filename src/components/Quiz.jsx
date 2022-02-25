import React, { useState } from "react";
import "./Quiz.css";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Quiz() {
  const [quiz, setQuiz] = React.useState([]);

  function getQuiz() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
      .then((res) => res.json())
      .then((data) => setQuiz(data["results"]));
  }

  React.useEffect(() => {
    getQuiz();
  }, []);

  const renderQuiz = quiz.map((val) => {
    let question = decodeURIComponent(val["question"]);
    let correctAnswer = decodeURIComponent(val["correct_answer"]);
    let wrongOptions = val["incorrect_answers"];
    let allOptions = [];
    wrongOptions.map((elem) => allOptions.push(decodeURIComponent(elem)));
    allOptions.push(correctAnswer);
    allOptions = shuffle(allOptions);

    // function RenderOptions() {
    //   return allOptions.map((val) => {
    //     return (
    //       <>
    //           <input
    //             type="radio"
    //             name="options"
    //             id={val}
    //             value={val}
    //             className="check-btn"
    //           />{" "}
    //           <span className="text-inner"></span>
    //         <label for={val}>{val}</label>
    //         &nbsp; &nbsp;
    //       </>
    //     );
    //   });
    // }

    function RenderOptions(){
      return (
        <p className="btns">
        <input type="radio" name="options" id={allOptions[0]} value={allOptions[0]} className="check-btn" /><label>{allOptions[0]}</label>
        <input type="radio" name="options" id={allOptions[1]} value={allOptions[1]} className="check-btn" /><label>{allOptions[1]}</label>
        <input type="radio" name="options" id={allOptions[2]} value={allOptions[2]} className="check-btn" /><label>{allOptions[2]}</label>
        <input type="radio" name="options" id={allOptions[3]} value={allOptions[3]} className="check-btn" /><label>{allOptions[3]}</label>
        </p>
      )
    }

    return (
      <div className="container">
        <div className="question">{question}</div>
        <div className="options">
          <RenderOptions />
        </div>
        <hr className="dash" />
      </div>
    );
  });

  return <div className="quiz">{renderQuiz}</div>;
}
