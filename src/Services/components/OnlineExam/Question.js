import React from 'react'

import { useNavigate } from 'react-router-dom';
const Question = ({CountdownClock,setQuestions,currentQuestion,allquestions,myanswer,handleAnswerOptionClick,showButton,nextQuestion})=>{
  const navigate = useNavigate();
  const redirectHome = ()=>{
    navigate("/hireandtrain")
  }

    return(
        <div className="container main_test_container">
      <div className="container maintest">
      <CountdownClock
                  seconds={30 * 60}
                  showMilliseconds={true}
                  timeFormat="hms"
                  alpha={0.9}
                  size={100}
                  color={"#270D44"}
                  fontSize="auto"
                  onComplete={() =>redirectHome()}
                />
        <div className="Qnumber">
          <h3>Question {currentQuestion + 1} of {allquestions.length}</h3>
        </div>
        <div className="question">
          <div className="Qcontent">
            <p>Q). {allquestions[currentQuestion]?.questionText} </p>
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
    )
}
export default Question