import React, { useState } from 'react'


const UI = () => {


    const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

    const radioHandler = (status) => {
        setStatus(status);
    };


    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className="col-lg-3" style={{marginTop:"-90px"}}>
                        <div className="sticky-top sticky_candidates">
                            <p>
                                <button
                                    className="sidebar_button"
                                    data-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="ezy()"
                                >
                                    <i className="fa fa-bars text-white"></i>
                                </button>
                            </p>
                            <div id="collapseExample">

                                <div className="sidebar searchcandidate_sidebar" >
                                    <h4 style={{ padding: "10px" }}>Advance Filter</h4>
                                    <a href="#searchoption"> Search Option</a>
                                    <a href="#Role"> Role</a>
                                    <a href="#Locality"> Locality</a>
                                    <a href="#Experience">Experience</a>
                                    <a href="#Education"> Education</a>
                                    {/* <a href="#ITskills"> IT Skills</a> */}
                                    <a href="#Salary"> Salary</a>
                                    <a href="#WorkShift">WorkShift</a>
                                    <a href="#Gender"> Gender</a>
                                    <a href="#Age"> Age</a>
                                    <a href="#Job Type"> Job Type</a>
                                    <a href="#Profile Freshness">Profile Freshness</a>

                                    <a href="#ShowandHide">Show & Hide</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-9' style={{marginTop:"-75px"}}>
                        <div className='wrapper'>
                            <div id='searchoption'>
                                <div id="Role">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                SEARCH OPTION
                                            </h5>

                                        </div>


                                        <div className="">
                                            <div className='row search_content1_subnames'>
                                                <div className='col-md-6' >
                                                    <input type="radio" id="Profiles" name="Profiles" value="Profiles" />
                                                    <label className='search_label_size' for="Profiles">Profile without Resume</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="radio" id="Profiles" name="Profiles" value="Resume" />
                                                    <label className='search_label_size' for="Profiles">Profile with Resume</label><br />
                                                    {/* <span style={{ color: "green" }}>Now search in candidate's resume to get
                                                        more results</span> */}
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                </div>



                                <div id="Locality">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                Role
                                            </h5>

                                        </div>


                                        <div className=" search_content1_subnames">
                                            <input type="text" placeholder="Eg: Delivery , Bpo , Driver" className='form-control' />
                                            <div className='row Roll_Scroll  '>



                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Accountant" name="Accountant" value="Accountant" checked={status === 1}
                                                            onClick={(e) => radioHandler(1)} />
                                                        <label className='search_label_size' for="Accountant">Accountant</label><br />


                                                        {status === 1 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Accountant1" name="Accountant1" value="Audit" />
                                                                <label className='search_label_size' for="Accountant1"> Audit</label><br />

                                                                <input type="checkbox" id="Accountant2" name="Accountant2" value=" Clerk/Book Keeper" />
                                                                <label className='search_label_size' for="Accountant2"> Clerk/Book Keeper</label><br />

                                                                <input type="checkbox" id="Accountant3" name="Accountant3" value=" Finance" />
                                                                <label className='search_label_size' for="Accountant3">Finance</label><br />

                                                            </div>) : null}

                                                    </div>
                                                </div>



                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Animation" name="Animation" value="Animation" checked={status === 2}
                                                            onClick={(e) => radioHandler(2)} />
                                                        <label className='search_label_size' for="Animation">Animation</label><br />


                                                        {status === 2 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Animation1" name="Animation1" value="Audit" />
                                                                <label className='search_label_size' for="Animation1"> 3D Maya</label><br />

                                                                <input type="checkbox" id="Animation2" name="Animation2" value=" Clerk/Book Keeper" />
                                                                <label className='search_label_size' for="Animation2">3D Modeler</label><br />

                                                                <input type="checkbox" id="Animation3" name="Animation3" value="Animator" />
                                                                <label className='search_label_size' for="Animation3">Animator</label><br />

                                                            </div>) : null}

                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Architect" name="Architect" value="Architect" checked={status === 3}
                                                            onClick={(e) => radioHandler(3)} />
                                                        <label className='search_label_size' for="Architect">Architect</label><br />


                                                        {status === 3 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Architect1" name="Architect1" value="3D Maya" />
                                                                <label className='search_label_size' for="Architect1"> 3D Maya</label><br />

                                                                <input type="checkbox" id="Architect2" name="Architect2" value="3D Modeler" />
                                                                <label className='search_label_size' for="Architect2">3D Modeler</label><br />



                                                            </div>) : null}

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Bartender" name="Bartender" value="Bartender" checked={status === 4}
                                                            onClick={(e) => radioHandler(4)} />
                                                        <label className='search_label_size' for="Bartender">Bartender</label><br />


                                                        {status === 4 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Bartender1" name="Bartender1" value="Airlines/Airport" />
                                                                <label className='search_label_size' for="Bartender1">Airlines/Airport</label><br />

                                                                <input type="checkbox" id="Bartender2" name="Bartender2" value=" Bars/Pubs" />
                                                                <label className='search_label_size' for="Bartender2">Bars/Pubs</label><br />

                                                                <input type="checkbox" id="Bartender3" name="Bartender3" value="Casino" />
                                                                <label className='search_label_size' for="Bartender3">Casino</label><br />

                                                                <input type="checkbox" id="Bartender4" name="Bartender4" value="Clubs" />
                                                                <label className='search_label_size' for="Bartender4">Clubs</label><br />



                                                            </div>) : null}

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Beautician" name="Beautician" value="Beautician" checked={status === 5}
                                                            onClick={(e) => radioHandler(5)} />
                                                        <label className='search_label_size' for="Beautician">Beautician</label><br />


                                                        {status === 5 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Beautician1" name="Beautician1" value="Beauty care" />
                                                                <label className='search_label_size' for="Beautician1">Beauty care</label><br />

                                                                <input type="checkbox" id="Beautician2" name="Beautician2" value=" Esthetician" />
                                                                <label className='search_label_size' for="Beautician2">Esthetician</label><br />

                                                                <input type="checkbox" id="Beautician3" name="Beautician3" value=" Hair" />
                                                                <label className='search_label_size' for="Beautician3">Hair</label><br />

                                                                <input type="checkbox" id="Beautician4" name="Beautician4" value=" Make-Up" />
                                                                <label className='search_label_size' for="Beautician4">Make-Up</label><br />

                                                                <input type="checkbox" id="Beautician5" name="Beautician5" value="Skin care" />
                                                                <label className='search_label_size' for="Beautician5">Skin care</label><br />



                                                            </div>) : null}

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="BPO/Telecaller" name="BPO/Telecaller" value="BPO/Telecaller" checked={status === 6}
                                                            onClick={(e) => radioHandler(6)} />
                                                        <label className='search_label_size' for="BPO/Telecaller">BPO/Telecaller</label><br />


                                                        {status === 6 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="BPO/Telecaller1" name="BPO/Telecaller1" value="AR Telecaller/mediacl billing" />
                                                                <label className='search_label_size' for="BPO/Telecaller1">AR Telecaller/mediacl billing</label><br />

                                                                <input type="checkbox" id="BPO/Telecaller2" name="BPO/Telecaller2" value=" Domestic" />
                                                                <label className='search_label_size' for="BPO/Telecaller2">Domestic</label><br />



                                                            </div>) : null}

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="radio" id="Bussiness Analyst" name="Bussiness Analyst" value="Bussiness Analyst" checked={status === 7}
                                                            onClick={(e) => radioHandler(7)} />
                                                        <label className='search_label_size' for="Bussiness Analyst">Bussiness Analyst</label><br />


                                                        {status === 7 ?
                                                            (<div className='search_sub_names'>
                                                                <input type="checkbox" id="Bussiness Analyst1" name="Bussiness Analyst1" value="Anova" />
                                                                <label className='search_label_size' for="Bussiness Analyst1"> Anova</label><br />

                                                                <input type="checkbox" id="Bussiness Analyst2" name="Bussiness Analyst2" value=" Bussiness Analysis" />
                                                                <label className='search_label_size' for="Bussiness Analyst2">Bussiness Analysis</label><br />

                                                                <input type="checkbox" id="Bussiness Analyst3" name="Bussiness Analyst3" value=" Data Analysis" />
                                                                <label className='search_label_size' for="Bussiness Analyst3">Data Analysis</label><br />



                                                            </div>) : null}

                                                    </div>
                                                </div>




                                            </div>





                                        </div>




                                    </div>

                                </div>



                                {/* LOCALITY */}

                                <div id="Experience">
                                    <div className="search_content1" >
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                Locality
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <div className='row'>
                                                <input type='text' placeholder="Eg : MG Road" className="form-control" />
                                            </div>

                                        </div>

                                    </div>
                                </div>


                                {/* EXPERIENCE */}

                                <div id="Education">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                Experience
                                            </h5>

                                        </div>
                                    </div>


                                    <div className="search_content1_subnames">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className='search_label_size' for="minexperience">Min</label>
                                                    <select className="form_control" name="minexperience" id="minexperience">
                                                        <option hidden>select</option>
                                                        <option value="Fresher">Fresher</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>


                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className='search_label_size' for="maxexperience">Max</label>
                                                    <select className="form_control" name="maxexperience" id="maxexperience">
                                                        <option hidden>select</option>
                                                        <option value="Fresher">Fresher</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>


                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                {/* Education */}
                                <div id="Salary">

                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                Education
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">

                                            <div className='row Roll_Scroll'>



                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="checkbox" id="beloweight" name="beloweight" value="beloweight"
                                                        />
                                                        <label className='search_label_size' for="beloweight">Below 8th</label><br />



                                                    </div>
                                                </div>



                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="checkbox" id="twelvepass" name="twelvepass" value="twelvepass"
                                                        />
                                                        <label className='search_label_size' for="twelvepass">12th pass</label><br />



                                                    </div>
                                                </div>



                                                <div className='col-md-6'>
                                                    <div>


                                                        <input type="checkbox" id="reveal-diploma" role="button" />
                                                        <label for="reveal-diploma" className='search_label_size'> Diploma</label>

                                                        <div id="diploma">
                                                            <div className="search_sub_names">
                                                                <input
                                                                    type="checkbox"
                                                                    id="Architecture"
                                                                    name="Architecture"
                                                                    value="Architecture"
                                                                />
                                                                <label className="search_label_size" for="Architecture">
                                                                    Architecture
                                                                </label>
                                                                <br />

                                                                <input type="checkbox" id="Civil" name="Civil" value="Civil" />
                                                                <label className="search_label_size" for="Civil">
                                                                    Civil
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Chemical"
                                                                    name="Chemical"
                                                                    value="Chemical"
                                                                />
                                                                <label className="search_label_size" for="Chemical">
                                                                    Chemical
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Computers"
                                                                    name="Computers"
                                                                    value="Computers"
                                                                />
                                                                <label className="search_label_size" for="Computers">
                                                                    Computers
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Electrical"
                                                                    name="Electrical"
                                                                    value="Electrical"
                                                                />
                                                                <label className="search_label_size" for="Electrical">
                                                                    Electrical
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Electronics/Telecommunication"
                                                                    name="Electronics/Telecommunication"
                                                                    value="Electronics/Telecommunication"
                                                                />
                                                                <label
                                                                    className="search_label_size"
                                                                    for="Electronics/Telecommunication"
                                                                >
                                                                    Electronics/Telecommunication
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Engineering"
                                                                    name="Engineering"
                                                                    value="Engineering"
                                                                />
                                                                <label className="search_label_size" for="Engineering">
                                                                    Engineering
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Export/Import"
                                                                    name="Export/Import"
                                                                    value="Export/Import"
                                                                />
                                                                <label className="search_label_size" for="Export/Import">
                                                                    Export/Import
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Fashion Designing/Other designing"
                                                                    name="Fashion Designing/Other designing"
                                                                    value="Fashion Designing/Other designing"
                                                                />
                                                                <label
                                                                    className="search_label_size"
                                                                    for="Fashion Designing/Other designing"
                                                                >
                                                                    Fashion Designing/Other designing
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Graphic/Web Designing"
                                                                    name="Graphic/Web Designing"
                                                                    value="Graphic/Web Designing"
                                                                />
                                                                <label className="search_label_size" for="Graphic/Web Designing">
                                                                    Graphic/Web Designing
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Hotel Management"
                                                                    name="Hotel Management"
                                                                    value="Hotel Management"
                                                                />
                                                                <label className="search_label_size" for="Hotel Management">
                                                                    Hotel Management
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Insurance"
                                                                    name="Insurance"
                                                                    value="Insurance"
                                                                />
                                                                <label className="search_label_size" for="Insurance">
                                                                    Insurance
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Management"
                                                                    name="Management"
                                                                    value="Management"
                                                                />
                                                                <label className="search_label_size" for="Management">
                                                                    Management
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Mechanical"
                                                                    name="Mechanical"
                                                                    value="Mechanical"
                                                                />
                                                                <label className="search_label_size" for="Mechanical">
                                                                    Mechanical
                                                                </label>
                                                                <br />

                                                                <input type="checkbox" id="Tourism" name="Tourism" value="Tourism" />
                                                                <label className="search_label_size" for="Tourism">
                                                                    Tourism
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Visual Arts"
                                                                    name="Visual Arts"
                                                                    value="Visual Arts"
                                                                />
                                                                <label className="search_label_size" for="Visual Arts">
                                                                    Visual Arts
                                                                </label>
                                                                <br />

                                                                <input
                                                                    type="checkbox"
                                                                    id="Vocational Course"
                                                                    name="Vocational Course"
                                                                    value="Vocational Course"
                                                                />
                                                                <label className="search_label_size" for="Vocational Course">
                                                                    Vocational Course
                                                                </label>
                                                                <br />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="checkbox" id="reveal-graduate" role="button" />
                                                        <label for="reveal-graduate" className='search_label_size'> Graduate</label>



                                                        <div id="graduate">
                                                            <div className='search_sub_names'>
                                                                <input type="checkbox" id="Other" name="Other" value="Other" />
                                                                <label className='search_label_size' for="Other">Other</label><br />

                                                                <input type="checkbox" id="BA" name="BA" value="BA" />
                                                                <label className='search_label_size' for="BA">BA</label><br />

                                                                <input type="checkbox" id="B.Arch" name="B.Arch" value="B.Arch" />
                                                                <label className='search_label_size' for="B.Arch">B.Arch</label><br />

                                                                <input type="checkbox" id="BCA" name="BCA" value="BCA" />
                                                                <label className='search_label_size' for="BCA">BCA</label><br />

                                                                <input type="checkbox" id="BBA" name="BBA" value="BBA" />
                                                                <label className='search_label_size' for="BBA">BBA</label><br />

                                                                <input type="checkbox" id="B.Com" name="B.Com" value="B.Com" />
                                                                <label className='search_label_size' for="B.Com">B.Com</label><br />

                                                                <input type="checkbox" id="BEd" name="BEd" value="BEd" />
                                                                <label className='search_label_size' for="BEd">BEd</label><br />

                                                                <input type="checkbox" id="BDS" name="BDS" value="BDS" />
                                                                <label className='search_label_size' for="BDS">BDS</label><br />

                                                                <input type="checkbox" id="BHM" name="BHM" value="BHM" />
                                                                <label className='search_label_size' for="BHM">BHM</label><br />

                                                                <input type="checkbox" id="B.Pharma" name="B.Pharma" value="B.Pharma" />
                                                                <label className='search_label_size' for="B.Pharma">B.Pharma</label><br />

                                                                <input type="checkbox" id="BSc" name="BSc" value="BSc" />
                                                                <label className='search_label_size' for="BSc">BSc</label><br />

                                                                <input type="checkbox" id="Btech/BE" name="Btech/BE" value="Btech/BE" />
                                                                <label className='search_label_size' for="Btech/BE">Btech/BE</label><br />

                                                                <input type="checkbox" id="LLB" name="LLB" value="LLB" />
                                                                <label className='search_label_size' for="LLB">LLB</label><br />

                                                                <input type="checkbox" id="MBBS" name="MBBS" value="MBBS" />
                                                                <label className='search_label_size' for="MBBS">MBBS</label><br />

                                                                <input type="checkbox" id="BVSC" name="BVSC" value="BVSC" />
                                                                <label className='search_label_size' for="BVSC">BVSC</label><br />

                                                                <input type="checkbox" id="B.PT(physiotherapy)" name="B.PT(physiotherapy)" value="B.PT(physiotherapy)" />
                                                                <label className='search_label_size' for="B.PT(physiotherapy)">B.PT(physiotherapy)</label><br />

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>


                                                        <input type="checkbox" id="tenthpass" name="tenthpass" value="tenthpass"
                                                        />
                                                        <label className='search_label_size' for="tenthpass">10th pass</label><br />


                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div>


                                                        <input type="checkbox" id="eighthpass" name="eighthpass" value="eighthpass"
                                                        />
                                                        <label className='search_label_size' for="eighthpass">8th pass</label><br />


                                                    </div>
                                                </div>


                                                <div className='col-md-6'>
                                                    <div>

                                                        <input type="checkbox" id="reveal-pg" role="button" />
                                                        <label for="reveal-pg" className='search_label_size'> Post Graduate</label>


                                                        <div id="pg">
                                                            <div className='search_sub_names'>
                                                                <input type="checkbox" id="CA" name="CA" value="CA" />
                                                                <label className='search_label_size' for="CA">CA</label><br />

                                                                <input type="checkbox" id="CS" name="CS" value="CS" />
                                                                <label className='search_label_size' for="CS">CS</label><br />

                                                                <input type="checkbox" id="ICWA" name="ICWA" value="ICWA" />
                                                                <label className='search_label_size' for="ICWA">ICWA</label><br />

                                                                <input type="checkbox" id="Integrated PG" name="Integrated PG" value="Integrated PG" />
                                                                <label className='search_label_size' for="Integrated PG">Integrated PG</label><br />

                                                                <input type="checkbox" id="LLM" name="LLM" value="LLM" />
                                                                <label className='search_label_size' for="LLM">LLM</label><br />

                                                                <input type="checkbox" id="MA" name="MA" value="MA" />
                                                                <label className='search_label_size' for="MA">MA</label><br />

                                                                <input type="checkbox" id="M Arch" name="M Arch" value="M Arch" />
                                                                <label className='search_label_size' for="M Arch">M Arch</label><br />

                                                                <input type="checkbox" id="M.com" name="M.com" value="M.com" />
                                                                <label className='search_label_size' for="M.com">M.com</label><br />

                                                                <input type="checkbox" id="M.Ed" name="M.Ed" value="M.Ed" />
                                                                <label className='search_label_size' for="M.Ed">M.Ed</label><br />

                                                                <input type="checkbox" id="M.Pharma" name="M.Pharma" value="M.Pharma" />
                                                                <label className='search_label_size' for="M.Pharma">M.Pharma</label><br />

                                                                <input type="checkbox" id="MSc" name="MSc" value="MSc" />
                                                                <label className='search_label_size' for="MSc">MSc</label><br />

                                                                <input type="checkbox" id="M.Tech" name="M.Tech" value="M.Tech" />
                                                                <label className='search_label_size' for="M.Tech">M.Tech</label><br />

                                                                <input type="checkbox" id="MBA/PGDM" name="MBA/PGDM" value="MBA/PGDM" />
                                                                <label className='search_label_size' for="MBA/PGDM">MBA/PGDM</label><br />

                                                                <input type="checkbox" id="MCA" name="MCA" value="MCA" />
                                                                <label className='search_label_size' for="MCA">MCA</label><br />

                                                                <input type="checkbox" id="MS" name="MS" value="MS" />
                                                                <label className='search_label_size' for="MS">MS</label><br />

                                                                <input type="checkbox" id="PG Diploma" name="PG Diploma" value="PG Diploma" />
                                                                <label className='search_label_size' for="PG Diploma">PG Diploma</label><br />

                                                                <input type="checkbox" id="MVSC" name="MVSC" value="MVSC" />
                                                                <label className='search_label_size' for="MVSC">MVSC</label><br />

                                                                <input type="checkbox" id="MCM" name="MCM" value="MCM" />
                                                                <label className='search_label_size' for="MCM">MCM</label><br />

                                                                <input type="checkbox" id="Other" name="Other" value="Other" />
                                                                <label className='search_label_size' for="Other">Other</label><br />

                                                                <input type="checkbox" id="M.PT(Physiotherapy)" name="M.PT(Physiotherapy)" value="M.PT(Physiotherapy)" />
                                                                <label className='search_label_size' for="M.PT(Physiotherapy)">M.PT(Physiotherapy)</label><br />

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>







                                            </div>





                                        </div>




                                    </div>
                                </div>

                                {/* Salary */}

                                <div id="WorkShift">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                Salary
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="form-group">
                                                        <label className='search_label_size'>Min</label>

                                                        <input type="text" placeholder="Min" className='form-control' />

                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group">
                                                        <label className='search_label_size' for="maxexperience">Max</label>
                                                        <input type="text" placeholder="Max" className='form-control' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Work Shifts */}

                                <div id="Gender">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                WORK SHIFTS
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Morning shift" name="Morning shift" value="Morning shift" />
                                                    <label className='search_label_size' for="Morning shift">Morning shift</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Evening Shift" name="Evening Shift" value="Evening Shift" />
                                                    <label className='search_label_size' for="Evening Shift"> Evening Shift</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Night Shift" name="Night Shift" value="Night Shift" />
                                                    <label className='search_label_size' for="Night Shift">Night Shift</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Any Shift" name="Any Shift" value="Any Shift" />
                                                    <label className='search_label_size' for="Any Shift"> Any Shift</label><br />
                                                </div>



                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Gender */}

                                <div id="Age">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                GENDER
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <input type="radio" id="Male" name="Male" value="Male" />
                                                    <label className='search_label_size' for="Male">Male</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="radio" id="feaale" name="female" value="female" />
                                                    <label className='search_label_size' for="female">Female</label><br />
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>



                                {/* AGE */}
                                <div id="Job Type">
                                    <div>
                                        <div className="search_content1">
                                            <div className="search_content1_sub">
                                                <h5 className=" pull-left text-capitalize cp">
                                                    AGE
                                                </h5>

                                            </div>


                                            <div className="search_content1_subnames">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label className='search_label_size' for="minage">Min</label>
                                                            <select className="form_control" name="minage" id="minage">
                                                                <option hidden>select</option>
                                                                <option value="18">18</option>
                                                                <option value="19">19</option>
                                                                <option value="20">20</option>
                                                                <option value="21">21</option>
                                                                <option value="22">22</option>
                                                                <option value="23">23</option>
                                                                <option value="24">24</option>
                                                                <option value="25">25</option>
                                                                <option value="26">26</option>
                                                                <option value="27">27</option>
                                                                <option value="28">28</option>
                                                                <option value="29">29</option>
                                                                <option value="30">30</option>
                                                                <option value="31">31</option>
                                                                <option value="32">32</option>
                                                                <option value="33">33</option>
                                                                <option value="34">34</option>
                                                                <option value="35">35</option>
                                                                <option value="36">36</option>
                                                                <option value="37">37</option>
                                                                <option value="38">38</option>
                                                                <option value="39">39</option>
                                                                <option value="40">40</option>
                                                                <option value="41">41</option>
                                                                <option value="42">42</option>
                                                                <option value="43">43</option>
                                                                <option value="44">44</option>
                                                                <option value="45">45</option>
                                                                <option value="46">46</option>
                                                                <option value="47">47</option>
                                                                <option value="48">48</option>
                                                                <option value="49">49</option>
                                                                <option value="50">50</option>


                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label className='search_label_size' for="maxage">Max</label>
                                                            <select className="form_control" name="maxage" id="maxage">
                                                                <option hidden>select</option>
                                                                <option value="18">18</option>
                                                                <option value="19">19</option>
                                                                <option value="20">20</option>
                                                                <option value="21">21</option>
                                                                <option value="22">22</option>
                                                                <option value="23">23</option>
                                                                <option value="24">24</option>
                                                                <option value="25">25</option>
                                                                <option value="26">26</option>
                                                                <option value="27">27</option>
                                                                <option value="28">28</option>
                                                                <option value="29">29</option>
                                                                <option value="30">30</option>
                                                                <option value="31">31</option>
                                                                <option value="32">32</option>
                                                                <option value="33">33</option>
                                                                <option value="34">34</option>
                                                                <option value="35">35</option>
                                                                <option value="36">36</option>
                                                                <option value="37">37</option>
                                                                <option value="38">38</option>
                                                                <option value="39">39</option>
                                                                <option value="40">40</option>
                                                                <option value="41">41</option>
                                                                <option value="42">42</option>
                                                                <option value="43">43</option>
                                                                <option value="44">44</option>
                                                                <option value="45">45</option>
                                                                <option value="46">46</option>
                                                                <option value="47">47</option>
                                                                <option value="48">48</option>
                                                                <option value="49">49</option>
                                                                <option value="50">50</option>


                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* JOB TYPE */}
                                <div id="Profile Freshness">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                JOB TYPE
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="work from home" name="work from home" value="work from home" />
                                                    <label className='search_label_size' for="work from home"> work from home</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Part Time Jobs" name="Part Time Jobs" value="Part Time Jobs" />
                                                    <label className='search_label_size' for="Part Time Jobs"> Part Time Jobs</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Full Time Jobs" name="Full Time Jobs" value="Full Time Jobs" />
                                                    <label className='search_label_size' for="Full Time Jobs">Full Time Jobs</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Internships" name="Internships" value="Internships" />
                                                    <label className='search_label_size' for="Internships"> Internships</label><br />
                                                </div>

                                                <div className='col-md-6'>
                                                    <input type="checkbox" id="Work Abroad" name="Work Abroad" value="Work Abroad" />
                                                    <label className='search_label_size' for="Work Abroad">Work Abroad</label><br />
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>


                                {/* Profile Freshness */}

                                <div id="ShowandHide">
                                    <div className="search_content1">
                                        <div className="search_content1_sub">
                                            <h5 className=" pull-left text-capitalize cp">
                                                PROFILE FRESHNESS
                                            </h5>

                                        </div>


                                        <div className="search_content1_subnames">
                                            <label className='search_label_size'>Between</label>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div>
                                                        <label className='search_label_size' for="from">From:</label>
                                                        <input type="date" id="from" name="fromdate" />
                                                    </div>

                                                    <div>
                                                        <input type="radio" id="from" name="profilefromdate" value="Last 24 hrs" />
                                                        <label className='search_label_size' for="from">Last 24 hrs</label><br />
                                                        <input type="radio" id="from" name="profilefromdate" value="Last 7 days" />
                                                        <label className='search_label_size' for="from">Last 7 days</label><br />
                                                        <input type="radio" id="from" name="profilefromdate" value="Last 1 month" />
                                                        <label className='search_label_size' for="from">Last 1 month</label><br />
                                                        <input type="radio" id="from" name="profilefromdate" value="Last 3 months" />
                                                        <label className='search_label_size' for="from">Last 3 months</label><br />
                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div>
                                                        <label className='search_label_size' for="to">To:</label>
                                                        <input type="date" id="to" name="todate" />
                                                    </div>

                                                    <div>
                                                        <input type="radio" id="to" name="profiletodate" value="Last 3 days" />
                                                        <label className='search_label_size' for="to">Last 3 days</label><br />
                                                        <input type="radio" id="to" name="profiletodate" value="Last 14 days" />
                                                        <label className='search_label_size' for="to">Last 14 days</label><br />
                                                        <input type="radio" id="to" name="profiletodate" value="Last 2 months" />
                                                        <label className='search_label_size' for="to">Last 2 months</label><br />
                                                        <input type="radio" id="to" name="profiletodate" value="Last 6 months" />
                                                        <label className='search_label_size' for="to">Last 6 months</label><br />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                </div>



                                {/* Show */}

                                <div className="search_content1">
                                    <div className="search_content1_sub">
                                        <h5 className=" pull-left text-capitalize cp">
                                            SHOW
                                        </h5>

                                    </div>


                                    <div className="search_content1_subnames">
                                        <label className='search_label_size'> Show</label><br />
                                        <div className='row'>

                                            <div className='col-md-6'>
                                                <input type="checkbox" id="With mobile verified only" name="With mobile verified only" value="With mobile verified only" />
                                                <label className='search_label_size' for="With mobile verified only"> With mobile verified only</label><br />
                                            </div>

                                            <div className='col-md-6'>
                                                <input type="checkbox" id="With Email verified only" name="With Email verified only" value="With Email verified only" />
                                                <label className='search_label_size' for="With Email verified only">With Email verified only</label><br />
                                            </div>

                                            <div className='col-md-6'>
                                                <input type="checkbox" id="With resume only" name="With resume only" value="With resume only" />
                                                <label className='search_label_size' for="With resume only">With resume only</label><br />
                                            </div>

                                        </div>

                                    </div>

                                </div>



                            </div>

                          
                         
                            

                        </div>

                    </div>
                </div>
            </div>
           

                            
        </div>
    )
}

export default UI
