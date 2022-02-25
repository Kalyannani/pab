import React from "react";

const Program = () => {
  return (
    <div>
      <div className="container-fluid program_main">
        <div className="program_head">
          <h1>Our Program</h1>
        </div>
        <div className="row program_text">
          <p>
            In PabJob's students are trained through the Train and Hire model of
            learning for job-readiness and are eventually on-boarded to leading
            IT Company's. The 90 days intensive program develops the key skills
            that are required by top-ranked tech companies, covering major
            skilling problems, collaborative projects, code challenges, and
            interview clinics. Thereby, candidates jumpstart their careers in
            top Company's through the Train and Hire Program.
          </p>
        </div>
        <div className="row program_image">
          <img className="img-fluid" src="images/hire_train_program.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Program;
