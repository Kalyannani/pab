import React from 'react'
import { Link } from 'react-router-dom';

const ExamHomepage = () => {
    


    return (
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
                 <Link to='/questions'>
                 <div className='Exam_Test'>Proceed To Test</div>
                 </Link>
                 </div>

             </div>
         </div>
        </div>
    )
}

export default ExamHomepage;