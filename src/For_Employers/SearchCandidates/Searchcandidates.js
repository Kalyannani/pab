import React, { useState } from "react";
// import '../../src/For_Employers/Searchcandidates/'
import { Link } from 'react-router-dom'
import {useCallback } from "react";
import Modal from "react-modal";
import UI from '../SearchCandidates/UI'


const Searchcandidates = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    // const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

    // const radioHandler = (status) => {
    //     setStatus(status);
    // };


    const customStyles = {
        content: {
          top: '475px',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:"600px",
          padding:"20px 0px 0px"
          // position:"relative"
        },
        overlay:
        {}

      };

    const [clickRadio, setClickRadio] = useState(true);

    const ClickRadio1 = () => {
      setClickRadio(false);
      isChangeRadio(true);
      isChangeRadio3(true);
    };
  
    const [changeRadio, isChangeRadio] = useState(true);
  
    const ChangeRadio2 = () => {
      isChangeRadio(false);
      setClickRadio(true);
      isChangeRadio3(true);
    };
  
    const [changeRadio3, isChangeRadio3] = useState(true);
    const ChangeRadio3 = () => {
      isChangeRadio3(false);
      isChangeRadio(true);
      setClickRadio(true);
    };
  
    const [changeRadio4, isChangeRadio4] = useState(true);
    const ChangeRadio4 = () => {
      isChangeRadio4(false);
      isChangeRadio(true);
      isChangeRadio3(true);
      setClickRadio(true);
    };
    return (

      <>
        
        <div style={{marginTop:"110px"}}>
            <div className="job_detail_wrapper">
                <div className="heading_pic_filter_list">
                    <h1 className="filter_list_heading_1">Student List</h1>
                    <p className="text-center filter_list_sub_heading">
                        <Link to="/" className="filter_list_sub_heading_1">Home</Link>
                        <i class='fas fa-greater-than text-white px-2'></i>
                        <a href="#" className="filter_list_sub_heading_2 ">Student List</a></p>
                </div>
            </div>


    
                <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-3 seach_card  pb-3">
            <div className="header_title d-flex justify-content-between pt-3">
              <p className="filter_para">
                <i class="fas fa-filter"></i> Filters
              </p>
              <a href="" className="more_filter">Clear all</a>
            </div>

            <div
              class="alert alert_radius  alert-dismissible fade show d-flex"
              role="alert"
            >
              <p>Accountant  <a type="button" className="alert_close1" >X</a> </p>
              {/* <button
                type="button"
                class="close alert_close alert_close1"
                data-dismiss="alert"
                aria-label="Close"
                
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            
            <div>
      <div
        class="accordion accordion-flush accordion_bg"
        id="accordionFlushExample"
      >
        <div class="accordion-item accordion-item_bg">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button accordion-button_btn accordion_bg collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Role
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="card_body  ">
                <form className="form-group p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eg: BPO,KPO"
                  />
                  {/* first radio */}
                  <div className="check_div p-2 mt-2">
                    <div className="first_radio">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          onChange={ClickRadio1}
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Accountant
                        </label>
                      </div>

                      {/* check box */}
                      {clickRadio ? null : (
                        <div className="pl-3">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              Audit
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck2"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck2"
                            >
                              Finance
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck3"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck3"
                            >
                              Clerk
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck4"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck4"
                            >
                              Book Keeper
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* second radio */}
                    <div className="second_radio">
                      <div class="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                          onChange={ChangeRadio2}
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Animation
                        </label>
                      </div>

                      {changeRadio ? null : (
                        <div className="pl-3">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck5"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck5"
                            >
                              3D Mays
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck6"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck6"
                            >
                              3D Modeler
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck7"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck7"
                            >
                              Animator
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck8"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck8"
                            >
                              Graphic Design
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* third radio */}
                    <div className="second_radio">
                      <div class="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                          onChange={ChangeRadio3}
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Beautician
                        </label>
                      </div>

                      {changeRadio3 ? null : (
                        <div className="pl-3">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck5"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck5"
                            >
                              Beauty care
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck6"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck6"
                            >
                              Esthetician
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck7"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck7"
                            >
                              Hair
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* fourth radio */}
                    <div className="second_radio">
                      <div class="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                          onChange={ChangeRadio4}
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Architect
                        </label>
                      </div>

                      {changeRadio4 ? null : (
                        <div className="pl-3">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck5"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck5"
                            >
                              Exterior Design
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck6"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck6"
                            >
                              Interior Design
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/*second-accordion */}
        <div class="accordion-item accordion-item_bg">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button accordion-button_btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Locality
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <form className="form-group">
                <input
                  type="text"
                  placeholder="Eg: Madhapur"
                  className="form-control"
                />
              </form>
            </div>
          </div>
        </div>

        {/* third-accordion */}
        <div class="accordion-item accordion-flush accordion-item_bg">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button accordion-button_btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Experience (in years)
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="col-6 m-0 p-0 mt-2 d-flex justify-content-between">
                <form className="form-group">
                  <p className="p-0 m-0">max</p>
                  <select id="cars" name="cars">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </form>
                <form className="form-group">
                  <p className="p-0 m-0">min</p>
                  <select id="cars" name="cars">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto text-center pt-3">
        {/* <a href="" className="more_filter">
          <i class="fas fa-plus"></i> More Filters
        </a> */}

{/* <input type="button"className="more_filter" value="Open modal" onClick={openModal} /> */}
<button type="button" className="more_filter" onClick={openModal} ><i class="fas fa-plus"></i> More Filter</button>
<Modal isOpen={isOpen} onRequestClose={closeModal}    style={customStyles}>
<a className="search_close_modal" onClick={closeModal}><i className="fas fa-times"></i></a>

  <UI/>


        {/* <input type="button" value="Close modal" onClick={closeModal} /> */}
       
      </Modal>

      </div>
      <div className="text-center mt-2">
        <button className="btn btn-block apply_btn">APPLY</button>
      </div>
    </div>
          </div>

          <div className="col-md-9">
          <div className="student_box">
              <div className="details_heading">
                <span className="user_icon">
                  <i class="fas fa-user"></i>
                </span>
                <div className="d-inline-block pl-3 ">
                  <span className="cand_name">Ashok Kumar</span>
                  <span className="cand_age">23 years</span>
                  <div className="cand_address d-block">
                    <span>Accountant from Vinukonda, Guntur</span>
                  </div>
                </div>
              </div>

              <div className="down_cand_content">
                <div className="row action_data my-2">
                  <div className="col-md-6  my-1 action_sms">
                    <button>SMS</button>
                    <button>Email</button>
                    <button>View Contact</button>
                  </div>
                  <div className="col-md-6 cand_verify  my-1 pt-1 ">
                    <span className="cand_resume">
                      <img src="images/resumedownload.svg" alt="" />
                      <span className="pl-2">Download Resume</span>
                    </span>

                    <span className="cand_mobile">
                      <i class="fas fa-mobile-alt ml-4"></i>
                      <span className="pl-2">Mobile</span>
                    </span>
                  </div>
                </div>

                <div className="more_details my-2">
                  <span className="cand_edu">
                    <i class="fas fa-graduation-cap"></i> B.Tech
                  </span>
                  <span className="cand_exp">
                    <i class="fas fa-briefcase"></i> 2 Yrs
                  </span>
                  <span className="cand_salary">
                    <i class="fas fa-rupee-sign"></i>25000 / month
                  </span>
                </div>

                <div className="cand_shift">
                  <span>
                    Interested in Full Time Jobs with Morning Shift, Evening
                    Shift, Any Shift
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="main_data">
                      <div className="inner">
                        <div className="left_content">
                          Hello English Score Minimum :
                        </div>
                        <div className="right_content">
                          <span>50</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Industry : </div>
                        <div className="right_content">
                          <span> Banking & Financial Services, Retail</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Skills :</div>
                        <div className="right_content">
                          <span>
                            GST, TALLY, Cash Flow Statement, Balance Sheet, MS
                            Excel
                          </span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Degree : </div>
                        <div className="right_content">
                          <span>Other</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Address Proof : </div>
                        <div className="right_content">
                          <span>PAN Card, Aadhaar Card, Driving License</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Company :</div>
                        <div className="right_content">
                          <span>Sai Rama Association</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Desired Cities : </div>
                        <div className="right_content">
                          <span>Hyderabad</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="main_data">
                      <div className="inner">
                        <div className="left_content">
                           Designation : 
                        </div>
                        <div className="right_content">
                          <span>Accountant</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Type : </div>
                        <div className="right_content">
                          <span>Clerk/Book Keeper</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Languages known : </div>
                        <div className="right_content">
                          <span>Hindi, Telugu, English</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content"> Certifications : </div>
                        <div className="right_content">
                          <span>others</span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Photo ID Proof : </div>
                        <div className="right_content">
                          <span>
                            Passport, Aadhaar Card, Voter ID Card, Driving
                            License{" "}
                          </span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">Passport : </div>
                        <div className="right_content">
                          <span>Yes </span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content">
                          Do you have marg accounting certification? : 
                        </div>
                        <div className="right_content">
                          <span>Yes </span>
                        </div>
                      </div>

                      <div className="inner">
                        <div className="left_content"> Hello English score : </div>
                        <div className="right_content">
                          <span> 50-70 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-inline-block mb-2">
                  <div className="last_time d-inline-block pr-5">
                    <span>Last activity 3 hrs ago</span>
                  </div>

                  <div className="d-inline-block last_time pr-5">
                    <span>
                      <i class="fas fa-list pr-2"></i>Shortlisted by 2
                      Recruiters recently{" "}
                    </span>
                  </div>
                  <div className="d-inline-block last_time">
                    <span>
                      {" "}
                      <i class="fas fa-comment-dots pr-2"></i>Contacted by 0
                      Recruiters recently
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
        
</>
        
    )
}

export default Searchcandidates
