import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import questions from './questions';
import RegisterForm from "./RegisterForm";
// import moment from "moment";
import CountdownClock from "react-countdown-clock";
import Question from "./Question";
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
// import apiList from "../../../lib/apiList";
// import apiList from "../../lib/apiList";
import apiList from "../../../lib/apiList";
import axios from "axios";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";


const MainTest = () => {


  const result = useSelector(state => state.data)
  const [modalShow, setModalShow] = React.useState(false);
  const [totalAmount,setTotalamount] = useState()
  const [recruiter,setRecruiter] = useState()
  const [priceDetails,setPriceDetails] = useState({
    value:"",
    gst:""
  })
  const onHide = () => setModalShow(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const modalDynamic = (e)=>{
    setPriceDetails({
      ...priceDetails,
      value:e.value,
      gst:e.gst
    })
    setTotalamount(Number(e.value)+Number(e.gst))
    setModalShow(true)
  }
  
  useEffect(() => {
    getUser();
  },[]);


  const getUser = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setRecruiter(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  function isObj(val) {
    return typeof val === 'object'
  }
   function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  
  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
   function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

const getData=(data)=>
{
return fetch(`${apiList.paytmpayment}`,{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}).then(response=>response.json()).catch(err=>console.log(err))
}

const makePayment=()=>
{
if(result){
  getData({
    name:recruiter.name,
    email:recruiter.email,
    phone:JSON.stringify(recruiter.contactNumber),
    amount:JSON.stringify(totalAmount)
  }).then(response=>{
      var information={
          action:"https://securegw.paytm.in/theia/processTransaction",
          params:response
      }
    post(information)
  })
}else{
  toast.error("You Must Login First")
}

}



  const [allquestions,setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showButton, setShowButton] = useState(false)
  const [getQuestions,setQuestions] = useState(false)
	const [myanswer,setMyAnswer] = useState()
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
              <Question 
              CountdownClock = {CountdownClock}
              setQuestions={setQuestions}
              currentQuestion={currentQuestion}
              allquestions={allquestions}
              myanswer={myanswer}
              handleAnswerOptionClick={handleAnswerOptionClick}
              showButton={showButton}
              nextQuestion={nextQuestion}
              />
      :
      <div className='mt-4 mb-5'>
         <div className='container'>
             <div className='row'>
                 <div className='col-md-6'>
                 <h1 className='Exam_Welcome'>Welcome To PabJobs Test</h1>

                 <h5 className='Exam_Instuctions'>General Instructions : </h5>
                 <ul className='Exam_Instuction_ul'>
                     <li>All questions are compulsory.</li>
                     <li>Total 30 questions in Exam.</li>
                     <li>Each Question one Minute</li>
                     {/* <li>You may leave the hall after the first 30 minutes of the exam</li>
                     <li>After complete Exam Enter to Hire and Train Form and Fill The form Data</li>
                     <li>Keep your Admit Card on the table. Get permission from the HOD, if not in possession</li> */}
                     <li><b>NOTE :</b>To save answers,click on the Next button.</li>
                 </ul>
                 <div className='Exam_Test' onClick={()=>getstate()}>Proceed To Test</div>
                 </div>
                 <div className='col-md-6 text-center ' style={{marginTop:"160px"}}  onClick={() => modalDynamic({
                  value: "199",
                  gst: "35"
                })}>
                   
                    <img src="images/onlineexam.png" alt="image" style={{transform:"rotateY(550deg)"}}/>
                 </div>
             </div>
         </div>
        </div>
    }
          <Modal 
      isOpen={modalShow}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setModalShow(false)}
      style={customStyles}
      ariaHideApp={false}
      >
        <div className="payment_modal">

        
        <div className="close_modal_btn" >
        <a className="close_modal" onClick={()=>setModalShow(false)}><i className="fas fa-times"></i></a>
        </div>
        <div className="payment_details_heading ">
          <h5>Payment Details</h5>
        </div>

        <div className="payment_details">
          <p><span className="payment_1">Total </span> :<span className="payment_2"> &#8377; {priceDetails.value}</span> </p>
          <p><span className="payment_1">Estimated GST </span> :<span className="payment_2"> &#8377; {priceDetails.gst}</span> </p>
        </div>
        <hr className="hr_divider"/>
        </div>
      <div className="payment_details">
        <p> <span className="payment_1">Total Payable Amount</span> : <span className="payment_2"> &#8377; {totalAmount}</span></p>
      </div>
      <div className="buynow_payment">
        <button className="buynow_here" onClick={makePayment}>Proceed</button>
      </div>
      </Modal> 
    </>
  );
};

export default MainTest;
