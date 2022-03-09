import React, { useEffect, useState } from "react";
import questions from './questions';
const MainTest = () => {
  const [allquestions,setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showButton, setShowButton] = useState(false)
	const [myanswer,setMyAnswer] = useState()

    const getstate = () => {
      questions().then(question => {
            setAllQuestions(question);
		});
	  };
      useEffect(()=>{
        getstate()
    },[])


    const handleAnswerOptionClick = (isCorrect,answerOption) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		  setMyAnswer(answerOption)
			setShowButton(true)
	};
	const nextQuestion = ()=>{
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < allquestions.length) {
			setShowButton(false)
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setShowButton(false)
		}
	}

  return (
    <>
    {showScore ? (
				<div className='score-section'>
					You scored {score} out of {allquestions.length}
				</div>
			) :
    <div className="container main_test_container">
      <div className="container maintest">
        <div className="Qnumber">
          <h3>Question {currentQuestion + 1} of {allquestions.length}</h3>
        </div>
        <div className="question">
          <div className="Qcontent">
            <p>Q). {allquestions[currentQuestion]?.questionText}? </p>
          </div>
        </div>
        <div className="row online_main">
        {allquestions[currentQuestion]?.answerOptions.map((answerOption) => (
          <div className="col-lg-6 col-md-6">
            <div id="option_main" className={myanswer === answerOption ? 'selected':null}>
              <p   id="option" onClick={() => handleAnswerOptionClick(answerOption.isCorrect,answerOption)}>
              {answerOption.answerText}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="Qnext_btn text-center">
        {
          showButton?
          <button onClick={()=>nextQuestion()}>Next</button>: <button className="next_disabled">Next</button>
        }
        </div>
      </div>
      </div>
}
    </>
  );
};

export default MainTest;
