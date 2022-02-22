import React from "react";

const Selection = () => {
  return (
    <div>
      <div className="container-fluid selection">
        <div className="selection_head">
          <h1>Selection Process</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 selection_one">
            <span className="span">01</span>
            <span>
              <img
                src="images/selectionone.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Eligibility as per Company's specifications</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 selection_one">
            <span className="span">02</span>
            <span>
              <img
                src="images/selectiontwo.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>
              Evaluation of Aptitude, Cognitive Skills, Coding Aptitude, and
              Verbal Reasoning
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 selection_one">
            <span className="span">03</span>
            <span>
              <img
                src="images/selectionthree.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Self-sponsored Training @ PabJobs</p>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 selection_one">
            <span className="span">04</span>
            <span>
              <img
                src="images/selectionfour.jpg"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Final Interview by the Company</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 selection_one selection_five">
            <span className="span">05</span>
            <span>
              <img
                src="images/selectionfive.jpg"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p className="text-left">Offer letter and Onboarding</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
