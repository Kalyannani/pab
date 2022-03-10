import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import questions from './questions';
import RegisterForm from "./RegisterForm";
const MainTest = () => {
  const [allquestions,setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showButton, setShowButton] = useState(false)
  const [getQuestions,setQuestions] = useState(false)
	const [myanswer,setMyAnswer] = useState()
  const [idle,setIdle] = useState('')

    const getstate = () => {
      questions().then(question => {
          setAllQuestions(question);
          setQuestions(true)
		});
	  };

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

console.log(allquestions)
  return (
    <>
    {
      showScore ?
      (
				<div className='score-section'>
					<RegisterForm />
				</div>
			):
      getQuestions ?
      <div className="container main_test_container">
      <div className="container maintest">
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
      :
      <div className='mt-4 mb-5'>
         <div className='container'>
             <div className='row'>
                 <div className='col-md-12'>
                 <h1 className='Exam_Welcome'>Welcome To PabJobs Test</h1>

                 <h5 className='Exam_Instuctions'>General Instructions : </h5>
                 <ul className='Exam_Instuction_ul'>
                     <li>All questions are compulsory.</li>
                     <li>You can bookmark any question</li>
                     <li>Before Update the answer firstly UnCheck the previous answer and then updated it</li>
                     <li> This test is time bound,there's a timer on the right panel</li>
                     <li>You may leave the hall after the first 30 minutes of the exam</li>
                     <li>Keep your Admit Card on the table. Get permission from the HOD, if not in possession</li>
                     <li><b>NOTE :</b>To save answers,click on the Next button.</li>
                 </ul>
                 <div className='Exam_Test' onClick={()=>getstate()}>Proceed To Test</div>
                 </div>
             </div>
         </div>
        </div>
    }
    </>
  );
};

export default MainTest;
