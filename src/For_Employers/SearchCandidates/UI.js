import React, { useState } from 'react'


const UI = () => {


    const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.

    const radioHandler = (status) => {
        setStatus(status);
    };


    return (
        <div>


            <div className='row'>
                <div className="col-md-4" style={{ marginTop: "-19px"}}>
                    <div className="sticky-top sticky_candidates">
                        <div>
                            <button
                                className="sidebar_button search_sidebar"
                                data-toggle="collapse"
                                href="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                onclick="ezy()"
                            >
                                Sidebar Menu <i className="fa fa-bars text-white"></i>
                            </button>
                        </div>
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

                <div className='col-md-8 search_cand_right_filter' style={{ marginTop: "-75px" }}>
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



                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Accountant" name="Accountant" value="Accountant" checked={status === 1}
                                                        onClick={(e) => radioHandler(1)} />
                                                    <label className='search_label_size' for="Accountant">Accountant</label><br />


                                                    {status === 1 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Audit" name="Audit" value="Audit" />
                                                            <label className='search_label_size' for="Audit"> Audit</label><br />

                                                            <input type="checkbox" id="Clerk/Book Keeper" name="Clerk/Book Keeper" value=" Clerk/Book Keeper" />
                                                            <label className='search_label_size' for="Clerk/Book Keeper"> Clerk/Book Keeper</label><br />

                                                            <input type="checkbox" id="Finance" name="Finance" value=" Finance" />
                                                            <label className='search_label_size' for="Finance">Finance</label><br />

                                                            <input type="checkbox" id="Taxation" name="Taxation" value=" Taxation" />
                                                            <label className='search_label_size' for="Taxation">Taxation</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>

                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Animation" name="Animation" value="Animation" checked={status === 2}
                                                        onClick={(e) => radioHandler(2)} />
                                                    <label className='search_label_size' for="Animation">Animation</label><br />


                                                    {status === 2 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="3DMaya" name="3DMaya" value="3DMaya" />
                                                            <label className='search_label_size' for="3DMaya">3D Maya</label><br />

                                                            <input type="checkbox" id="3DModeler" name="3DModeler" value="3DModeler" />
                                                            <label className='search_label_size' for="3DModeler">3D Modeler</label><br />

                                                            <input type="checkbox" id="Animator" name="Animator" value="Animator" />
                                                            <label className='search_label_size' for="Animator">Animator</label><br />

                                                            <input type="checkbox" id="ArtDirector" name="ArtDirector" value="ArtDirector" />
                                                            <label className='search_label_size' for="ArtDirector">Art Director</label><br />

                                                            <input type="checkbox" id="Cartoonist" name="Cartoonist" value="Cartoonist" />
                                                            <label className='search_label_size' for="Cartoonist">Cartoonist</label><br />

                                                            <input type="checkbox" id="DigitalPainter" name="DigitalPainter" value="DigitalPainter" />
                                                            <label className='search_label_size' for="DigitalPainter">Digital Painter</label><br />

                                                            <input type="checkbox" id="EffectsAnimator" name="EffectsAnimator" value="EffectsAnimator" />
                                                            <label className='search_label_size' for="EffectsAnimator">Effects Animator</label><br />

                                                            <input type="checkbox" id="FlashAnimator" name="FlashAnimator" value="FlashAnimator" />
                                                            <label className='search_label_size' for="FlashAnimator">Flash Animator</label><br />

                                                            <input type="checkbox" id="ForensicAnimator" name="ForensicAnimator" value="ForensicAnimator" />
                                                            <label className='search_label_size' for="ForensicAnimator">Forensic Animator</label><br />

                                                            <input type="checkbox" id="GraphicDesigner" name="GraphicDesigner" value="GraphicDesigner" />
                                                            <label className='search_label_size' for="GraphicDesigner">Graphic Designer</label><br />

                                                            <input type="checkbox" id="LightingTechnician" name="LightingTechnician" value="LightingTechnician" />
                                                            <label className='search_label_size' for="LightingTechnician">Lighting Technician</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="STOPMOTIONANIMATOR" name="STOPMOTIONANIMATOR" value="STOPMOTIONANIMATOR" />
                                                            <label className='search_label_size' for="STOPMOTIONANIMATOR">STOP MOTION ANIMATOR</label><br />

                                                            <input type="checkbox" id="VideoEditor" name="VideoEditor" value="VideoEditor" />
                                                            <label className='search_label_size' for="VideoEditor">Video Editor</label><br />

                                                            <input type="checkbox" id="VideoGameDesigner" name="VideoGameDesigner" value="VideoGameDesigner" />
                                                            <label className='search_label_size' for="VideoGameDesigner">Video Game Designer</label><br />

                                                            <input type="checkbox" id="VisualDevelopementArtist" name="VisualDevelopementArtist" value="VisualDevelopementArtist" />
                                                            <label className='search_label_size' for="VisualDevelopementArtist">Visual Developement Artist</label><br />

                                                            <input type="checkbox" id="Zbrush" name="Zbrush" value="Zbrush" />
                                                            <label className='search_label_size' for="Zbrush">Zbrush</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Architect" name="Architect" value="Architect" checked={status === 3}
                                                        onClick={(e) => radioHandler(3)} />
                                                    <label className='search_label_size' for="Architect">Architect</label><br />


                                                    {status === 3 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="ExteriorDesign" name="ExteriorDesign" value="ExteriorDesign" />
                                                            <label className='search_label_size' for="ExteriorDesign">Exterior Design</label><br />

                                                            <input type="checkbox" id="InteriorDesign" name="InteriorDesign" value="InteriorDesign" />
                                                            <label className='search_label_size' for="InteriorDesign">InteriorDesign</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Bartender" name="Bartender" value="Bartender" checked={status === 4}
                                                        onClick={(e) => radioHandler(4)} />
                                                    <label className='search_label_size' for="Bartender">Bartender</label><br />


                                                    {status === 4 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Airlines/Airport" name="Airlines/Airport" value="Airlines/Airport" />
                                                            <label className='search_label_size' for="Airlines/Airport">Airlines/Airport</label><br />

                                                            <input type="checkbox" id="Bars/Pubs" name="Bars/Pubs" value="Bars/Pubs" />
                                                            <label className='search_label_size' for="Bars/Pubs">Bars/Pubs</label><br />

                                                            <input type="checkbox" id="Casino" name="Casino" value="Casino" />
                                                            <label className='search_label_size' for="Casino">Casino</label><br />

                                                            <input type="checkbox" id="Clubs" name="Clubs" value="Clubs" />
                                                            <label className='search_label_size' for="Clubs">Clubs</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PubsandBreweries" name="PubsandBreweries" value="PubsandBreweries" />
                                                            <label className='search_label_size' for="PubsandBreweries">Pubs and Breweries</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Beautician" name="Beautician" value="Beautician" checked={status === 5}
                                                        onClick={(e) => radioHandler(5)} />
                                                    <label className='search_label_size' for="Beautician">Beautician</label><br />


                                                    {status === 5 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="BeautyCare" name="BeautyCare" value="BeautyCare" />
                                                            <label className='search_label_size' for="BeautyCare">Beauty Care</label><br />

                                                            <input type="checkbox" id="Esthetician" name="Esthetician" value="Esthetician" />
                                                            <label className='search_label_size' for="Esthetician">Esthetician</label><br />

                                                            <input type="checkbox" id="Hair" name="Hair" value="Hair" />
                                                            <label className='search_label_size' for="Hair">Hair</label><br />

                                                            <input type="checkbox" id="Make-up" name="Make-up" value="Make-up" />
                                                            <label className='search_label_size' for="Make-up">Make-up</label><br />

                                                            <input type="checkbox" id="Manicure" name="Manicure" value="Manicure" />
                                                            <label className='search_label_size' for="Manicure">Manicure</label><br />

                                                            <input type="checkbox" id="Massage" name="Massage" value="Massage" />
                                                            <label className='search_label_size' for="Massage">Massage</label><br />

                                                            <input type="checkbox" id="MensSalon" name="MensSalon" value="MensSalon" />
                                                            <label className='search_label_size' for="MensSalon">Mens Salon</label><br />

                                                            <input type="checkbox" id="Nailcare" name="Nailcare" value="Nailcare" />
                                                            <label className='search_label_size' for="Nailcare">Nailcare</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Pedicure" name="Pedicure" value="Pedicure" />
                                                            <label className='search_label_size' for="Pedicure">Pedicure</label><br />

                                                            <input type="checkbox" id="PetGrooming" name="PetGrooming" value="PetGrooming" />
                                                            <label className='search_label_size' for="PetGrooming">Pet Grooming</label><br />

                                                            <input type="checkbox" id="Shampoo" name="Shampoo" value="Shampoo" />
                                                            <label className='search_label_size' for="Shampoo">Shampoo</label><br />

                                                            <input type="checkbox" id="SkinCare" name="SkinCare" value="SkinCare" />
                                                            <label className='search_label_size' for="SkinCare">Skin Care</label><br />

                                                            <input type="checkbox" id="Slimming" name="Slimming" value="Slimming" />
                                                            <label className='search_label_size' for="Slimming">Slimming</label><br />

                                                            <input type="checkbox" id="UnisexSalon" name="UnisexSalon" value="UnisexSalon" />
                                                            <label className='search_label_size' for="UnisexSalon">Unisex Salon</label><br />

                                                            <input type="checkbox" id="Woman'sSalon" name="Woman'sSalon" value="Woman'sSalon" />
                                                            <label className='search_label_size' for="Woman'sSalon">Woman's Salon</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6 text=center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Bouncer" name="Bouncer" value="Bouncer" checked={status === 6}
                                                        onClick={(e) => radioHandler(6)} />
                                                    <label className='search_label_size' for="Bouncer">Bouncer</label><br />


                                                    {status === 6 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Bars/Pubs" name="Bars/Pubs" value="Bars/Pubs" />
                                                            <label className='search_label_size' for="Bars/Pubs">Bars/Pubs</label><br />

                                                            <input type="checkbox" id="Casino" name="Casino" value="Casino" />
                                                            <label className='search_label_size' for="Casino">Casino</label><br />

                                                            <input type="checkbox" id="Concerts/Events" name="Concerts/Events" value="Concerts/Events" />
                                                            <label className='search_label_size' for="Concerts/Events">Concerts/Events</label><br />

                                                            <input type="checkbox" id="Nightclubs" name="Nightclubs" value="Nightclubs" />
                                                            <label className='search_label_size' for="Nightclubs">Nightclubs</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Ranches" name="Ranches" value="Ranches" />
                                                            <label className='search_label_size' for="Ranches">Ranches</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6 text-center'>
                                                <div className='text-left'>

                                                    <input type="radio" id="BPO/Telecaller" name="BPO/Telecaller" value="BPO/Telecaller" checked={status === 7}
                                                        onClick={(e) => radioHandler(7)} />
                                                    <label className='search_label_size' for="BPO/Telecaller">BPO/Telecaller</label><br />


                                                    {status === 7 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="ARTelecaller/MedicalBilling" name="ARTelecaller/MedicalBilling" value="ARTelecaller/MedicalBilling" />
                                                            <label className='search_label_size' for="ARTelecaller/MedicalBilling">AR Telecaller/Medical Billing</label><br />

                                                            <input type="checkbox" id="Domestic" name="Domestic" value="Domestic" />
                                                            <label className='search_label_size' for="Domestic">Domestic</label><br />

                                                            <input type="checkbox" id="Incoming" name="Incoming" value="Incoming" />
                                                            <label className='search_label_size' for="Incoming">Incoming</label><br />

                                                            <input type="checkbox" id="International" name="International" value="International" />
                                                            <label className='search_label_size' for="International">International</label><br />

                                                            <input type="checkbox" id="NonVoice" name="NonVoice" value="NonVoice" />
                                                            <label className='search_label_size' for="NonVoice">Non Voice</label><br />

                                                            <input type="checkbox" id="Non-Technical" name="Non-Technical" value="Non-Technical" />
                                                            <label className='search_label_size' for="Non-Technical">Non-Technical</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Outgoing" name="Outgoing" value="Outgoing" />
                                                            <label className='search_label_size' for="Outgoing">Outgoing</label><br />

                                                            <input type="checkbox" id="QualityAnalyst" name="QualityAnalyst" value="QualityAnalyst" />
                                                            <label className='search_label_size' for="QualityAnalyst">Quality Analyst</label><br />

                                                            <input type="checkbox" id="RecoveryCollection" name="RecoveryCollection" value="RecoveryCollection" />
                                                            <label className='search_label_size' for="RecoveryCollection">Recovery Collection</label><br />

                                                            <input type="checkbox" id="Sales" name="Sales" value="Sales" />
                                                            <label className='search_label_size' for="Sales">Sales</label><br />

                                                            <input type="checkbox" id="Support" name="Support" value="Support" />
                                                            <label className='search_label_size' for="Support">Support</label><br />

                                                            <input type="checkbox" id="Technical" name="Technical" value="Technical" />
                                                            <label className='search_label_size' for="Technical">Technical</label><br />

                                                            <input type="checkbox" id="Voice" name="Voice" value="Voice" />
                                                            <label className='search_label_size' for="Voice">Voice</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6 '>
                                                <div className='text-left'>

                                                    <input type="radio" id="BusinessAnalyst" name="BusinessAnalyst" value="BusinessAnalyst" checked={status === 8}
                                                        onClick={(e) => radioHandler(8)} />
                                                    <label className='search_label_size' for="BusinessAnalyst">Business Analyst</label><br />


                                                    {status === 8 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Anova" name="Anova" value="Anova" />
                                                            <label className='search_label_size' for="Anova">Anova</label><br />

                                                            <input type="checkbox" id="BusinessAnalysis" name="BusinessAnalysis" value="BusinessAnalysis" />
                                                            <label className='search_label_size' for="BusinessAnalysis">Business Analysis</label><br />

                                                            <input type="checkbox" id="DataAnalysis" name="DataAnalysis" value="DataAnalysis" />
                                                            <label className='search_label_size' for="DataAnalysis">Data Analysis</label><br />

                                                            <input type="checkbox" id="Excel" name="Excel" value="Excel" />
                                                            <label className='search_label_size' for="Excel">Excel</label><br />

                                                            <input type="checkbox" id="OBIEEAnalytics" name="OBIEEAnalytics" value="OBIEEAnalytics" />
                                                            <label className='search_label_size' for="OBIEEAnalytics">OBIEE Analytics</label><br />

                                                            <input type="checkbox" id="SAS" name="SAS" value="SAS" />
                                                            <label className='search_label_size' for="SAS">SAS</label><br />

                                                            <input type="checkbox" id="SPSS" name="SPSS" value="SPSS" />
                                                            <label className='search_label_size' for="SPSS">SPSS</label><br />

                                                            <input type="checkbox" id="SQL" name="SQL" value="SQL" />
                                                            <label className='search_label_size' for="SQL">SQL</label><br />

                                                            <input type="checkbox" id="StatisticalSimulation" name="StatisticalSimulation" value="StatisticalSimulation" />
                                                            <label className='search_label_size' for="StatisticalSimulation">Statistical Simulation</label><br />

                                                            <input type="checkbox" id="Statistics" name="Statistics" value="Statistics" />
                                                            <label className='search_label_size' for="Statistics">Statistics</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Cameraman" name="Cameraman" value="Cameraman" checked={status === 9}
                                                        onClick={(e) => radioHandler(9)} />
                                                    <label className='search_label_size' for="Cameraman">Cameraman</label><br />


                                                    {status === 9 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Events" name="Events" value="Events" />
                                                            <label className='search_label_size' for="Events">Events</label><br />

                                                            <input type="checkbox" id="News" name="News" value="News" />
                                                            <label className='search_label_size' for="News">News</label><br />

                                                            <input type="checkbox" id="Travel" name="Travel" value="Travel" />
                                                            <label className='search_label_size' for="Travel">Travel</label><br />

                                                            <input type="checkbox" id="Wildlife&Nature" name="Wildlife&Nature" value="Wildlife&Nature" />
                                                            <label className='search_label_size' for="Wildlife&Nature">Wildlife & Nature</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Caretaker/Nanny" name="Caretaker/Nanny" value="Caretaker/Nanny" checked={status === 10}
                                                        onClick={(e) => radioHandler(10)} />
                                                    <label className='search_label_size' for="Caretaker/Nanny">Caretaker/Nanny</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Carpenter" name="Carpenter" value="Carpenter" checked={status === 11}
                                                        onClick={(e) => radioHandler(11)} />
                                                    <label className='search_label_size' for="Carpenter">Carpenter</label><br />


                                                    {status === 11 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Commercial" name="Commercial" value="Commercial" />
                                                            <label className='search_label_size' for="Commercial">Commercial</label><br />

                                                            <input type="checkbox" id="Furniture" name="Furniture" value="Furniture" />
                                                            <label className='search_label_size' for="Furniture">Furniture</label><br />

                                                            <input type="checkbox" id="Industrial" name="Industrial" value="Industrial" />
                                                            <label className='search_label_size' for="Industrial">Industrial</label><br />

                                                            <input type="checkbox" id="Maintainance" name="Maintainance" value="Maintainance" />
                                                            <label className='search_label_size' for="Maintainance">Maintainance</label><br />

                                                            <input type="checkbox" id="Other" name="Other" value="Other" />
                                                            <label className='search_label_size' for="Other">Other</label><br />

                                                            <input type="checkbox" id="Residential" name="Residential" value="Residential" />
                                                            <label className='search_label_size' for="Residential">Residential</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Cashier" name="Cashier" value="Cashier" checked={status === 12}
                                                        onClick={(e) => radioHandler(12)} />
                                                    <label className='search_label_size' for="Cashier">Cashier</label><br />


                                                    {status === 12 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Banking&Finance" name="Banking&Finance" value="Banking&Finance" />
                                                            <label className='search_label_size' for="Banking&Finance">Banking & Finance</label><br />

                                                            <input type="checkbox" id="Construction" name="Construction" value="Construction" />
                                                            <label className='search_label_size' for="Construction">Construction</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="Retail" name="Retail" value="Retail" />
                                                            <label className='search_label_size' for="Retail">Retail</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Cleaner/Washer" name="Cleaner/Washer" value="Cleaner/Washer" checked={status === 13}
                                                        onClick={(e) => radioHandler(13)} />
                                                    <label className='search_label_size' for="Cleaner/Washer">Cleaner/Washer</label><br />


                                                    {status === 13 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Airport" name="Airport" value="Airport" />
                                                            <label className='search_label_size' for="Airport">Airport</label><br />

                                                            <input type="checkbox" id="Autodetailing/AutoUpholstery" name="Autodetailing/AutoUpholstery" value="Autodetailing/AutoUpholstery" />
                                                            <label className='search_label_size' for="Autodetailing/AutoUpholstery">Auto detailing/ Auto Upholstery</label><br />

                                                            <input type="checkbox" id="Automobiles" name="Automobiles" value="Automobiles" />
                                                            <label className='search_label_size' for="Automobiles">Automobiles</label><br />

                                                            <input type="checkbox" id="Chemical" name="Chemical" value="Chemical" />
                                                            <label className='search_label_size' for="Chemical">Chemical</label><br />

                                                            <input type="checkbox" id="Corporate" name="Corporate" value="Corporate" />
                                                            <label className='search_label_size' for="Corporate">Corporate</label><br />

                                                            <input type="checkbox" id="EducationalInstitutions" name="EducationalInstitutions" value="EducationalInstitutions" />
                                                            <label className='search_label_size' for="EducationalInstitutions">Educational Institutions</label><br />

                                                            <input type="checkbox" id="Hospitals" name="Hospitals" value="Hospitals" />
                                                            <label className='search_label_size' for="Hospitals">Hospitals</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurants" name="Hotel&Restaurants" value="Hotel&Restaurants" />
                                                            <label className='search_label_size' for="Hotel&Restaurants">Hotel & Restaurants</label><br />

                                                            <input type="checkbox" id="Industrial" name="Industrial" value="Industrial" />
                                                            <label className='search_label_size' for="Industrial">Industrial</label><br />

                                                            <input type="checkbox" id="Lab" name="Lab" value="Lab" />
                                                            <label className='search_label_size' for="Lab">Lab</label><br />

                                                            <input type="checkbox" id="Machine" name="Machine" value="Machine" />
                                                            <label className='search_label_size' for="Machine">Machine</label><br />

                                                            <input type="checkbox" id="PublicPlaces" name="PublicPlaces" value="PublicPlaces" />
                                                            <label className='search_label_size' for="PublicPlaces">Public Places</label><br />

                                                            <input type="checkbox" id="RailwayStation" name="RailwayStation" value="RailwayStation" />
                                                            <label className='search_label_size' for="RailwayStation">Railway Station</label><br />

                                                            <input type="checkbox" id="Residential" name="Residential" value="Residential" />
                                                            <label className='search_label_size' for="Residential">Residential</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Construction/Laborer" name="Construction/Laborer" value="Construction/Laborer" checked={status === 14}
                                                        onClick={(e) => radioHandler(14)} />
                                                    <label className='search_label_size' for="Construction/Laborer">Construction/Laborer</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ContentWriter" name="ContentWriter" value="ContentWriter" checked={status === 15}
                                                        onClick={(e) => radioHandler(15)} />
                                                    <label className='search_label_size' for="ContentWriter">Content Writer</label><br />


                                                    {status === 15 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Banking&FinancialServices" name="Banking&FinancialServices" value="Banking&FinancialServices" />
                                                            <label className='search_label_size' for="Banking&FinancialServices">Banking & Financial Services</label><br />

                                                            <input type="checkbox" id="Entertainment" name="Entertainment" value="Entertainment" />
                                                            <label className='search_label_size' for="Entertainment">Entertainment</label><br />

                                                            <input type="checkbox" id="Fashion" name="Fashion" value="Fashion" />
                                                            <label className='search_label_size' for="Fashion">Fashion</label><br />

                                                            <input type="checkbox" id="Medical" name="Medical" value="Medical" />
                                                            <label className='search_label_size' for="Medical">Medical</label><br />

                                                            <input type="checkbox" id="News" name="News" value="News" />
                                                            <label className='search_label_size' for="News">News</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Review" name="Review" value="Review" />
                                                            <label className='search_label_size' for="Review">Review</label><br />

                                                            <input type="checkbox" id="Social" name="Social" value="Social" />
                                                            <label className='search_label_size' for="Social">Social</label><br />

                                                            <input type="checkbox" id="Technology" name="Technology" value="Technology" />
                                                            <label className='search_label_size' for="Technology">Technology</label><br />

                                                            <input type="checkbox" id="Travel" name="Travel" value="Travel" />
                                                            <label className='search_label_size' for="Travel">Travel</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ControlRoomOperator" name="ControlRoomOperator" value="ControlRoomOperator" checked={status === 16}
                                                        onClick={(e) => radioHandler(16)} />
                                                    <label className='search_label_size' for="ControlRoomOperator">Control Room Operator</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Cook/Chef" name="Cook/Chef" value="Cook/Chef" checked={status === 17}
                                                        onClick={(e) => radioHandler(17)} />
                                                    <label className='search_label_size' for="Cook/Chef">Cook/Chef</label><br />


                                                    {status === 17 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="BakingandConfectionary" name="BakingandConfectionary" value="BakingandConfectionary" />
                                                            <label className='search_label_size' for="BakingandConfectionary">Baking and Confectionary</label><br />

                                                            <input type="checkbox" id="Butcher" name="Butcher" value="Butcher" />
                                                            <label className='search_label_size' for="Butcher">Butcher</label><br />

                                                            <input type="checkbox" id="Chinese" name="Chinese" value="Chinese" />
                                                            <label className='search_label_size' for="Chinese">Chinese</label><br />

                                                            <input type="checkbox" id="Commis" name="Commis" value="Commis" />
                                                            <label className='search_label_size' for="Commis">Commis</label><br />

                                                            <input type="checkbox" id="Continental" name="Continental" value="Continental" />
                                                            <label className='search_label_size' for="Continental">Continental</label><br />

                                                            <input type="checkbox" id="French" name="French" value="French" />
                                                            <label className='search_label_size' for="French">French</label><br />

                                                            <input type="checkbox" id="IndianCuisine" name="IndianCuisine" value="IndianCuisine" />
                                                            <label className='search_label_size' for="IndianCuisine">Indian Cuisine</label><br />

                                                            <input type="checkbox" id="Italian" name="Italian" value="Italian" />
                                                            <label className='search_label_size' for="Italian">Italian</label><br />

                                                            <input type="checkbox" id="Mexican" name="Mexican" value="Mexican" />
                                                            <label className='search_label_size' for="Mexican">Mexican</label><br />

                                                            <input type="checkbox" id="Mughlai" name="Mughlai" value="Mughlai" />
                                                            <label className='search_label_size' for="Mughlai">Mughlai</label><br />

                                                            <input type="checkbox" id="MultiCuisine" name="MultiCuisine" value="MultiCuisine" />
                                                            <label className='search_label_size' for="MultiCuisine">Multi Cuisine</label><br />

                                                            <input type="checkbox" id="NonVeg" name="NonVeg" value="NonVeg" />
                                                            <label className='search_label_size' for="NonVeg">Non Veg</label><br />

                                                            <input type="checkbox" id="NorthIndian" name="NorthIndian" value="NorthIndian" />
                                                            <label className='search_label_size' for="NorthIndian">North Indian</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="SouthIndian" name="SouthIndian" value="SouthIndian" />
                                                            <label className='search_label_size' for="SouthIndian">South Indian</label><br />

                                                            <input type="checkbox" id="Thai" name="Thai" value="Thai" />
                                                            <label className='search_label_size' for="Thai">Thai</label><br />

                                                            <input type="checkbox" id="Veg" name="Veg" value="Veg" />
                                                            <label className='search_label_size' for="Veg">Veg</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Counsellor" name="Counsellor" value="Counsellor" checked={status === 18}
                                                        onClick={(e) => radioHandler(18)} />
                                                    <label className='search_label_size' for="Counsellor">Counsellor</label><br />


                                                    {status === 18 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="BankingandFinance" name="BankingandFinance" value="BankingandFinance" />
                                                            <label className='search_label_size' for="BankingandFinance">Banking and Finance</label><br />

                                                            <input type="checkbox" id="Carrer" name="Carrer" value="Carrer" />
                                                            <label className='search_label_size' for="Carrer">Carrer</label><br />

                                                            <input type="checkbox" id="Education" name="Education" value="Education" />
                                                            <label className='search_label_size' for="Education">Education</label><br />

                                                            <input type="checkbox" id="Legal" name="Legal" value="Legal" />
                                                            <label className='search_label_size' for="Legal">Legal</label><br />

                                                            <input type="checkbox" id="Marriage" name="Marriage" value="Marriage" />
                                                            <label className='search_label_size' for="Marriage">Marriage</label><br />

                                                            <input type="checkbox" id="MentalHealth" name="MentalHealth" value="MentalHealth" />
                                                            <label className='search_label_size' for="MentalHealth">Mental Health</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Rehabilitation" name="Rehabilitation" value="Rehabilitation" />
                                                            <label className='search_label_size' for="Rehabilitation">Rehabilitation</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DataSurveyCollection/" name="DataSurveyCollection" value="DataSurveyCollection" checked={status === 19}
                                                        onClick={(e) => radioHandler(19)} />
                                                    <label className='search_label_size' for="DataSurveyCollection/">Data SurveyCollection/</label><br />


                                                    {status === 19 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Field" name="Field" value="Field" />
                                                            <label className='search_label_size' for="Field">Field</label><br />

                                                            <input type="checkbox" id="Internet/Online" name="Internet/Online" value="Internet/Online" />
                                                            <label className='search_label_size' for="Internet/Online">Internet/Online</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DataEntry/BackOffice" name="DataEntry/BackOffice" value="DataEntry/BackOffice" checked={status === 20}
                                                        onClick={(e) => radioHandler(20)} />
                                                    <label className='search_label_size' for="DataEntry/Back Office">Data Entry / Back Office</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DataScientist" name="DataScientist" value="DataScientist" checked={status === 21}
                                                        onClick={(e) => radioHandler(21)} />
                                                    <label className='search_label_size' for="DataScientist">Data Scientist</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Database/System/LinuxAdministrator" name="Database/System/LinuxAdministrator" value="Database/System/LinuxAdministrator" checked={status === 22}
                                                        onClick={(e) => radioHandler(22)} />
                                                    <label className='search_label_size' for="Database/System/LinuxAdministrator">Database/System/Linux Administrator</label><br />


                                                    {status === 22 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Networking" name="Networking" value="Networking" />
                                                            <label className='search_label_size' for="Networking">Networking</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PatchManagement" name="PatchManagement" value="PatchManagement" />
                                                            <label className='search_label_size' for="PatchManagement(WSUS)">Patch Management(WSUS)</label><br />

                                                            <input type="checkbox" id="Perl" name="Perl" value="Perl" />
                                                            <label className='search_label_size' for="Perl">Perl</label><br />

                                                            <input type="checkbox" id="Python" name="Python" value="Python" />
                                                            <label className='search_label_size' for="Python">Python</label><br />

                                                            <input type="checkbox" id="Ruby" name="Ruby" value="Ruby" />
                                                            <label className='search_label_size' for="Ruby">Ruby</label><br />

                                                            <input type="checkbox" id="SQL" name="SQL" value="SQL" />
                                                            <label className='search_label_size' for="SQL">SQL</label><br />

                                                            <input type="checkbox" id="Scripting-Powershell" name="Scripting-Powershell" value="Scripting-Powershell" />
                                                            <label className='search_label_size' for="Scripting-Powershell">Scripting-Powershell</label><br />

                                                            <input type="checkbox" id="Troubleshooting" name="Troubleshooting" value="Troubleshooting" />
                                                            <label className='search_label_size' for="Troubleshooting">Troubleshooting</label><br />

                                                            <input type="checkbox" id="Windows/LinuxAdmin" name="Windows/LinuxAdmin" value="Windows/LinuxAdmin" />
                                                            <label className='search_label_size' for="Windows/LinuxAdmin">Windows/Linux Admin</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Delivery/Collections" name="Delivery/Collections" value="Delivery/Collections" checked={status === 23}
                                                        onClick={(e) => radioHandler(23)} />
                                                    <label className='search_label_size' for="Delivery/Collections">Delivery/Collections</label><br />


                                                    {status === 23 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="CashCollection" name="CashCollection" value="CashCollection" />
                                                            <label className='search_label_size' for="CashCollection">Cash Collection</label><br />

                                                            <input type="checkbox" id="CourierDelivery" name="CourierDelivery" value="CourierDelivery" />
                                                            <label className='search_label_size' for="CourierDelivery">Courier Delivery</label><br />

                                                            <input type="checkbox" id="Courier/PacketCollection" name="Courier/PacketCollection" value="Courier/PacketCollection" />
                                                            <label className='search_label_size' for="Courier/PacketCollection">Courier/Packet Collection</label><br />

                                                            <input type="checkbox" id="DocumentsCollection" name="DocumentsCollection" value="DocumentsCollection" />
                                                            <label className='search_label_size' for="DocumentsCollection">Documents Collection</label><br />

                                                            <input type="checkbox" id="FoodDelivery" name="FoodDelivery" value="FoodDelivery" />
                                                            <label className='search_label_size' for="FoodDelivery">Food Delivery</label><br />

                                                            <input type="checkbox" id="GroceryDelivery" name="GroceryDelivery" value="GroceryDelivery" />
                                                            <label className='search_label_size' for="GroceryDelivery">Grocery Delivery</label><br />

                                                            <input type="checkbox" id="OtherDelivery/Collection" name="OtherDelivery/Collection" value="OtherDelivery/Collection" />
                                                            <label className='search_label_size' for="OtherDelivery/Collection">Other Delivery/Collection</label><br />

                                                            <input type="checkbox" id="RecoveryCollection" name="RecoveryCollection" value="RecoveryCollection" />
                                                            <label className='search_label_size' for="RecoveryCollection">Recovery Collection</label><br />

                                                            <input type="checkbox" id="VanDelivery" name="VanDelivery" value="VanDelivery" />
                                                            <label className='search_label_size' for="VanDelivery">Van Delivery</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Designer" name="Designer" value="Designer" checked={status === 24}
                                                        onClick={(e) => radioHandler(24)} />
                                                    <label className='search_label_size' for="Designer">Designer</label><br />


                                                    {status === 24 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Animation" name="Animation" value="Animation" />
                                                            <label className='search_label_size' for="Animation">Animation</label><br />

                                                            <input type="checkbox" id="DesignCAD" name="DesignCAD" value="DesignCAD" />
                                                            <label className='search_label_size' for="DesignCAD">Design CAD</label><br />

                                                            <input type="checkbox" id="Designer" name="Designer" value="Designer" />
                                                            <label className='search_label_size' for="Designer">Designer</label><br />

                                                            <input type="checkbox" id="FashionDesign" name="FashionDesign" value="FashionDesign" />
                                                            <label className='search_label_size' for="FashionDesign">Fashion Design</label><br />

                                                            <input type="checkbox" id="Furniture/HomeSupplies" name="Furniture/HomeSupplies" value="Furniture/HomeSupplies" />
                                                            <label className='search_label_size' for="Furniture/HomeSupplies">Furniture / Home Supplies</label><br />

                                                            <input type="checkbox" id="GraphicDesign" name="GraphicDesign" value="GraphicDesign" />
                                                            <label className='search_label_size' for="GraphicDesign">Graphic Design</label><br />

                                                            <input type="checkbox" id="JewelryDesign" name="JewelryDesign" value="JewelryDesign" />
                                                            <label className='search_label_size' for="JewelryDesign">Jewelry Design</label><br />

                                                            <input type="checkbox" id="Multimedia" name="Multimedia" value="Multimedia" />
                                                            <label className='search_label_size' for="Multimedia">Multimedia</label><br />

                                                            <input type="checkbox" id="Packaging" name="Packaging" value="Packaging" />
                                                            <label className='search_label_size' for="Packaging">Packaging</label><br />

                                                            <input type="checkbox" id="PatternDivision" name="PatternDivision" value="PatternDivision" />
                                                            <label className='search_label_size' for="PatternDivision">Pattern Division</label><br />

                                                            <input type="checkbox" id="Product" name="Product" value="Product" />
                                                            <label className='search_label_size' for="Product">Product</label><br />

                                                            <input type="checkbox" id="TextileDesigner" name="TextileDesigner" value="TextileDesigner" />
                                                            <label className='search_label_size' for="TextileDesigner">Textile Designer</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Doctor" name="Doctor" value="Doctor" checked={status === 25}
                                                        onClick={(e) => radioHandler(25)} />
                                                    <label className='search_label_size' for="Doctor">Doctor</label><br />


                                                    {status === 25 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AgedCare" name="AgedCare" value="AgedCare" />
                                                            <label className='search_label_size' for="AgedCare">Aged Care</label><br />

                                                            <input type="checkbox" id="Anaesthetist" name="Anaesthetist" value="Anaesthetist" />
                                                            <label className='search_label_size' for="Anaesthetist">Anaesthetist</label><br />

                                                            <input type="checkbox" id="Ayurvedic" name="Ayurvedic" value="Ayurvedic" />
                                                            <label className='search_label_size' for="Ayurvedic">Ayurvedic</label><br />

                                                            <input type="checkbox" id="Cardiologist" name="Cardiologist" value="Cardiologist" />
                                                            <label className='search_label_size' for="Cardiologist">Cardiologist</label><br />

                                                            <input type="checkbox" id="Dermatologist" name="Dermatologist" value="Dermatologist" />
                                                            <label className='search_label_size' for="Dermatologist">Dermatologist</label><br />

                                                            <input type="checkbox" id="GeneralPhysician" name="GeneralPhysician" value="GeneralPhysician" />
                                                            <label className='search_label_size' for="GeneralPhysician">General Physician</label><br />

                                                            <input type="checkbox" id="Gynaecologists" name="Gynaecologists" value="Gynaecologists" />
                                                            <label className='search_label_size' for="Gynaecologists">Gynaecologists</label><br />

                                                            <input type="checkbox" id="HairTransplantSurgeon" name="HairTransplantSurgeon" value="HairTransplantSurgeon" />
                                                            <label className='search_label_size' for="HairTransplantSurgeon">Hair Transplant Surgeon</label><br />

                                                            <input type="checkbox" id="Homeopathic" name="Homeopathic" value="Homeopathic" />
                                                            <label className='search_label_size' for="Homeopathic">Homeopathic</label><br />

                                                            <input type="checkbox" id="Neurologists" name="Neurologists" value="Neurologists" />
                                                            <label className='search_label_size' for="Neurologists">Neurologists</label><br />

                                                            <input type="checkbox" id="Nutritionist" name="Nutritionist" value="Nutritionist" />
                                                            <label className='search_label_size' for="Nutritionist">Nutritionist</label><br />

                                                            <input type="checkbox" id="Oncologist" name="Oncologist" value="Oncologist" />
                                                            <label className='search_label_size' for="Oncologist">Oncologist</label><br />

                                                            <input type="checkbox" id="Opthalmologist" name="Opthalmologist" value="Opthalmologist" />
                                                            <label className='search_label_size' for="Opthalmologist">Opthalmologist</label><br />

                                                            <input type="checkbox" id="Orthodontist" name="Orthodontist" value="Orthodontist" />
                                                            <label className='search_label_size' for="Orthodontist">Orthodontist</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Pathalogy" name="Pathalogy" value="Pathalogy" />
                                                            <label className='search_label_size' for="Pathalogy">Pathalogy</label><br />

                                                            <input type="checkbox" id="Pediatrics" name="Pediatrics" value="Pediatrics" />
                                                            <label className='search_label_size' for="Pediatrics">Pediatrics</label><br />

                                                            <input type="checkbox" id="PetCrae/Veterinary" name="PetCrae/Veterinary" value="PetCrae/Veterinary" />
                                                            <label className='search_label_size' for="PetCrae/Veterinary">Pet Crae/Veterinary</label><br />

                                                            <input type="checkbox" id="Physiotherapy" name="Physiotherapy" value="Physiotherapy" />
                                                            <label className='search_label_size' for="Physiotherapy">Physiotherapy</label><br />

                                                            <input type="checkbox" id="PlasticSurgeon" name="PlasticSurgeon" value="PlasticSurgeon" />
                                                            <label className='search_label_size' for="PlasticSurgeon">Plastic Surgeon</label><br />

                                                            <input type="checkbox" id="Psychiateists" name="Psychiateists" value="Psychiateists" />
                                                            <label className='search_label_size' for="Psychiateists">Psychiateists</label><br />

                                                            <input type="checkbox" id="Radiologist" name="Radiologist" value="Radiologist" />
                                                            <label className='search_label_size' for="Radiologist">Radiologist</label><br />

                                                            <input type="checkbox" id="UnaniMedicine" name="UnaniMedicine" value="UnaniMedicine" />
                                                            <label className='search_label_size' for="UnaniMedicine">Unani Medicine</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Draftsman" name="Draftsman" value="Draftsman" checked={status === 26}
                                                        onClick={(e) => radioHandler(26)} />
                                                    <label className='search_label_size' for="Draftsman">Draftsman</label><br />


                                                    {status === 26 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Architectural" name="Architectural" value="Architectural" />
                                                            <label className='search_label_size' for="Architectural">Architectural</label><br />

                                                            <input type="checkbox" id="Automobile" name="Automobile" value="Automobile" />
                                                            <label className='search_label_size' for="Automobile">Automobile</label><br />

                                                            <input type="checkbox" id="Civil" name="Civil" value="Civil" />
                                                            <label className='search_label_size' for="Civil">Civil</label><br />

                                                            <input type="checkbox" id="Design" name="Design" value="Design" />
                                                            <label className='search_label_size' for="Design">Design</label><br />

                                                            <input type="checkbox" id="Electrical" name="Electrical" value="Electrical" />
                                                            <label className='search_label_size' for="Electrical">Electrical</label><br />

                                                            <input type="checkbox" id="Fabrication" name="Fabrication" value="Fabrication" />
                                                            <label className='search_label_size' for="Fabrication">Fabrication</label><br />

                                                            <input type="checkbox" id="FireandGas" name="FireandGas" value="FireandGas" />
                                                            <label className='search_label_size' for="FireandGas">Fire and Gas</label><br />

                                                            <input type="checkbox" id="Mechanical" name="Mechanical" value="Mechanical" />
                                                            <label className='search_label_size' for="Mechanical">Mechanical</label><br />

                                                            <input type="checkbox" id="Structural" name="Structural" value="Structural" />
                                                            <label className='search_label_size' for="Structural">Structural</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Driver" name="Driver" value="Driver" checked={status === 27}
                                                        onClick={(e) => radioHandler(27)} />
                                                    <label className='search_label_size' for="Counsellor">Driver</label><br />


                                                    {status === 27 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AmbulanceDriver" name="AmbulanceDriver" value="AmbulanceDriver" />
                                                            <label className='search_label_size' for="AmbulanceDriver">Ambulance Driver</label><br />

                                                            <input type="checkbox" id="AutoDrive" name="AutoDrive" value="AutoDrive" />
                                                            <label className='search_label_size' for="AutoDrive">Auto Driver</label><br />

                                                            <input type="checkbox" id="CommercialTransportDriver" name="CommercialTransportDriver" value="CommercialTransportDriver" />
                                                            <label className='search_label_size' for="CommercialTransportDriver">Commercial Transport Driver</label><br />

                                                            <input type="checkbox" id="ComapanyDriver" name="ComapanyDriver" value="ComapanyDriver" />
                                                            <label className='search_label_size' for="ComapanyDriver">Comapany Driver</label><br />

                                                            <input type="checkbox" id="E-RickshawDriver" name="E-RickshawDriver" value="E-RickshawDriver" />
                                                            <label className='search_label_size' for="E-RickshawDriver">E-Rickshaw Driver</label><br />

                                                            <input type="checkbox" id="FreightTransportDriver" name="FreightTransportDriver" value="FreightTransportDriver" />
                                                            <label className='search_label_size' for="FreightTransportDriver">Freight Transport Driver</label><br />

                                                            <input type="checkbox" id="HeavyVehicleDriver" name="HeavyVehicleDriver" value="HeavyVehicleDriver" />
                                                            <label className='search_label_size' for="HeavyVehicleDriver">Heavy Vehicle Driver</label><br />

                                                            <input type="checkbox" id="InterstateDriver" name="InterstateDriver" value="InterstateDriver" />
                                                            <label className='search_label_size' for="InterstateDriver">Interstate Driver</label><br />

                                                            <input type="checkbox" id="Homeopathic" name="Homeopathic" value="Homeopathic" />
                                                            <label className='search_label_size' for="Homeopathic">Homeopathic</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PrivateDriver" name="PrivateDriver" value="PrivateDriver" />
                                                            <label className='search_label_size' for="PrivateDriver">Private Driver</label><br />

                                                            <input type="checkbox" id="SchoolBusDriver" name="SchoolBusDriver" value="SchoolBusDriver" />
                                                            <label className='search_label_size' for="SchoolBusDriver">School Bus Driver</label><br />

                                                            <input type="checkbox" id="TaxiDrive" name="TaxiDrive" value="TaxiDrive" />
                                                            <label className='search_label_size' for="TaxiDrive">Taxi Driver</label><br />

                                                            <input type="checkbox" id="Taxi/Cab" name="Taxi/Cab" value="Taxi/Cab" />
                                                            <label className='search_label_size' for="Taxi/Cab">Taxi/Cab</label><br />

                                                            <input type="checkbox" id="TruckDriver" name="TruckDriver" value="TruckDriver" />
                                                            <label className='search_label_size' for="TruckDriver">Truck Driver</label><br />

                                                            <input type="checkbox" id="TwoWheelerDriver" name="TwoWheelerDriver" value="TwoWheelerDriver" />
                                                            <label className='search_label_size' for="TwoWheelerDriver">Two Wheeler Driver</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DTPOPerator/PrintConsultant" name="DTPOPerator/PrintConsultant" value="DTPOPerator/PrintConsultant" checked={status === 28}
                                                        onClick={(e) => radioHandler(28)} />
                                                    <label className='search_label_size' for="DTPOPerator/PrintConsultant">DTP OPerator/Print Consultant</label><br />


                                                    {status === 28 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="CAD" name="CAD" value="CAD" />
                                                            <label className='search_label_size' for="CAD">CAD</label><br />

                                                            <input type="checkbox" id="CorelDraw" name="CorelDraw" value="CorelDraw" />
                                                            <label className='search_label_size' for="CorelDraw">Corel Draw</label><br />

                                                            <input type="checkbox" id="MSPowerpoint" name="MSPowerpoint" value="MSPowerpoint" />
                                                            <label className='search_label_size' for="MSPowerpoint">MS Powerpoint</label><br />

                                                            <input type="checkbox" id="MSPublisher" name="MSPublisher" value="MSPublisher" />
                                                            <label className='search_label_size' for="MSPublisher">MS Publisher</label><br />

                                                            <input type="checkbox" id="Photoshop" name="Photoshop" value="Photoshop" />
                                                            <label className='search_label_size' for="Photoshop">Photoshop</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DubbingArtist" name="DubbingArtist" value="DubbingArtist" checked={status === 29}
                                                        onClick={(e) => radioHandler(29)} />
                                                    <label className='search_label_size' for="DubbingArtist">Dubbing Artist</label><br />


                                                    {status === 29 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Cartoon" name="Cartoon" value="Cartoon" />
                                                            <label className='search_label_size' for="Cartoon">Cartoon</label><br />

                                                            <input type="checkbox" id="English" name="English" value="English" />
                                                            <label className='search_label_size' for="English">English</label><br />

                                                            <input type="checkbox" id="Hindi" name="Hindi" value="Hindi" />
                                                            <label className='search_label_size' for="Hindi">Hindi</label><br />

                                                            <input type="checkbox" id="Movie" name="Movie" value="Movie" />
                                                            <label className='search_label_size' for="Movie">Movie</label><br />

                                                            <input type="checkbox" id="Tamil" name="Tamil" value="Tamil" />
                                                            <label className='search_label_size' for="Tamil">Tamil</label><br />

                                                            <input type="checkbox" id="Telugu" name="Telugu" value="Telugu" />
                                                            <label className='search_label_size' for="Telugu">Telugu</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="DyeMaker" name="DyeMaker" value="DyeMaker" checked={status === 30}
                                                        onClick={(e) => radioHandler(30)} />
                                                    <label className='search_label_size' for="DyeMaker">Dye Maker</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Editor" name="Editor" value="Editor" checked={status === 31}
                                                        onClick={(e) => radioHandler(31)} />
                                                    <label className='search_label_size' for="Editor">Editor</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Electrician" name="Electrician" value="Electrician" checked={status === 32}
                                                        onClick={(e) => radioHandler(32)} />
                                                    <label className='search_label_size' for="Electrician">Electrician</label><br />


                                                    {status === 32 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Commercial" name="Commercial" value="Commercial" />
                                                            <label className='search_label_size' for="Commercial">Commercial</label><br />

                                                            <input type="checkbox" id="HighVoltage" name="HighVoltage" value="HighVoltage" />
                                                            <label className='search_label_size' for="HighVoltage">High Voltage</label><br />

                                                            <input type="checkbox" id="Industrial" name="Industrial" value="Industrial" />
                                                            <label className='search_label_size' for="Industrial">Industrial</label><br />

                                                            <input type="checkbox" id="LowVoltage" name="LowVoltage" value="LowVoltage" />
                                                            <label className='search_label_size' for="LowVoltage">Low Voltage</label><br />

                                                            <input type="checkbox" id="Residential" name="Residential" value="Residential" />
                                                            <label className='search_label_size' for="Residential">Residential</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Electroplater" name="Electroplater" value="Electroplater" checked={status === 33}
                                                        onClick={(e) => radioHandler(33)} />
                                                    <label className='search_label_size' for="Electroplater">Electroplater</label><br />


                                                    {status === 33 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Automobile" name="Automobile" value="Automobile" />
                                                            <label className='search_label_size' for="Automobile">Automobile</label><br />

                                                            <input type="checkbox" id="Chemical" name="Chemical" value="Chemical" />
                                                            <label className='search_label_size' for="Chemical">Chemical</label><br />

                                                            <input type="checkbox" id="Maintenance" name="Maintenance" value="Maintenance" />
                                                            <label className='search_label_size' for="Maintenance">Maintenance</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Engineer" name="Engineer" value="Engineer" checked={status === 34}
                                                        onClick={(e) => radioHandler(34)} />
                                                    <label className='search_label_size' for="Engineer">Engineer</label><br />


                                                    {status === 34 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="MaintenanceEngineer" name="MaintenanceEngineer" value="MaintenanceEngineer" />
                                                            <label className='search_label_size' for="MaintenanceEngineer">Maintenance Engineer</label><br />

                                                            <input type="checkbox" id="ProductionEngineer" name="ProductionEngineer" value="ProductionEngineer" />
                                                            <label className='search_label_size' for="ProductionEngineer">Production Engineer</label><br />

                                                            <input type="checkbox" id="QualityEngineer" name="QualityEngineer" value="QualityEngineer" />
                                                            <label className='search_label_size' for="QualityEngineer">Quality Engineer</label><br />

                                                            <input type="checkbox" id="TestingEngineer" name="TestingEngineer" value="TestingEngineer" />
                                                            <label className='search_label_size' for="TestingEngineer">Testing Engineer</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="EventPlanner" name="EventPlanner" value="EventPlanner" checked={status === 35}
                                                        onClick={(e) => radioHandler(35)} />
                                                    <label className='search_label_size' for="Event Planner">Event Planner</label><br />


                                                    {status === 35 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Birthday" name="Birthday" value="Birthday" />
                                                            <label className='search_label_size' for="Birthday">Birthday</label><br />

                                                            <input type="checkbox" id="Concerts" name="Concerts" value="Concerts" />
                                                            <label className='search_label_size' for="Concerts">Concerts</label><br />

                                                            <input type="checkbox" id="CorporateEvents" name="CorporateEvents" value="CorporateEvents" />
                                                            <label className='search_label_size' for="CorporateEvents">CorporateEvents</label><br />

                                                            <input type="checkbox" id="CulturalEvents" name="CulturalEvents" value="CulturalEvents" />
                                                            <label className='search_label_size' for="CulturalEvents">Cultural Events</label><br />

                                                            <input type="checkbox" id="Exhibition&Conference" name="Exhibition&Conference" value="Exhibition&Conference" />
                                                            <label className='search_label_size' for="Exhibition&Conference">Exhibition & Conference</label><br />

                                                            <input type="checkbox" id="FamilyEvents" name="FamilyEvents" value="FamilyEvents" />
                                                            <label className='search_label_size' for="FamilyEvents">Family Events</label><br />

                                                            <input type="checkbox" id="FashionShow" name="FashionShow" value="FashionShow" />
                                                            <label className='search_label_size' for="FashionShow">Fashion Show</label><br />

                                                            <input type="checkbox" id="Film&MusicalEvents" name="Film&MusicalEvents" value="Film&MusicalEvents" />
                                                            <label className='search_label_size' for="Film&MusicalEvents">Film & Musical Events</label><br />

                                                            <input type="checkbox" id="Parties&DjNights" name="Parties&DjNights" value="Parties&DjNights" />
                                                            <label className='search_label_size' for="Parties&DjNights">Parties & Dj Nights</label><br />

                                                            <input type="checkbox" id="RoadShows" name="RoadShows" value="RoadShows" />
                                                            <label className='search_label_size' for="RoadShows">Road Shows</label><br />

                                                            <input type="checkbox" id="Sports" name="Sports" value="Sports" />
                                                            <label className='search_label_size' for="Sports">Sports</label><br />

                                                            <input type="checkbox" id="Wedding" name="Wedding" value="Wedding" />
                                                            <label className='search_label_size' for="Wedding">Wedding</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="FinancialAdvisor" name="FinancialAdvisor" value="FinancialAdvisor" checked={status === 36}
                                                        onClick={(e) => radioHandler(36)} />
                                                    <label className='search_label_size' for="FinancialAdvisor">Financial Advisor</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="FireFighter" name="FireFighter" value="FireFighter" checked={status === 37}
                                                        onClick={(e) => radioHandler(37)} />
                                                    <label className='search_label_size' for="FireFighter">Fire Fighter</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Fitter" name="Fitter" value="Fitter" checked={status === 38}
                                                        onClick={(e) => radioHandler(38)} />
                                                    <label className='search_label_size' for="Fitter">Fitter</label><br />


                                                    {status === 38 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AssembleMachines" name="AssembleMachines" value="AssembleMachines" />
                                                            <label className='search_label_size' for="AssembleMachines">Assemble Machines</label><br />

                                                            <input type="checkbox" id="ElectronicAssembler" name="ElectronicAssembler" value="ElectronicAssembler" />
                                                            <label className='search_label_size' for="ElectronicAssembler">Electronic Assembler</label><br />

                                                            <input type="checkbox" id="Maintenance" name="Maintenance" value="Maintenance" />
                                                            <label className='search_label_size' for="Maintenance">Maintenance</label><br />

                                                            <input type="checkbox" id="MechanicalAssembler" name="MechanicalAssembler" value="MechanicalAssembler" />
                                                            <label className='search_label_size' for="MechanicalAssembler">Mechanical Assembler</label><br />

                                                            <input type="checkbox" id="PlasticWorkAssembler" name="PlasticWorkAssembler" value="PlasticWorkAssembler" />
                                                            <label className='search_label_size' for="PlasticWorkAssembler">Plastic Work Assembler</label><br />

                                                            <input type="checkbox" id="ProductionAssembler" name="ProductionAssembler" value="ProductionAssembler" />
                                                            <label className='search_label_size' for="ProductionAssembler">Production Assembler</label><br />

                                                            <input type="checkbox" id="Repair" name="Repair" value="Repair" />
                                                            <label className='search_label_size' for="Repair">Repair</label><br />

                                                            <input type="checkbox" id="Welding" name="Welding" value="Welding" />
                                                            <label className='search_label_size' for="Welding">Welding</label><br />

                                                            <input type="checkbox" id="Cutting" name="Cutting" value="Cutting" />
                                                            <label className='search_label_size' for="Cutting">Cutting</label><br />

                                                            <input type="checkbox" id="InstallingMachines" name="InstallingMachines" value="InstallingMachines" />
                                                            <label className='search_label_size' for="InstallingMachines">Installing Machines</label><br />

                                                            <input type="checkbox" id="Instrument" name="Instrument" value="Instrument" />
                                                            <label className='search_label_size' for="Instrument">Instrument</label><br />

                                                            <input type="checkbox" id="Turning" name="Turning" value="Turning////////////////////////////" />
                                                            <label className='search_label_size' for="Turning">Turning</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="FloorManager" name="FloorManager" value="FloorManager" checked={status === 39}
                                                        onClick={(e) => radioHandler(39)} />
                                                    <label className='search_label_size' for="FloorManager">Floor Manager</label><br />


                                                    {status === 39 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Mall" name="Mall" value="Mall" />
                                                            <label className='search_label_size' for="Mall">Mall</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="RetailStore" name="RetailStore" value="RetailStore" />
                                                            <label className='search_label_size' for="RetailStore">Retail Store</label><br />

                                                            <input type="checkbox" id="Salon" name="Salon" value="Salon" />
                                                            <label className='search_label_size' for="Salon">Salon</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Foundryman" name="Foundryman" value="Foundryman" checked={status === 40}
                                                        onClick={(e) => radioHandler(40)} />
                                                    <label className='search_label_size' for="Foundryman">Foundryman</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Gardener" name="Gardener" value="Gardener" checked={status === 41}
                                                        onClick={(e) => radioHandler(41)} />
                                                    <label className='search_label_size' for="Gardener">Gardener</label><br />


                                                    {status === 41 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="BuildingGardens" name="BuildingGardens" value="BuildingGardens" />
                                                            <label className='search_label_size' for="BuildingGardens">Building Gardens</label><br />

                                                            <input type="checkbox" id="Commercial" name="Commercial" value="Commercial" />
                                                            <label className='search_label_size' for="Commercial">Commercial</label><br />

                                                            <input type="checkbox" id="Domestic" name="Domestic" value="Domestic" />
                                                            <label className='search_label_size' for="Domestic">Domestic</label><br />

                                                            <input type="checkbox" id="Industrial" name="Industrial" value="Industrial" />
                                                            <label className='search_label_size' for="Industrial">Industrial</label><br />

                                                            <input type="checkbox" id="Other" name="Other" value="Other" />
                                                            <label className='search_label_size' for="Other">Other</label><br />

                                                            <input type="checkbox" id="PlantNursery" name="PlantNursery" value="PlantNursery" />
                                                            <label className='search_label_size' for="PlantNursery">Plant Nursery</label><br />

                                                            <input type="checkbox" id="PrivateHomeGarden" name="PrivateHomeGarden" value="PrivateHomeGarden" />
                                                            <label className='search_label_size' for="PrivateHomeGarden">Private Home Garden</label><br />

                                                            <input type="checkbox" id="PublicParks" name="PublicParks" value="PublicParks" />
                                                            <label className='search_label_size' for="PublicParks">Public Parks</label><br />

                                                            <input type="checkbox" id="StreetPlants" name="StreetPlants" value="StreetPlants" />
                                                            <label className='search_label_size' for="StreetPlants">Street Plants</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Handyman" name="Handyman" value="Handyman" checked={status === 42}
                                                        onClick={(e) => radioHandler(42)} />
                                                    <label className='search_label_size' for="Handyman">Handyman</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="HelpDeskExecutive" name="HelpDeskExecutive" value="HelpDeskExecutive" checked={status === 43}
                                                        onClick={(e) => radioHandler(43)} />
                                                    <label className='search_label_size' for="HelpDeskExecutive">Help Desk Executive</label><br />


                                                    {status === 43 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Corporate" name="Corporate" value="Corporate" />
                                                            <label className='search_label_size' for="Corporate">Corporate</label><br />

                                                            <input type="checkbox" id="Mall" name="Mall" value="Mall" />
                                                            <label className='search_label_size' for="Mall">Mall</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="HospitalityExecutive" name="HospitalityExecutive" value="HospitalityExecutive" checked={status === 44}
                                                        onClick={(e) => radioHandler(44)} />
                                                    <label className='search_label_size' for="HospitalityExecutive">Hospitality Executive</label><br />


                                                    {status === 44 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Aviation" name="Aviation" value="Aviation" />
                                                            <label className='search_label_size' for="Aviation">Aviation</label><br />

                                                            <input type="checkbox" id="Hospital" name="Hospital" value="Hospital" />
                                                            <label className='search_label_size' for="Hospital">Hospital</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Host/Hostess" name="Host/Hostess" value="Host/Hostess" checked={status === 45}
                                                        onClick={(e) => radioHandler(45)} />
                                                    <label className='search_label_size' for="Host/Hostess">Host/Hostess</label><br />


                                                    {status === 45 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AirportGroundStaff" name="AirportGroundStaff" value="AirportGroundStaff" />
                                                            <label className='search_label_size' for="AirportGroundStaff">Airport Ground Staff</label><br />

                                                            <input type="checkbox" id="Entertainment" name="Entertainment" value="Entertainment" />
                                                            <label className='search_label_size' for="Entertainment">Entertainment</label><br />

                                                            <input type="checkbox" id="Events" name="Events" value="Events" />
                                                            <label className='search_label_size' for="Events">Events </label><br />

                                                            <input type="checkbox" id="Hospital" name="Hospital" value="Hospital" />
                                                            <label className='search_label_size' for="Hospital">Hospital</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="In-flight/CabinCrew" name="In-flight/CabinCrew" value="In-flight/CabinCrew" />
                                                            <label className='search_label_size' for="In-flight/CabinCrew">In-flight/ Cabin Crew</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="RetailStoreSalesHost" name="RetailStoreSalesHost" value="RetailStoreSalesHost" />
                                                            <label className='search_label_size' for="RetailStoreSalesHost">Retail Store Sales Host</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Housekeeping" name="Housekeeping" value="Housekeeping" checked={status === 46}
                                                        onClick={(e) => radioHandler(46)} />
                                                    <label className='search_label_size' for="Housekeeping">Housekeeping</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="HR/Admin" name="HR/Admin" value="HR/Admin" checked={status === 47}
                                                        onClick={(e) => radioHandler(47)} />
                                                    <label className='search_label_size' for="HR/Admin">HR/Admin</label><br />


                                                    {status === 47 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Compliance" name="Compliance" value="Compliance" />
                                                            <label className='search_label_size' for="Compliance">Compliance</label><br />

                                                            <input type="checkbox" id="FieldRecruiter" name="FieldRecruiter" value="FieldRecruiter" />
                                                            <label className='search_label_size' for="FieldRecruiter">Field Recruiter</label><br />

                                                            <input type="checkbox" id="HRMS" name="HRMS" value="HRMS" />
                                                            <label className='search_label_size' for="HRMS">HRMS </label><br />

                                                            <input type="checkbox" id="Learning&Development" name="Learning&Development" value="Learning&Development" />
                                                            <label className='search_label_size' for="Learning&Development">Learning & Development</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Payrolls" name="Payrolls" value="Payrolls" />
                                                            <label className='search_label_size' for="Payrolls">Payrolls</label><br />

                                                            <input type="checkbox" id="PersonnelManagement" name="PersonnelManagement" value="PersonnelManagement" />
                                                            <label className='search_label_size' for="PersonnelManagement">Personnel Management</label><br />

                                                            <input type="checkbox" id="Recruitment" name="Recruitment" value="Recruitment" />
                                                            <label className='search_label_size' for="Recruitment">Recruitment</label><br />

                                                            <input type="checkbox" id="Training" name="Training" value="Training" />
                                                            <label className='search_label_size' for="Training">Training</label><br />

                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="InsuranceConsultant" name="InsuranceConsultant" value="InsuranceConsultant" checked={status === 48}
                                                        onClick={(e) => radioHandler(48)} />
                                                    <label className='search_label_size' for="InsuranceConsultant">Insurance Consultant</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ITHardware&NetworkEngineer" name="ITHardware&NetworkEngineer" value="ITHardware&NetworkEngineer" checked={status === 49}
                                                        onClick={(e) => radioHandler(49)} />
                                                    <label className='search_label_size' for="ITHardware&NetworkEngineer">IT Hardware & Network Engineer</label><br />


                                                    {status === 49 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="HardwareInstallation" name="HardwareInstallation" value="HardwareInstallation" />
                                                            <label className='search_label_size' for="HardwareInstallation">Hardware Installation</label><br />

                                                            <input type="checkbox" id="NetworkEngineering" name="NetworkEngineering" value="NetworkEngineering" />
                                                            <label className='search_label_size' for="NetworkEngineering">Network Engineering</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others </label><br />

                                                            <input type="checkbox" id="SoftwareInstallation&Troubleshooting" name="SoftwareInstallation&Troubleshooting" value="SoftwareInstallation&Troubleshooting" />
                                                            <label className='search_label_size' for="SoftwareInstallation&Troubleshooting">Software Installation & Troubleshooting</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ITSoftware-Developer" name="ITSoftware-Developer" value="ITSoftware-Developer" checked={status === 50}
                                                        onClick={(e) => radioHandler(50)} />
                                                    <label className='search_label_size' for="ITSoftware-Developer">IT Software - Developer</label><br />


                                                    {status === 50 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AndroidDevelopement" name="AndroidDevelopement" value="AndroidDevelopement" />
                                                            <label className='search_label_size' for="AndroidDevelopement">Android Developement</label><br />

                                                            <input type="checkbox" id="Axiom" name="Axiom" value="Axiom" />
                                                            <label className='search_label_size' for="Axiom">Axiom</label><br />

                                                            <input type="checkbox" id="Biztalk" name="Biztalk" value="Biztalk" />
                                                            <label className='search_label_size' for="Biztalk">Biztalk</label><br />

                                                            <input type="checkbox" id="C/C++" name="C/C++" value="C/C++" />
                                                            <label className='search_label_size' for="C/C++">C / C++</label><br />

                                                            <input type="checkbox" id="C#" name="C#" value="C#" />
                                                            <label className='search_label_size' for="C#">C#</label><br />

                                                            <input type="checkbox" id="DotNet" name="DotNet" value="DotNet" />
                                                            <label className='search_label_size' for="DotNet">Dot Net</label><br />

                                                            <input type="checkbox" id="Drupal" name="Drupal" value="Drupal" />
                                                            <label className='search_label_size' for="Drupal">Drupal</label><br />

                                                            <input type="checkbox" id="Java" name="Java" value="Java" />
                                                            <label className='search_label_size' for="Java">Java</label><br />

                                                            <input type="checkbox" id="Joomla" name="Joomla" value="Joomla" />
                                                            <label className='search_label_size' for="Joomla">Joomla</label><br />

                                                            <input type="checkbox" id="Laravel" name="Laravel" value="Laravel" />
                                                            <label className='search_label_size' for="Laravel">Laravel</label><br />

                                                            <input type="checkbox" id="Magneto" name="Magneto" value="Magneto" />
                                                            <label className='search_label_size' for="Magneto">Magneto</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PHP" name="PHP" value="PHP" />
                                                            <label className='search_label_size' for="PHP">PHP</label><br />

                                                            <input type="checkbox" id="Pega" name="Pega" value="Pega" />
                                                            <label className='search_label_size' for="Pega">Pega</label><br />

                                                            <input type="checkbox" id="Python" name="Python" value="Python" />
                                                            <label className='search_label_size' for="Python">Python</label><br />

                                                            <input type="checkbox" id="ReactJs" name="ReactJs" value="ReactJs" />
                                                            <label className='search_label_size' for="ReactJs">React Js</label><br />

                                                            <input type="checkbox" id="Salesforce" name="Salesforce" value="Salesforce" />
                                                            <label className='search_label_size' for="Salesforce">Salesforce</label><br />

                                                            <input type="checkbox" id="ServiceNow" name="ServiceNow" value="ServiceNow" />
                                                            <label className='search_label_size' for="ServiceNow">Service Now</label><br />

                                                            <input type="checkbox" id="Sharepoint" name="Sharepoint" value="Sharepoint" />
                                                            <label className='search_label_size' for="Sharepoint">Sharepoint</label><br />

                                                            <input type="checkbox" id="Siebel" name="Siebel" value="Siebel" />
                                                            <label className='search_label_size' for="Siebel">Siebel</label><br />

                                                            <input type="checkbox" id="Tibco" name="Tibco" value="Tibco" />
                                                            <label className='search_label_size' for="Tibco">Tibco</label><br />

                                                            <input type="checkbox" id="VisualBasic" name="VisualBasic" value="VisualBasic" />
                                                            <label className='search_label_size' for="VisualBasic">Visual Basic</label><br />

                                                            <input type="checkbox" id="WebDevelopement" name="WebDevelopement" value="WebDevelopement" />
                                                            <label className='search_label_size' for="WebDevelopement">Web Developement</label><br />

                                                            <input type="checkbox" id="WindowsDevelopment" name="WindowsDevelopment" value="WindowsDevelopment" />
                                                            <label className='search_label_size' for="WindowsDevelopment">Windows Development</label><br />

                                                            <input type="checkbox" id="Wordpress" name="Wordpress" value="Wordpress" />
                                                            <label className='search_label_size' for="Wordpress">Wordpress</label><br />

                                                            <input type="checkbox" id="iOSDevelopment" name="iOSDevelopment" value="iOSDevelopment" />
                                                            <label className='search_label_size' for="iOSDevelopment">iOS Development</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ITSoftware-QA/TestEngineer" name="ITSoftware-QA/TestEngineer" value="ITSoftware-QA/TestEngineer" checked={status === 51}
                                                        onClick={(e) => radioHandler(51)} />
                                                    <label className='search_label_size' for="ITSoftware-QA/TestEngineer">IT Software - QA/Test Engineer</label><br />


                                                    {status === 51 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AutomatedTesting" name="AutomatedTesting" value="AutomatedTesting" />
                                                            <label className='search_label_size' for="AutomatedTesting">Automated Testing</label><br />

                                                            <input type="checkbox" id="Java" name="Java" value="Java" />
                                                            <label className='search_label_size' for="Java">Java</label><br />

                                                            <input type="checkbox" id="ManualTesting" name="ManualTesting" value="ManualTesting" />
                                                            <label className='search_label_size' for="ManualTesting">Manual Testing</label><br />

                                                            <input type="checkbox" id="MobileTesting" name="MobileTesting" value="MobileTesting" />
                                                            <label className='search_label_size' for="MobileTesting">Mobile Testing</label><br />

                                                            <input type="checkbox" id="OtherScriptingLanguages" name="OtherScriptingLanguages" value="OtherScriptingLanguages" />
                                                            <label className='search_label_size' for="OtherScriptingLanguages">Other Scripting Languages</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Perl" name="Perl" value="Perl" />
                                                            <label className='search_label_size' for="Perl">Perl</label><br />

                                                            <input type="checkbox" id="Python" name="Python" value="Python" />
                                                            <label className='search_label_size' for="Python">Python</label><br />

                                                            <input type="checkbox" id="SQL" name="SQL" value="SQL" />
                                                            <label className='search_label_size' for="SQL">SQL</label><br />

                                                            <input type="checkbox" id="Selenium" name="Selenium" value="Selenium" />
                                                            <label className='search_label_size' for="Selenium">Selenium</label><br />

                                                            <input type="checkbox" id="ShellScripting" name="ShellScripting" value="ShellScripting" />
                                                            <label className='search_label_size' for="ShellScripting">Shell Scripting</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ITSoftware-WebDesigner" name="ITSoftware-WebDesigner" value="ITSoftware-WebDesigner" checked={status === 52}
                                                        onClick={(e) => radioHandler(52)} />
                                                    <label className='search_label_size' for="ITSoftware-WebDesigner">IT Software - Web Designer</label><br />


                                                    {status === 52 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AdobeCreativeSuit" name="AdobeCreativeSuit" value="AdobeCreativeSuit" />
                                                            <label className='search_label_size' for="AdobeCreativeSuit">Adobe Creative Suit</label><br />

                                                            <input type="checkbox" id="AdobeDreamWeaver" name="AdobeDreamWeaver" value="AdobeDreamWeaver" />
                                                            <label className='search_label_size' for="AdobeDreamWeaver">Adobe Dream Weaver</label><br />

                                                            <input type="checkbox" id="AdobeIllustratorSoftware" name="AdobeIllustratorSoftware" value="AdobeIllustratorSoftware" />
                                                            <label className='search_label_size' for="AdobeIllustratorSoftware">Adobe Illustrator Software</label><br />

                                                            <input type="checkbox" id="AdobeIn-DesignSoftware" name="AdobeIn-DesignSoftware" value="AdobeIn-DesignSoftware" />
                                                            <label className='search_label_size' for="AdobeIn-DesignSoftware">Adobe In-Design Software</label><br />

                                                            <input type="checkbox" id="CSS" name="CSS" value="CSS" />
                                                            <label className='search_label_size' for="CSS">CSS</label><br />

                                                            <input type="checkbox" id="CorelDraw" name="CorelDraw" value="CorelDraw" />
                                                            <label className='search_label_size' for="CorelDraw">Corel Draw</label><br />

                                                            <input type="checkbox" id="DotNetFrameworks" name="DotNetFrameworks" value="DotNetFrameworks" />
                                                            <label className='search_label_size' for="DotNetFrameworks">Dot Net Frameworks</label><br />

                                                            <input type="checkbox" id="Fireworks" name="Fireworks" value="Fireworks" />
                                                            <label className='search_label_size' for="Fireworks">Fire works</label><br />

                                                            <input type="checkbox" id="Flash" name="Flash" value="Flash" />
                                                            <label className='search_label_size' for="Flash">Flash</label><br />

                                                            <input type="checkbox" id="HTML" name="HTML" value="HTML" />
                                                            <label className='search_label_size' for="HTML">HTML</label><br />

                                                            <input type="checkbox" id="MediaDesigns" name="MediaDesigns" value="MediaDesigns" />
                                                            <label className='search_label_size' for="MediaDesigns">Media Designs</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Photoshop" name="Photoshop" value="Photoshop" />
                                                            <label className='search_label_size' for="Photoshop">Photoshop</label><br />

                                                            <input type="checkbox" id="PosterDesign" name="PosterDesign" value="PosterDesign" />
                                                            <label className='search_label_size' for="PosterDesign">Poster Design</label><br />

                                                            <input type="checkbox" id="Sketch" name="Sketch" value="Sketch" />
                                                            <label className='search_label_size' for="Sketch">Sketch</label><br />

                                                            <input type="checkbox" id="Typography" name="Typography" value="Typography" />
                                                            <label className='search_label_size' for="Typography">Typography</label><br />

                                                            <input type="checkbox" id="VisualCommunication" name="VisualCommunication" value="VisualCommunication" />
                                                            <label className='search_label_size' for="VisualCommunication">Visual Communication</label><br />

                                                            <input type="checkbox" id="XHTML" name="XHTML" value="XHTML" />
                                                            <label className='search_label_size' for="XHTML">XHTML</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="LabAssistant" name="LabAssistant" value="LabAssistant" checked={status === 53}
                                                        onClick={(e) => radioHandler(53)} />
                                                    <label className='search_label_size' for="LabAssistant">Lab Assistant</label><br />


                                                    {status === 53 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Cardiology" name="Cardiology" value="Cardiology" />
                                                            <label className='search_label_size' for="Cardiology">Cardiology</label><br />

                                                            <input type="checkbox" id="Chemical" name="Chemical" value="Chemical" />
                                                            <label className='search_label_size' for="Chemical">Chemical</label><br />

                                                            <input type="checkbox" id="Clinical" name="Clinical" value="Clinical" />
                                                            <label className='search_label_size' for="Clinical">Clinical</label><br />

                                                            <input type="checkbox" id="Haemotology" name="Haemotology" value="Haemotology" />
                                                            <label className='search_label_size' for="Haemotology">Haemotology</label><br />

                                                            <input type="checkbox" id="Metallurgy" name="Metallurgy" value="Metallurgy" />
                                                            <label className='search_label_size' for="Metallurgy">Metallurgy</label><br />

                                                            <input type="checkbox" id="MicroBiology" name="MicroBiology" value="MicroBiology" />
                                                            <label className='search_label_size' for="MicroBiology">Micro Biology</label><br />

                                                            <input type="checkbox" id="Microbiology" name="Microbiology" value="Microbiology" />
                                                            <label className='search_label_size' for="Microbiology">Microbiology</label><br />

                                                            <input type="checkbox" id="Pathology" name="Pathology" value="Pathology" />
                                                            <label className='search_label_size' for="Pathology">Pathology</label><br />

                                                            <input type="checkbox" id="Phlebotomist" name="Phlebotomist" value="Phlebotomist" />
                                                            <label className='search_label_size' for="Phlebotomist">Phlebotomist</label><br />

                                                            <input type="checkbox" id="Radio" name="Radio" value="Radio" />
                                                            <label className='search_label_size' for="Radio">Radio</label><br />

                                                            <input type="checkbox" id="Radiographer" name="Radiographer" value="Radiographer" />
                                                            <label className='search_label_size' for="Radiographer">Radiographer</label><br />

                                                            <input type="checkbox" id="X-RayTechnician" name="X-RayTechnician" value="X-RayTechnician" />
                                                            <label className='search_label_size' for="X-RayTechnician">X-Ray Technician</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="LanguageTranslator" name="LanguageTranslator" value="LanguageTranslator" checked={status === 54}
                                                        onClick={(e) => radioHandler(54)} />
                                                    <label className='search_label_size' for="LanguageTranslator">Language Translator</label><br />


                                                    {status === 54 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Chinese" name="Chinese" value="Chinese" />
                                                            <label className='search_label_size' for="Chinese">Chinese</label><br />

                                                            <input type="checkbox" id="French" name="French" value="French" />
                                                            <label className='search_label_size' for="French">French</label><br />

                                                            <input type="checkbox" id="German" name="German" value="German" />
                                                            <label className='search_label_size' for="German">German</label><br />

                                                            <input type="checkbox" id="Italian" name="Italian" value="Italian" />
                                                            <label className='search_label_size' for="Italian">Italian</label><br />

                                                            <input type="checkbox" id="Japanese" name="Japanese" value="Japanese" />
                                                            <label className='search_label_size' for="Japanese">Japanese</label><br />

                                                            <input type="checkbox" id="Korean" name="Korean" value="Korean" />
                                                            <label className='search_label_size' for="Korean">Korean</label><br />

                                                            <input type="checkbox" id="Portugal" name="Portugal" value="Portugal" />
                                                            <label className='search_label_size' for="Portugal">Portugal</label><br />

                                                            <input type="checkbox" id="Russian" name="Russian" value="Russian" />
                                                            <label className='search_label_size' for="Russian">Russian</label><br />

                                                            <input type="checkbox" id="Russian" name="Russian" value="Russian" />
                                                            <label className='search_label_size' for="Russian">Russian</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Legal" name="Legal" value="Legal" checked={status === 55}
                                                        onClick={(e) => radioHandler(55)} />
                                                    <label className='search_label_size' for="Legal">Legal</label><br />


                                                    {status === 55 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="CommercialAgreement" name="CommercialAgreement" value="CommercialAgreement" />
                                                            <label className='search_label_size' for="CommercialAgreement">Commercial Agreement</label><br />

                                                            <input type="checkbox" id="ContractManagement" name="ContractManagement" value="ContractManagement" />
                                                            <label className='search_label_size' for="ContractManagement">Contract Management</label><br />

                                                            <input type="checkbox" id="Corporate" name="Corporate" value="Corporate" />
                                                            <label className='search_label_size' for="Corporate">Corporate</label><br />

                                                            <input type="checkbox" id="IntellectualProperty" name="IntellectualProperty" value="IntellectualProperty" />
                                                            <label className='search_label_size' for="IntellectualProperty">Intellectual Property</label><br />

                                                            <input type="checkbox" id="Bankruptcy" name="Bankruptcy" value="Bankruptcy" />
                                                            <label className='search_label_size' for="Bankruptcy">Bankruptcy</label><br />

                                                            <input type="checkbox" id="Constitutional" name="Constitutional" value="Constitutional" />
                                                            <label className='search_label_size' for="Constitutional">Constitutional</label><br />

                                                            <input type="checkbox" id="Criminal" name="Criminal" value="Criminal" />
                                                            <label className='search_label_size' for="Criminal">Criminal</label><br />

                                                            <input type="checkbox" id="Employment" name="Employment" value="Employment" />
                                                            <label className='search_label_size' for="Employment">Employment</label><br />

                                                            <input type="checkbox" id="Environmental" name="Environmental" value="Environmental" />
                                                            <label className='search_label_size' for="Environmental">Environmental</label><br />

                                                            <input type="checkbox" id="Family&Divorce" name="Family&Divorce" value="Family&Divorce" />
                                                            <label className='search_label_size' for="Family&Divorce">Family & Divorce</label><br />

                                                            <input type="checkbox" id="Government" name="Government" value="Government" />
                                                            <label className='search_label_size' for="Government">Government</label><br />

                                                            <input type="checkbox" id="Immigration" name="Immigration" value="Immigration" />
                                                            <label className='search_label_size' for="Immigration">Immigration</label><br />

                                                            <input type="checkbox" id="Labour" name="Labour" value="Labour" />
                                                            <label className='search_label_size' for="Labour">Labour</label><br />

                                                            <input type="checkbox" id="Medical" name="Medical" value="Medical" />
                                                            <label className='search_label_size' for="Medical">Medical</label><br />

                                                            <input type="checkbox" id="Property" name="Property" value="Property" />
                                                            <label className='search_label_size' for="Property">Property</label><br />

                                                            <input type="checkbox" id="RealEstate" name="RealEstate" value="RealEstate" />
                                                            <label className='search_label_size' for="RealEstate">Real Estate</label><br />

                                                            <input type="checkbox" id="Tax" name="Tax" value="Tax" />
                                                            <label className='search_label_size' for="Tax">Tax</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Librarian" name="Librarian" value="Librarian" checked={status === 56}
                                                        onClick={(e) => radioHandler(56)} />
                                                    <label className='search_label_size' for="Librarian">Librarian</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="LifeGuard" name="LifeGuard" value="LifeGuard" checked={status === 57}
                                                        onClick={(e) => radioHandler(57)} />
                                                    <label className='search_label_size' for="LifeGuard">Life Guard</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="LightingTechnician" name="LightingTechnician" value="LightingTechnician" checked={status === 58}
                                                        onClick={(e) => radioHandler(58)} />
                                                    <label className='search_label_size' for="LightingTechnician">Lighting Technician</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Maid" name="Maid" value="Maid" checked={status === 59}
                                                        onClick={(e) => radioHandler(59)} />
                                                    <label className='search_label_size' for="Maid">Maid</label><br />


                                                    {status === 59?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Livenmaid" name="Livenmaid" value="Livenmaid" />
                                                            <label className='search_label_size' for="Livenmaid">Liven maid</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="MarketResearchAnalyst" name="MarketResearchAnalyst" value="MarketResearchAnalyst" checked={status === 60}
                                                        onClick={(e) => radioHandler(60)} />
                                                    <label className='search_label_size' for="MarketResearchAnalyst">Market Research Analyst</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Marketing" name="Marketing" value="Marketing" checked={status === 61}
                                                        onClick={(e) => radioHandler(61)} />
                                                    <label className='search_label_size' for="Marketing">Marketing</label><br />


                                                    {status === 61 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Apparel" name="Apparel" value="Apparel" />
                                                            <label className='search_label_size' for="Apparel">Apparel</label><br />

                                                            <input type="checkbox" id="Banking&FinancialServices" name="Banking&FinancialServices" value="Banking&FinancialServices" />
                                                            <label className='search_label_size' for="Banking&FinancialServices">Banking & Financial Services</label><br />

                                                            <input type="checkbox" id="BeautyCare" name="BeautyCare" value="BeautyCare" />
                                                            <label className='search_label_size' for="BeautyCare">Beauty Care</label><br />

                                                            <input type="checkbox" id="BrandMarketing" name="BrandMarketing" value="BrandMarketing" />
                                                            <label className='search_label_size' for="BrandMarketing">Brand Marketing</label><br />

                                                            <input type="checkbox" id="ClubMemberships" name="ClubMemberships" value="ClubMemberships" />
                                                            <label className='search_label_size' for="ClubMemberships">Club Memberships</label><br />

                                                            <input type="checkbox" id="DigitalMarketing" name="DigitalMarketing" value="DigitalMarketing" />
                                                            <label className='search_label_size' for="DigitalMarketing">Digital Marketing</label><br />

                                                            <input type="checkbox" id="ExhibitionPlanning" name="ExhibitionPlanning" value="ExhibitionPlanning" />
                                                            <label className='search_label_size' for="ExhibitionPlanning">Exhibition Planning</label><br />

                                                            <input type="checkbox" id="Healthcare" name="Healthcare" value="Healthcare" />
                                                            <label className='search_label_size' for="Healthcare">Healthcare</label><br />

                                                            <input type="checkbox" id="InventoryManagement" name="InventoryManagement" value="InventoryManagement" />
                                                            <label className='search_label_size' for="InventoryManagement">Inventory Management</label><br />

                                                            <input type="checkbox" id="LogisticsMarketing" name="LogisticsMarketing" value="LogisticsMarketing" />
                                                            <label className='search_label_size' for="LogisticsMarketing">Logistics Marketing</label><br />

                                                            <input type="checkbox" id="Media" name="Media" value="Media" />
                                                            <label className='search_label_size' for="Media">Media</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Mechanic" name="Mechanic" value="Mechanic" checked={status === 62}
                                                        onClick={(e) => radioHandler(62)} />
                                                    <label className='search_label_size' for="Mechanic">Mechanic</label><br />


                                                    {status === 62 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="ACrepair" name="ACrepair" value="ACrepair" />
                                                            <label className='search_label_size' for="ACrepair">AC repair</label><br />

                                                            <input type="checkbox" id="ATMOperator" name="ATMOperator" value="ATMOperator" />
                                                            <label className='search_label_size' for="ATMOperator">ATM Operator</label><br />

                                                            <input type="checkbox" id="Automobile" name="Automobile" value="Automobile" />
                                                            <label className='search_label_size' for="Automobile">Automobile</label><br />

                                                            <input type="checkbox" id="CCTVTechnician" name="CCTVTechnician" value="CCTVTechnician" />
                                                            <label className='search_label_size' for="CCTVTechnician">CCTV Technician</label><br />

                                                            <input type="checkbox" id="DTH" name="DTH" value="DTH" />
                                                            <label className='search_label_size' for="DTH">DTH</label><br />

                                                            <input type="checkbox" id="Fitter" name="Fitter" value="Fitter" />
                                                            <label className='search_label_size' for="Fitter">Fitter</label><br />

                                                            <input type="checkbox" id="Four-Wheeler" name="Four-Wheeler" value="Four-Wheeler" />
                                                            <label className='search_label_size' for="Four-Wheeler">Four-Wheeler</label><br />

                                                            <input type="checkbox" id="Fridge" name="Fridge" value="Fridge" />
                                                            <label className='search_label_size' for="Fridge">Fridge</label><br />

                                                            <input type="checkbox" id="HVAC" name="HVAC" value="HVAC" />
                                                            <label className='search_label_size' for="HVAC">HVAC</label><br />

                                                            <input type="checkbox" id="IPTechnician" name="IPTechnician" value="IPTechnician" />
                                                            <label className='search_label_size' for="IPTechnician">IP Technician</label><br />

                                                            <input type="checkbox" id="Mobile-Repair" name="Mobile-Repair" value="Mobile-Repair" />
                                                            <label className='search_label_size' for="Mobile-Repair">Mobile-Repair</label><br />

                                                            <input type="checkbox" id="OpticalFiberTechnician" name="OpticalFiberTechnician" value="OpticalFiberTechnician" />
                                                            <label className='search_label_size' for="OpticalFiberTechnician">Optical Fiber Technician</label><br />

                                                            <input type="checkbox" id="OtherMachineRepair" name="OtherMachineRepair" value="OtherMachineRepair" />
                                                            <label className='search_label_size' for="OtherMachineRepair">Other Machine Repair</label><br />

                                                            <input type="checkbox" id="PrinterRepairTechnician" name="PrinterRepairTechnician" value="PrinterRepairTechnician" />
                                                            <label className='search_label_size' for="PrinterRepairTechnician">Printer Repair Technician</label><br />

                                                            <input type="checkbox" id="Radio/TVRepair" name="Radio/TVRepair" value="Radio/TVRepair" />
                                                            <label className='search_label_size' for="Radio/TVRepair">Radio/TV Repair</label><br />

                                                            <input type="checkbox" id="SDHDWDMTechnician" name="SDHDWDMTechnician" value="SDHDWDMTechnician" />
                                                            <label className='search_label_size' for="SDHDWDMTechnician">SDH DWDM Technician</label><br />

                                                            <input type="checkbox" id="SolarPVInstaller" name="SolarPVInstaller" value="SolarPVInstaller" />
                                                            <label className='search_label_size' for="SolarPVInstaller">Solar PV Installer</label><br />

                                                            <input type="checkbox" id="Three-Wheeler" name="Three-Wheeler" value="Three-Wheeler" />
                                                            <label className='search_label_size' for="Three-Wheeler">Three-Wheeler</label><br />

                                                            <input type="checkbox" id="Two-Wheeler" name="Two-Wheeler" value="Two-Wheeler" />
                                                            <label className='search_label_size' for="Two-Wheeler">Two-Wheeler</label><br />

                                                            <input type="checkbox" id="WashingMachineRepair" name="WashingMachineRepair" value="WashingMachineRepair" />
                                                            <label className='search_label_size' for="WashingMachineRepair">Washing Machine Repair</label><br />

                                                            <input type="checkbox" id="WaterPurifier/ROTechnician" name="WaterPurifier/ROTechnician" value="WaterPurifier/ROTechnician" />
                                                            <label className='search_label_size' for="WaterPurifier/ROTechnician">WaterPurifier/RO Technician</label><br />

                                                            <input type="checkbox" id="Welder" name="Welder" value="Welder" />
                                                            <label className='search_label_size' for="Welder">Welder</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="MedicalAssistant" name="MedicalAssistant" value="MedicalAssistant" checked={status === 63}
                                                        onClick={(e) => radioHandler(63)} />
                                                    <label className='search_label_size' for="MedicalAssistant">Medical Assistant</label><br />


                                                    {status === 63 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Dermatology" name="Dermatology" value="Dermatology" />
                                                            <label className='search_label_size' for="Dermatology">Dermatology</label><br />

                                                            <input type="checkbox" id="ENT" name="ENT" value="ENT" />
                                                            <label className='search_label_size' for="ENT">ENT</label><br />

                                                            <input type="checkbox" id="Gynaecology" name="Gynaecology" value="Gynaecology" />
                                                            <label className='search_label_size' for="Gynaecology">Gynaecology</label><br />

                                                            <input type="checkbox" id="Pediatric" name="Pediatric" value="Pediatric" />
                                                            <label className='search_label_size' for="Pediatric">Pediatric</label><br />

                                                            <input type="checkbox" id="Urology" name="Urology" value="Urology" />
                                                            <label className='search_label_size' for="Urology">Urology</label><br />

                                                            <input type="checkbox" id="Audiologist" name="Audiologist" value="Audiologist" />
                                                            <label className='search_label_size' for="Audiologist">Audiologist</label><br />

                                                            <input type="checkbox" id="Cardiology" name="Cardiology" value="Cardiology" />
                                                            <label className='search_label_size' for="Cardiology">Cardiology</label><br />

                                                            <input type="checkbox" id="Clinical" name="Clinical" value="Clinical" />
                                                            <label className='search_label_size' for="Clinical">Clinical</label><br />

                                                            <input type="checkbox" id="Dental" name="Dental" value="Dental" />
                                                            <label className='search_label_size' for="Dental">Dental</label><br />

                                                            <input type="checkbox" id="MicroBiology" name="MicroBiology" value="MicroBiology" />
                                                            <label className='search_label_size' for="MicroBiology">Micro Biology</label><br />

                                                            <input type="checkbox" id="Pathology" name="Pathology" value="Pathology" />
                                                            <label className='search_label_size' for="Pathology">Pathology</label><br />

                                                            <input type="checkbox" id="Radio" name="Radio" value="Radio" />
                                                            <label className='search_label_size' for="Radio">Radio</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="MedicalRepresentative" name="MedicalRepresentative" value="MedicalRepresentative" checked={status === 64}
                                                        onClick={(e) => radioHandler(64)} />
                                                    <label className='search_label_size' for="MedicalRepresentative">Medical Representative</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Microbiologist" name="Microbiologist" value="Microbiologist" checked={status === 65}
                                                        onClick={(e) => radioHandler(65)} />
                                                    <label className='search_label_size' for="Microbiologist">Microbiologist</label><br />


                                                    {status === 65 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Alcohol" name="Alcohol" value="Alcohol" />
                                                            <label className='search_label_size' for="Alcohol">Alcohol</label><br />

                                                            <input type="checkbox" id="BioTechnology" name="BioTechnology" value="BioTechnology" />
                                                            <label className='search_label_size' for="BioTechnology">Bio Technology</label><br />

                                                            <input type="checkbox" id="Dairy" name="Dairy" value="Dairy" />
                                                            <label className='search_label_size' for="Dairy">Dairy</label><br />

                                                            <input type="checkbox" id="Environment" name="Environment" value="Environment" />
                                                            <label className='search_label_size' for="Environment">Environment</label><br />

                                                            <input type="checkbox" id="Hospital" name="Hospital" value="Hospital" />
                                                            <label className='search_label_size' for="Hospital">Hospital</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PharmaManufacturing" name="PharmaManufacturing" value="PharmaManufacturing" />
                                                            <label className='search_label_size' for="PharmaManufacturing">Pharma Manufacturing</label><br />

                                                            <input type="checkbox" id="Research" name="Research" value="Research" />
                                                            <label className='search_label_size' for="Research">Research</label><br />

                                                            <input type="checkbox" id="Restaurant" name="Restaurant" value="Restaurant" />
                                                            <label className='search_label_size' for="Restaurant">Restaurant</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="MISExecutive" name="MISExecutive" value="MISExecutive" checked={status === 66}
                                                        onClick={(e) => radioHandler(66)} />
                                                    <label className='search_label_size' for="MISExecutive">MIS Executive</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Moulder" name="Moulder" value="Moulder" checked={status === 67}
                                                        onClick={(e) => radioHandler(67)} />
                                                    <label className='search_label_size' for="Moulder">Moulder</label><br />


                                                    {status === 67 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="ConfectionInjectionMoulding" name="ConfectionInjectionMoulding" value="ConfectionInjectionMoulding" />
                                                            <label className='search_label_size' for="ConfectionInjectionMoulding">Confection Injection Moulding</label><br />

                                                            <input type="checkbox" id="ElastomerInjectionMoulding" name="ElastomerInjectionMoulding" value="ElastomerInjectionMoulding" />
                                                            <label className='search_label_size' for="ElastomerInjectionMoulding">Elastomer Injection Moulding</label><br />

                                                            <input type="checkbox" id="GlassInjectionMoulding" name="GlassInjectionMoulding" value="GlassInjectionMoulding" />
                                                            <label className='search_label_size' for="GlassInjectionMoulding">Glass Injection Moulding</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PlasticInjectionMoulding" name="PlasticInjectionMoulding" value="PlasticInjectionMoulding" />
                                                            <label className='search_label_size' for="PlasticInjectionMoulding">Plastic Injection Moulding</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Nurse" name="Nurse" value="Nurse" checked={status === 68}
                                                        onClick={(e) => radioHandler(68)} />
                                                    <label className='search_label_size' for="Nurse">Nurse</label><br />


                                                    {status === 68 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Ambulance" name="Ambulance" value="Ambulance" />
                                                            <label className='search_label_size' for="Ambulance">Ambulance</label><br />

                                                            <input type="checkbox" id="Clinic" name="Clinic" value="Clinic" />
                                                            <label className='search_label_size' for="Clinic">Clinic</label><br />

                                                            <input type="checkbox" id="Dialysis" name="Dialysis" value="Dialysis" />
                                                            <label className='search_label_size' for="Dialysis">Dialysis</label><br />

                                                            <input type="checkbox" id="Firstaidkit" name="Firstaidkit" value="Firstaidkit" />
                                                            <label className='search_label_size' for="Firstaidkit">First aid kit</label><br />

                                                            <input type="checkbox" id="Generaldutyassistant" name="Generaldutyassistant" value="Generaldutyassistant" />
                                                            <label className='search_label_size' for="Generaldutyassistant">General duty assistant</label><br />

                                                            <input type="checkbox" id="Hospital" name="Hospital" value="Hospital" />
                                                            <label className='search_label_size' for="Hospital">Hospital</label><br />

                                                            <input type="checkbox" id="IVFNurse" name="IVFNurse" value="IVFNurse" />
                                                            <label className='search_label_size' for="IVFNurse">IVF Nurse</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PrivateHouse" name="PrivateHouse" value="PrivateHouse" />
                                                            <label className='search_label_size' for="PrivateHouse">Private House</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Nutritionist/Dietician" name="Nutritionist/Dietician" value="Nutritionist/Dietician" checked={status === 69}
                                                        onClick={(e) => radioHandler(69)} />
                                                    <label className='search_label_size' for="Nutritionist/Dietician">Nutritionist/Dietician</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="OfficeAssistant/Helper" name="OfficeAssistant/Helper" value="OfficeAssistant/Helper" checked={status === 70}
                                                        onClick={(e) => radioHandler(70)} />
                                                    <label className='search_label_size' for="OfficeAssistant/Helper">Office Assistant/Helper</label><br />


                                                    {status === 70 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="FrontDesk" name="FrontDesk" value="FrontDesk" />
                                                            <label className='search_label_size' for="FrontDesk">Front Desk</label><br />

                                                            <input type="checkbox" id="InventoryIncharge" name="InventoryIncharge" value="InventoryIncharge" />
                                                            <label className='search_label_size' for="InventoryIncharge">Inventory Incharge</label><br />

                                                            <input type="checkbox" id="PantryBoy" name="PantryBoy" value="PantryBoy" />
                                                            <label className='search_label_size' for="PantryBoy">Pantry Boy</label><br />

                                                            <input type="checkbox" id="Clerk" name="Clerk" value="Clerk" />
                                                            <label className='search_label_size' for="Clerk">Clerk</label><br />

                                                            <input type="checkbox" id="ServiceStations" name="ServiceStations" value="ServiceStations" />
                                                            <label className='search_label_size' for="ServiceStations">Service Stations</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Operator/Machinist" name="Operator/Machinist" value="Operator/Machinist" checked={status === 71}
                                                        onClick={(e) => radioHandler(71)} />
                                                    <label className='search_label_size' for="Operator/Machinist">Operator/Machinist</label><br />


                                                    {status === 71 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Annealing" name="Annealing" value="Annealing" />
                                                            <label className='search_label_size' for="Annealing">Annealing</label><br />

                                                            <input type="checkbox" id="Boiler" name="Boiler" value="Boiler" />
                                                            <label className='search_label_size' for="Boiler">Boiler</label><br />

                                                            <input type="checkbox" id="CNCDrill" name="CNCDrill" value="CNCDrill" />
                                                            <label className='search_label_size' for="CNCDrill">CNC Drill</label><br />

                                                            <input type="checkbox" id="CCTVTechnician" name="CCTVTechnician" value="CCTVTechnician" />
                                                            <label className='search_label_size' for="CCTVTechnician">CCTV Technician</label><br />

                                                            <input type="checkbox" id="Carpetmachineoperator" name="Carpetmachineoperator" value="Carpetmachineoperator" />
                                                            <label className='search_label_size' for="Carpetmachineoperator">Carpet machine operator</label><br />

                                                            <input type="checkbox" id="ControlRoomOperator" name="ControlRoomOperator" value="ControlRoomOperator" />
                                                            <label className='search_label_size' for="ControlRoomOperator">Control Room Operator</label><br />

                                                            <input type="checkbox" id="Crane" name="Crane" value="Crane" />
                                                            <label className='search_label_size' for="Crane">Crane</label><br />

                                                            <input type="checkbox" id="CylindericalGrinder" name="CylindericalGrinder" value="CylindericalGrinder" />
                                                            <label className='search_label_size' for="CylindericalGrinder">Cylinderical Grinder</label><br />

                                                            <input type="checkbox" id="DRO" name="DRO" value="DRO" />
                                                            <label className='search_label_size' for="DRO">DRO</label><br />

                                                            <input type="checkbox" id="Digitalprintingmachine" name="Digitalprintingmachine" value="Digitalprintingmachine" />
                                                            <label className='search_label_size' for="Digitalprintingmachine">Digital printing machine</label><br />

                                                            <input type="checkbox" id="EdgeBenderOperator" name="EdgeBenderOperator" value="EdgeBenderOperator" />
                                                            <label className='search_label_size' for="EdgeBenderOperator">Edge Bender Operator</label><br />

                                                            <input type="checkbox" id="Elevator" name="Elevator" value="Elevator" />
                                                            <label className='search_label_size' for="Elevator">Elevator</label><br />

                                                            <input type="checkbox" id="Excavator" name="Excavator" value="Excavator" />
                                                            <label className='search_label_size' for="Excavator">Excavator</label><br />

                                                            <input type="checkbox" id="Finishing" name="Finishing" value="Finishing" />
                                                            <label className='search_label_size' for="Finishing">Finishing</label><br />

                                                            <input type="checkbox" id="FireAlaram" name="FireAlaram" value="FireAlaram" />
                                                            <label className='search_label_size' for="FireAlaram">Fire Alaram</label><br />

                                                            <input type="checkbox" id="Flexmachine" name="Flexmachine" value="Flexmachine" />
                                                            <label className='search_label_size' for="Flexmachine">Flex machine</label><br />

                                                            <input type="checkbox" id="FoodProductionMachineOperator" name="FoodProductionMachineOperator" value="FoodProductionMachineOperator" />
                                                            <label className='search_label_size' for="FoodProductionMachineOperator">Food Production Machine Operator</label><br />

                                                            <input type="checkbox" id="Forklift" name="Forklift" value="Forklift" />
                                                            <label className='search_label_size' for="Forklift">Forklift</label><br />

                                                            <input type="checkbox" id="Hobbingmachine" name="Hobbingmachine" value="Hobbingmachine" />
                                                            <label className='search_label_size' for="Hobbingmachine">Hobbing machine</label><br />

                                                            <input type="checkbox" id="HotPressMachineOperator" name="HotPressMachineOperator" value="HotPressMachineOperator" />
                                                            <label className='search_label_size' for="HotPressMachineOperator">Hot Press Machine Operator</label><br />

                                                            <input type="checkbox" id="Hydra" name="Hydra" value="Hydra" />
                                                            <label className='search_label_size' for="Hydra">Hydra</label><br />

                                                            <input type="checkbox" id="LatheMachine" name="LatheMachine" value="LatheMachine" />
                                                            <label className='search_label_size' for="LatheMachine">Lathe Machine</label><br />

                                                            <input type="checkbox" id="Laundry" name="Laundry" value="Laundry" />
                                                            <label className='search_label_size' for="Laundry">Laundry</label><br />

                                                            <input type="checkbox" id="MillingMachine" name="MillingMachine" value="MillingMachine" />
                                                            <label className='search_label_size' for="MillingMachine">Milling Machine</label><br />

                                                            <input type="checkbox" id="Molding" name="Molding" value="Molding" />
                                                            <label className='search_label_size' for="Molding">Molding</label><br />

                                                            <input type="checkbox" id="MultiBoringMachineOperator" name="MultiBoringMachineOperator" value="MultiBoringMachineOperator" />
                                                            <label className='search_label_size' for="MultiBoringMachineOperator">Multi Boring Machine Operator</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Packeroperator" name="Packeroperator" value="Packeroperator" />
                                                            <label className='search_label_size' for="Packeroperator">Packer operator</label><br />

                                                            <input type="checkbox" id="PanelSawOperator" name="PanelSawOperator" value="PanelSawOperator" />
                                                            <label className='search_label_size' for="PanelSawOperator">Panel Saw Operator</label><br />

                                                            <input type="checkbox" id="PressMachine" name="PressMachine" value="PressMachine" />
                                                            <label className='search_label_size' for="PressMachine">Press Machine</label><br />

                                                            <input type="checkbox" id="Pump" name="Pump" value="Pump" />
                                                            <label className='search_label_size' for="Pump">Pump</label><br />

                                                            <input type="checkbox" id="PunchMachine" name="PunchMachine" value="PunchMachine" />
                                                            <label className='search_label_size' for="PunchMachine">Punch Machine</label><br />

                                                            <input type="checkbox" id="Stacker" name="Stacker" value="Stacker" />
                                                            <label className='search_label_size' for="Stacker">Stacker</label><br />

                                                            <input type="checkbox" id="Thermoforming" name="Thermoforming" value="Thermoforming" />
                                                            <label className='search_label_size' for="Thermoforming">Thermoforming</label><br />

                                                            <input type="checkbox" id="TowTruck" name="TowTruck" value="TowTruck" />
                                                            <label className='search_label_size' for="TowTruck">Tow Truck</label><br />

                                                            <input type="checkbox" id="Tubewell" name="Tubewell" value="Tubewell" />
                                                            <label className='search_label_size' for="Tubewell">Tubewell</label><br />

                                                            <input type="checkbox" id="TurningMachine" name="TurningMachine" value="TurningMachine" />
                                                            <label className='search_label_size' for="Industrial">Turning Machine</label><br />

                                                            <input type="checkbox" id="VMCMachine" name="VMCMachine" value="VMCMachine" />
                                                            <label className='search_label_size' for="VMCMachine">VMC Machine</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Optometrist" name="Optometrist" value="Optometrist" checked={status === 72}
                                                        onClick={(e) => radioHandler(72)} />
                                                    <label className='search_label_size' for="Optometrist">Optometrist</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Packager" name="Packager" value="Packager" checked={status === 73}
                                                        onClick={(e) => radioHandler(73)} />
                                                    <label className='search_label_size' for="Packager">Packager</label><br />


                                                    {status === 73 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="FoodPackaging" name="FoodPackaging" value="FoodPackaging" />
                                                            <label className='search_label_size' for="FoodPackaging">Food Packaging</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Painter" name="Painter" value="Painter" checked={status === 74}
                                                        onClick={(e) => radioHandler(74)} />
                                                    <label className='search_label_size' for="Painter">Painter</label><br />


                                                    {status === 74 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="CarPainter" name="CarPainter" value="CarPainter" />
                                                            <label className='search_label_size' for="CarPainter">Car Painter</label><br />

                                                            <input type="checkbox" id="Exteriorwallpainting" name="Exteriorwallpainting" value="Exteriorwallpainting" />
                                                            <label className='search_label_size' for="Exteriorwallpainting">Exterior wall painting</label><br />

                                                            <input type="checkbox" id="GlassPainting" name="GlassPainting" value="GlassPainting" />
                                                            <label className='search_label_size' for="GlassPainting">Glass Painting</label><br />

                                                            <input type="checkbox" id="IndustrialSteelPainter" name="IndustrialSteelPainter" value="IndustrialSteelPainter" />
                                                            <label className='search_label_size' for="IndustrialSteelPainter">Industrial Steel Painter</label><br />

                                                            <input type="checkbox" id="InteriorwallPainting" name="InteriorwallPainting" value="InteriorwallPainting" />
                                                            <label className='search_label_size' for="InteriorwallPainting">Interior wall Painting</label><br />

                                                            <input type="checkbox" id="MetalPainter" name="MetalPainter" value="MetalPainter" />
                                                            <label className='search_label_size' for="MetalPainter">Metal Painter</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PortraitPainter" name="PortraitPainter" value="PortraitPainter" />
                                                            <label className='search_label_size' for="PortraitPainter">Portrait Painter</label><br />

                                                            <input type="checkbox" id="SprayPainter" name="SprayPainter" value="SprayPainter" />
                                                            <label className='search_label_size' for="SprayPainter">Spray Painter</label><br />

                                                            <input type="checkbox" id="WoodPainter" name="WoodPainter" value="WoodPainter" />
                                                            <label className='search_label_size' for="WoodPainter">Wood Painter</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="PestControlExecutive" name="PestControlExecutive" value="PestControlExecutive" checked={status === 75}
                                                        onClick={(e) => radioHandler(75)} />
                                                    <label className='search_label_size' for="PestControlExecutive">Pest Control Executive</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Pharmacist" name="Pharmacist" value="Pharmacist" checked={status === 76}
                                                        onClick={(e) => radioHandler(76)} />
                                                    <label className='search_label_size' for="Pharmacist">Pharmacist</label><br />


                                                    {status === 76 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Formulation" name="Formulation" value="Formulation" />
                                                            <label className='search_label_size' for="Formulation">Formulation</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="Packaging" name="Packaging" value="Packaging" />
                                                            <label className='search_label_size' for="Packaging">Packaging</label><br />

                                                            <input type="checkbox" id="QC" name="QC" value="QC" />
                                                            <label className='search_label_size' for="QC">QC</label><br />

                                                            <input type="checkbox" id="Research&Developement" name="Research&Developement" value="Research&Developement" />
                                                            <label className='search_label_size' for="Research&Developement">Research & Developement</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Photographer" name="Photographer" value="Photographer" checked={status === 77}
                                                        onClick={(e) => radioHandler(77)} />
                                                    <label className='search_label_size' for="Photographer">Photographer</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Plumber" name="Plumber" value="Plumber" checked={status === 78}
                                                        onClick={(e) => radioHandler(78)} />
                                                    <label className='search_label_size' for="Plumber">Plumber</label><br />


                                                    {status === 78 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="CloggedDrainPipe" name="CloggedDrainPipe" value="CloggedDrainPipe" />
                                                            <label className='search_label_size' for="CloggedDrainPipe">Clogged Drain Pipe</label><br />

                                                            <input type="checkbox" id="DrainWaterSystem" name="DrainWaterSystem" value="DrainWaterSystem" />
                                                            <label className='search_label_size' for="DrainWaterSystem">Drain Water System</label><br />

                                                            <input type="checkbox" id="FaucetRepair/Replacement" name="FaucetRepair/Replacement" value="FaucetRepair/Replacement" />
                                                            <label className='search_label_size' for="FaucetRepair/Replacement">Faucet Repair/ Replacement</label><br />

                                                            <input type="checkbox" id="IndustrialDrainageCoursework" name="IndustrialDrainageCoursework" value="IndustrialDrainageCoursework" />
                                                            <label className='search_label_size' for="IndustrialDrainageCoursework">Industrial Drainage Coursework</label><br />

                                                            <input type="checkbox" id="PipeCutting" name="PipeCutting" value="PipeCutting" />
                                                            <label className='search_label_size' for="PipeCutting">Pipe Cutting</label><br />

                                                            <input type="checkbox" id="PipesSecuring" name="PipesSecuring" value="PipesSecuring" />
                                                            <label className='search_label_size' for="PipesSecuring">Pipes Securing</label><br />

                                                            <input type="checkbox" id="RepairingPlumbingSystems" name="RepairingPlumbingSystems" value="RepairingPlumbingSystems" />
                                                            <label className='search_label_size' for="RepairingPlumbingSystems">Repairing Plumbing Systems</label><br />

                                                            <input type="checkbox" id="Repairing/InstallingwaterHeaters" name="Repairing/InstallingwaterHeaters" value="Repairing/InstallingwaterHeaters" />
                                                            <label className='search_label_size' for="Repairing/InstallingwaterHeaters">Repairing/Installing water Heaters</label><br />

                                                            <input type="checkbox" id="ResidentialDrainageCoursework" name="ResidentialDrainageCoursework" value="ResidentialDrainageCoursework" />
                                                            <label className='search_label_size' for="ResidentialDrainageCoursework">Residential Drainage Coursework</label><br />

                                                            <input type="checkbox" id="SewageTreatment" name="SewageTreatment" value="SewageTreatment" />
                                                            <label className='search_label_size' for="SewageTreatment">Sewage Treatment</label><br />

                                                            <input type="checkbox" id="ShowerRepair/Replacement" name="ShowerRepair/Replacement" value="ShowerRepair/Replacement" />
                                                            <label className='search_label_size' for="ShowerRepair/Replacement">Shower Repair/Replacement</label><br />

                                                            <input type="checkbox" id="TapRepair/Replacement" name="TapRepair/Replacement" value="TapRepair/Replacement" />
                                                            <label className='search_label_size' for="TapRepair/Replacement">Tap Repair/ Replacement</label><br />

                                                            <input type="checkbox" id="ValvesInstallation" name="ValvesInstallation" value="ValvesInstallation" />
                                                            <label className='search_label_size' for="ValvesInstallation">Valves Installation</label><br />

                                                            <input type="checkbox" id="WaterSupplyExpert" name="WaterSupplyExpert" value="WaterSupplyExpert" />
                                                            <label className='search_label_size' for="WaterSupplyExpert">Water Supply Expert</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Porter" name="Porter" value="Porter" checked={status === 79}
                                                        onClick={(e) => radioHandler(79)} />
                                                    <label className='search_label_size' for="Porter">Porter</label><br />


                                                    {status === 79 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AirportPorter" name="AirportPorter" value="AirportPorter" />
                                                            <label className='search_label_size' for="AirportPorter">Airport Porter</label><br />

                                                            <input type="checkbox" id="CommercialPorter" name="CommercialPorter" value="CommercialPorter" />
                                                            <label className='search_label_size' for="CommercialPorter">Commercial Porter</label><br />

                                                            <input type="checkbox" id="CorporatePorter" name="CorporatePorter" value="CorporatePorter" />
                                                            <label className='search_label_size' for="CorporatePorter">Corporate Porter</label><br />

                                                            <input type="checkbox" id="HospitalPorter" name="HospitalPorter" value="HospitalPorter" />
                                                            <label className='search_label_size' for="HospitalPorter">Hospital Porter</label><br />

                                                            <input type="checkbox" id="HotelPorter" name="HotelPorter" value="HotelPorter" />
                                                            <label className='search_label_size' for="HotelPorter">Hotel Porter</label><br />

                                                            <input type="checkbox" id="IndustrialPorter" name="IndustrialPorter" value="IndustrialPorter" />
                                                            <label className='search_label_size' for="IndustrialPorter">Industrial Porter</label><br />

                                                            <input type="checkbox" id="RailwayPorter" name="RailwayPorter" value="RailwayPorter" />
                                                            <label className='search_label_size' for="RailwayPorter">Railway Porter</label><br />

                                                            <input type="checkbox" id="ResidentialPorter" name="ResidentialPorter" value="ResidentialPorter" />
                                                            <label className='search_label_size' for="ResidentialPorter">Residential Porter</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="ProductManager" name="ProductManager" value="ProductManager" checked={status === 80}
                                                        onClick={(e) => radioHandler(80)} />
                                                    <label className='search_label_size' for="ProductManager">Product Manager</label><br />


                                                    {status === 80 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Banking&Finance" name="Banking&Finance" value="Banking&Finance" />
                                                            <label className='search_label_size' for="Banking&Finance">Banking & Finance</label><br />

                                                            <input type="checkbox" id="IT" name="IT" value="IT" />
                                                            <label className='search_label_size' for="IT">IT</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="Marketing" name="Marketing" value="Marketing" />
                                                            <label className='search_label_size' for="Marketing">Marketing</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Program/Proect Manager" name="Program/Proect Manager" value="Program/Proect Manager" checked={status === 81}
                                                        onClick={(e) => radioHandler(81)} />
                                                    <label className='search_label_size' for="Program/Proect Manager">Program/Proect Manager</label><br />


                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Projectionist" name="Projectionist" value="Projectionist" checked={status === 82}
                                                        onClick={(e) => radioHandler(82)} />
                                                    <label className='search_label_size' for="Projectionist">Projectionist</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="PublicRelations" name="PublicRelations" value="PublicRelations" checked={status === 83}
                                                        onClick={(e) => radioHandler(83)} />
                                                    <label className='search_label_size' for="PublicRelations">Public Relations</label><br />


                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="PurchaseExecutive" name="PurchaseExecutive" value="PurchaseExecutive" checked={status === 84}
                                                        onClick={(e) => radioHandler(84)} />
                                                    <label className='search_label_size' for="PurchaseExecutive">Purchase Executive</label><br />


                                                    {status === 84 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="FMCGPurchase" name="FMCGPurchase" value="FMCGPurchase" />
                                                            <label className='search_label_size' for="FMCGPurchase">FMCG Purchase</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="QualityandInspection" name="QualityandInspection" value="QualityandInspection" checked={status === 85}
                                                        onClick={(e) => radioHandler(85)} />
                                                    <label className='search_label_size' for="QualityandInspection">Quality and Inspection</label><br />


                                                    {status === 85?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="2WheelerEvaluator" name="2WheelerEvaluator" value="2WheelerEvaluator" />
                                                            <label className='search_label_size' for="2WheelerEvaluator">2 Wheeler Evaluator</label><br />

                                                            <input type="checkbox" id="4WheelerEvaluator" name="4WheelerEvaluator" value="4WheelerEvaluator" />
                                                            <label className='search_label_size' for="4WheelerEvaluator">4 Wheeler Evaluator</label><br />

                                                            <input type="checkbox" id="Construction" name="Construction" value="Construction" />
                                                            <label className='search_label_size' for="Construction">Construction</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="Pharmaceutical" name="Pharmaceutical" value="Pharmaceutical" />
                                                            <label className='search_label_size' for="Pharmaceutical">Pharmaceutical</label><br />

                                                            <input type="checkbox" id="Reporting" name="Reporting" value="Reporting" />
                                                            <label className='search_label_size' for="Reporting">Reporting</label><br />

                                                            <input type="checkbox" id="Steel" name="Steel" value="Steel" />
                                                            <label className='search_label_size' for="Steel">Steel</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Receptionist/FrontOffice" name="Receptionist/FrontOffice" value="Receptionist/FrontOffice" checked={status === 86}
                                                        onClick={(e) => radioHandler(86)} />
                                                    <label className='search_label_size' for="Receptionist/FrontOffice">Receptionist/Front Office</label><br />


                                                    {status === 86 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Bank" name="Bank" value="Bank" />
                                                            <label className='search_label_size' for="Bank">Bank</label><br />

                                                            <input type="checkbox" id="Comapany" name="Comapany" value="Comapany" />
                                                            <label className='search_label_size' for="Comapany">Comapany</label><br />

                                                            <input type="checkbox" id="EducationalInstitute" name="EducationalInstitute" value="EducationalInstitute" />
                                                            <label className='search_label_size' for="EducationalInstitute">Educational Institute</label><br />

                                                            <input type="checkbox" id="Hospital" name="Hospital" value="Hospital" />
                                                            <label className='search_label_size' for="Hospital">Hospital</label><br />

                                                            <input type="checkbox" id="Hotel" name="Hotel" value="Hotel" />
                                                            <label className='search_label_size' for="Hotel">Hotel</label><br />

                                                            <input type="checkbox" id="Industry" name="Industry" value="Industry" />
                                                            <label className='search_label_size' for="Industry">Industry</label><br />

                                                            <input type="checkbox" id="Offices" name="Offices" value="Offices" />
                                                            <label className='search_label_size' for="Offices">Offices</label><br />

                                                            <input type="checkbox" id="ServiceStations" name="ServiceStations" value="ServiceStations" />
                                                            <label className='search_label_size' for="ServiceStations">Service Stations</label><br />

                                                            <input type="checkbox" id="Showroom" name="Showroom" value="Showroom" />
                                                            <label className='search_label_size' for="Showroom">Showroom</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Reporter" name="Reporter" value="Reporter" checked={status === 87}
                                                        onClick={(e) => radioHandler(87)} />
                                                    <label className='search_label_size' for="Reporter">Reporter</label><br />


                                                    {status === 87 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Anchor" name="Anchor" value="Anchor" />
                                                            <label className='search_label_size' for="Anchor">Anchor</label><br />

                                                            <input type="checkbox" id="Business" name="Business" value="Business" />
                                                            <label className='search_label_size' for="Business">Business</label><br />

                                                            <input type="checkbox" id="Crime" name="Crime" value="Crime" />
                                                            <label className='search_label_size' for="Crime">Crime</label><br />

                                                            <input type="checkbox" id="Entertainment" name="Entertainment" value="Entertainment" />
                                                            <label className='search_label_size' for="Entertainment">Entertainment</label><br />

                                                            <input type="checkbox" id="Fashion" name="Fashion" value="Fashion" />
                                                            <label className='search_label_size' for="Fashion">Fashion</label><br />

                                                            <input type="checkbox" id="Field" name="Field" value="Field" />
                                                            <label className='search_label_size' for="Field">Field</label><br />

                                                            <input type="checkbox" id="General" name="General" value="General" />
                                                            <label className='search_label_size' for="General">General</label><br />

                                                            <input type="checkbox" id="NewsEditor" name="NewsEditor" value="NewsEditor" />
                                                            <label className='search_label_size' for="NewsEditor">News Editor</label><br />

                                                            <input type="checkbox" id="Press" name="Press" value="Press" />
                                                            <label className='search_label_size' for="Press">Press</label><br />

                                                            <input type="checkbox" id="Reporter/SubEditor" name="Reporter/SubEditor" value="Reporter/SubEditor" />
                                                            <label className='search_label_size' for="Reporter/SubEditor">Reporter/Sub Editor</label><br />

                                                            <input type="checkbox" id="Sports" name="Sports" value="Sports" />
                                                            <label className='search_label_size' for="Sports">Sports</label><br />

                                                            <input type="checkbox" id="Travel" name="Travel" value="Travel" />
                                                            <label className='search_label_size' for="Travel">Travel</label><br />

                                                            <input type="checkbox" id="Weather" name="Weather" value="Weather" />
                                                            <label className='search_label_size' for="Weather">Weather</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Rigger" name="Rigger" value="Rigger" checked={status === 88}
                                                        onClick={(e) => radioHandler(88)} />
                                                    <label className='search_label_size' for="Rigger">Rigger</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SafetyOfficer" name="SafetyOfficer" value="SafetyOfficer" checked={status === 89}
                                                        onClick={(e) => radioHandler(89)} />
                                                    <label className='search_label_size' for="SafetyOfficer">Safety Officer</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Sales" name="Sales" value="Sales" checked={status === 90}
                                                        onClick={(e) => radioHandler(90)} />
                                                    <label className='search_label_size' for="Sales">Sales</label><br />


                                                    {status === 90 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Apparel" name="Apparel" value="Apparel" />
                                                            <label className='search_label_size' for="Apparel">Apparel</label><br />

                                                            <input type="checkbox" id="Automobile" name="Automobile" value="Automobile" />
                                                            <label className='search_label_size' for="Automobile">Automobile</label><br />

                                                            <input type="checkbox" id="Banking&FinancialServices" name="Banking&FinancialServices" value="Banking&FinancialServices" />
                                                            <label className='search_label_size' for="Banking&FinancialServices">Banking & Financial Services</label><br />

                                                            <input type="checkbox" id="Cement/ConcreteSales" name="Cement/ConcreteSales" value="Cement/ConcreteSales" />
                                                            <label className='search_label_size' for="Cement/ConcreteSales">Cement/ Concrete Sales</label><br />

                                                            <input type="checkbox" id="Constructionequipments" name="Constructionequipments" value="Constructionequipments" />
                                                            <label className='search_label_size' for="Constructionequipments">Construction equipments</label><br />

                                                            <input type="checkbox" id="ConsumerDurables" name="ConsumerDurables" value="ConsumerDurables" />
                                                            <label className='search_label_size' for="ConsumerDurables">Consumer Durables</label><br />

                                                            <input type="checkbox" id="E-Commerce" name="E-Commerce" value="E-Commerce" />
                                                            <label className='search_label_size' for="E-Commerce">E-Commerce</label><br />

                                                            <input type="checkbox" id="ElectronicsSales" name="ElectronicsSales" value="ElectronicsSales" />
                                                            <label className='search_label_size' for="ElectronicsSales">Electronics Sales</label><br />

                                                            <input type="checkbox" id="Entertainment/Event" name="Entertainment/Event" value="Entertainment/Event" />
                                                            <label className='search_label_size' for="Entertainment/Event">Entertainment/Event</label><br />

                                                            <input type="checkbox" id="FMCG" name="FMCG" value="FMCG" />
                                                            <label className='search_label_size' for="FMCG">FMCG</label><br />

                                                            <input type="checkbox" id="FoodandBeverageSales" name="FoodandBeverageSales" value="FoodandBeverageSales" />
                                                            <label className='search_label_size' for="FoodandBeverageSales">Food and Beverage Sales</label><br />

                                                            <input type="checkbox" id="Health" name="Health" value="Health" />
                                                            <label className='search_label_size' for="Health">Health</label><br />

                                                            <input type="checkbox" id="IT" name="IT" value="IT" />
                                                            <label className='search_label_size' for="IT">IT</label><br />

                                                            <input type="checkbox" id="IndustrialSales" name="IndustrialSales" value="IndustrialSales" />
                                                            <label className='search_label_size' for="IndustrialSales">Industrial Sales</label><br />

                                                            <input type="checkbox" id="Insurance" name="Insurance" value="Insurance" />
                                                            <label className='search_label_size' for="Insurance">Insurance</label><br />

                                                            <input type="checkbox" id="Jewellery" name="Jewellery" value="Jewellery" />
                                                            <label className='search_label_size' for="Jewellery">Jewellery</label><br />

                                                            <input type="checkbox" id="Laptop/Mobile" name="Laptop/Mobile" value="Laptop/Mobile" />
                                                            <label className='search_label_size' for="Laptop/Mobile">Laptop/Mobile</label><br />

                                                            <input type="checkbox" id="Manufacturing" name="Manufacturing" value="Manufacturing" />
                                                            <label className='search_label_size' for="Manufacturing">Manufacturing</label><br />

                                                            <input type="checkbox" id="MutualFundsSales" name="MutualFundsSales" value="MutualFundsSales" />
                                                            <label className='search_label_size' for="MutualFundsSales">Mutual Funds Sales</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PaintSales" name="PaintSales" value="PaintSales" />
                                                            <label className='search_label_size' for="PaintSales">Paint Sales</label><br />

                                                            <input type="checkbox" id="Pharma" name="Pharma" value="Pharma" />
                                                            <label className='search_label_size' for="Pharma">Pharma</label><br />

                                                            <input type="checkbox" id="PlywoodSales" name="PlywoodSales" value="PlywoodSales" />
                                                            <label className='search_label_size' for="PlywoodSales">Plywood Sales</label><br />

                                                            <input type="checkbox" id="RealEstate" name="RealEstate" value="RealEstate" />
                                                            <label className='search_label_size' for="RealEstate">Real Estate</label><br />

                                                            <input type="checkbox" id="Retail" name="Retail" value="Retail" />
                                                            <label className='search_label_size' for="Retail">Retail</label><br />

                                                            <input type="checkbox" id="SewageTreatment" name="SewageTreatment" value="SewageTreatment" />
                                                            <label className='search_label_size' for="SewageTreatment">Sewage Treatment</label><br />

                                                            <input type="checkbox" id="SharesDerivatives/FinancialTrading" name="SharesDerivatives/FinancialTrading" value="SharesDerivatives/FinancialTrading" />
                                                            <label className='search_label_size' for="SharesDerivatives/FinancialTrading">Shares Derivatives / Financial Trading</label><br />

                                                            <input type="checkbox" id="SolarSystemSales" name="SolarSystemSales" value="SolarSystemSales" />
                                                            <label className='search_label_size' for="SolarSystemSales">Solar System Sales</label><br />

                                                            <input type="checkbox" id="Telecom" name="Telecom" value="Telecom" />
                                                            <label className='search_label_size' for="Telecom">Telecom</label><br />

                                                            <input type="checkbox" id="Tours&Travels" name="Tours&Travels" value="Tours&Travels" />
                                                            <label className='search_label_size' for="Tours&Travels">Tours & Travels</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SAPConsultant" name="SAPConsultant" value="SAPConsultant" checked={status === 91}
                                                        onClick={(e) => radioHandler(91)} />
                                                    <label className='search_label_size' for="SAPConsultant">SAP Consultant</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Scientist/Research" name="Scientist/Research" value="Scientist/Research" checked={status === 92}
                                                        onClick={(e) => radioHandler(92)} />
                                                    <label className='search_label_size' for="Scientist/Research">Scientist/Research</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Security/Guard" name="Security/Guard" value="Security/Guard" checked={status === 93}
                                                        onClick={(e) => radioHandler(93)} />
                                                    <label className='search_label_size' for="Security/Guard">Security/Guard</label><br />


                                                    {status === 93 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="AlaramSystems" name="AlaramSystems" value="AlaramSystems" />
                                                            <label className='search_label_size' for="AlaramSystems">Alaram Systems</label><br />

                                                            <input type="checkbox" id="ArmedForces" name="ArmedForces" value="ArmedForces" />
                                                            <label className='search_label_size' for="ArmedForces">Armed Forces</label><br />

                                                            <input type="checkbox" id="FireSafety" name="FireSafety" value="FireSafety" />
                                                            <label className='search_label_size' for="FireSafety">Fire Safety</label><br />

                                                            <input type="checkbox" id="GunMan" name="GunMan" value="GunMan" />
                                                            <label className='search_label_size' for="GunMan">Gun Man</label><br />

                                                            <input type="checkbox" id="Intelligence" name="Intelligence" value="Intelligence" />
                                                            <label className='search_label_size' for="Intelligence">Intelligence</label><br />

                                                            <input type="checkbox" id="Mobile/Patrol" name="Mobile/Patrol" value="Mobile/Patrol" />
                                                            <label className='search_label_size' for="Mobile/Patrol">Mobile/Patrol</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PistolMan" name="PistolMan" value="PistolMan" />
                                                            <label className='search_label_size' for="PistolMan">Pistol Man</label><br />

                                                            <input type="checkbox" id="Police" name="Police" value="Police" />
                                                            <label className='search_label_size' for="Police">Police</label><br />

                                                            <input type="checkbox" id="PrivateSecurity" name="PrivateSecurity" value="PrivateSecurity" />
                                                            <label className='search_label_size' for="PrivateSecurity">Private Security</label><br />

                                                            <input type="checkbox" id="RetiredMilitaryPersonnel" name="RetiredMilitaryPersonnel" value="RetiredMilitaryPersonnel" />
                                                            <label className='search_label_size' for="RetiredMilitaryPersonnel">Retired Military Personnel</label><br />

                                                            <input type="checkbox" id="SecurityServices/Custodian" name="SecurityServices/Custodian" value="SecurityServices/Custodian" />
                                                            <label className='search_label_size' for="SecurityServices/Custodian">Security Services/Custodian</label><br />

                                                            <input type="checkbox" id="Furniture" name="Vigilance" value="Vigilance" />
                                                            <label className='search_label_size' for="Vigilance">Vigilance</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SheeetMetalWorker" name="SheeetMetalWorker" value="SheeetMetalWorker" checked={status === 94}
                                                        onClick={(e) => radioHandler(94)} />
                                                    <label className='search_label_size' for="SheeetMetalWorker">Sheeet Metal Worker</label><br />


                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SoftwareArchitect" name="SoftwareArchitect" value="SoftwareArchitect" checked={status === 95}
                                                        onClick={(e) => radioHandler(95)} />
                                                    <label className='search_label_size' for="SoftwareArchitect">Software Architect</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SolderingOperator" name="SolderingOperator" value="SolderingOperator" checked={status === 96}
                                                        onClick={(e) => radioHandler(96)} />
                                                    <label className='search_label_size' for="SolderingOperator">Soldering Operator</label><br />


                                                    {status === 96 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="BrazingSoldering" name="BrazingSoldering" value="BrazingSoldering" />
                                                            <label className='search_label_size' for="BrazingSoldering">Brazing Soldering</label><br />

                                                            <input type="checkbox" id="BreadboardSoldering" name="BreadboardSoldering" value="BreadboardSoldering" />
                                                            <label className='search_label_size' for="BreadboardSoldering">Breadboard Soldering</label><br />

                                                            <input type="checkbox" id="ConnectorSoldering" name="ConnectorSoldering" value="ConnectorSoldering" />
                                                            <label className='search_label_size' for="ConnectorSoldering">Connector Soldering</label><br />

                                                            <input type="checkbox" id="ElectronicSoldering" name="ElectronicSoldering" value="ElectronicSoldering" />
                                                            <label className='search_label_size' for="ElectronicSoldering">Electronic Soldering</label><br />

                                                            <input type="checkbox" id="ICSoldering" name="ICSoldering" value="ICSoldering" />
                                                            <label className='search_label_size' for="ICSoldering">IC Soldering</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="PCBSoldering" name="PCBSoldering" value="PCBSoldering" />
                                                            <label className='search_label_size' for="PCBSoldering">PCB Soldering</label><br />

                                                            <input type="checkbox" id="PipeSoldering" name="PipeSoldering" value="PipeSoldering" />
                                                            <label className='search_label_size' for="PipeSoldering">Pipe Soldering</label><br />

                                                            <input type="checkbox" id="SMDSoldering" name="SMDSoldering" value="SMDSoldering" />
                                                            <label className='search_label_size' for="SMDSoldering">SMD Soldering</label><br />

                                                            <input type="checkbox" id="SpliceSoldering" name="SpliceSoldering" value="SpliceSoldering" />
                                                            <label className='search_label_size' for="SpliceSoldering">Splice Soldering</label><br />

                                                            <input type="checkbox" id="WaveSoldering" name="WaveSoldering" value="WaveSoldering" />
                                                            <label className='search_label_size' for="WaveSoldering">Wave Soldering</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SoundEngineer" name="SoundEngineer" value="SoundEngineer" checked={status === 97}
                                                        onClick={(e) => radioHandler(97)} />
                                                    <label className='search_label_size' for="SoundEngineer">Sound Engineer</label><br />


                                                    {status === 97 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Commercial" name="Commercial" value="Commercial" />
                                                            <label className='search_label_size' for="Commercial">Commercial</label><br />

                                                            <input type="checkbox" id="ComputerGames" name="ComputerGames" value="ComputerGames" />
                                                            <label className='search_label_size' for="ComputerGames">Computer Games</label><br />

                                                            <input type="checkbox" id="CorporateVideos" name="CorporateVideos" value="CorporateVideos" />
                                                            <label className='search_label_size' for="CorporateVideos">Corporate Videos</label><br />

                                                            <input type="checkbox" id="Events" name="Events" value="Events" />
                                                            <label className='search_label_size' for="Events">Events</label><br />

                                                            <input type="checkbox" id="Film" name="Film" value="Film" />
                                                            <label className='search_label_size' for="Film">Film</label><br />

                                                            <input type="checkbox" id="Interviews" name="Interviews" value="Interviews" />
                                                            <label className='search_label_size' for="Interviews">Interviews</label><br />

                                                            <input type="checkbox" id="Podcast" name="Podcast" value="Podcast" />
                                                            <label className='search_label_size' for="Podcast">Podcast</label><br />

                                                            <input type="checkbox" id="Radio" name="Radio" value="Radio" />
                                                            <label className='search_label_size' for="Radio">Radio</label><br />

                                                            <input type="checkbox" id="Seminars" name="Seminars" value="Seminars" />
                                                            <label className='search_label_size' for="Seminars">Seminars</label><br />

                                                            <input type="checkbox" id="ShortFilms/Documentry" name="ShortFilms/Documentry" value="ShortFilms/Documentry" />
                                                            <label className='search_label_size' for="ShortFilms/Documentry">Short Films / Documentry</label><br />

                                                            <input type="checkbox" id="Studio" name="Studio" value="Studio" />
                                                            <label className='search_label_size' for="Studio">Studio</label><br />

                                                            <input type="checkbox" id="TV" name="TV" value="TV" />
                                                            <label className='search_label_size' for="TV">TV</label><br />

                                                            <input type="checkbox" id="WebSeries" name="WebSeries" value="WebSeries" />
                                                            <label className='search_label_size' for="WebSeries">Web Series</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="SportsTrainer" name="SportsTrainer" value="SportsTrainer" checked={status === 98}
                                                        onClick={(e) => radioHandler(98)} />
                                                    <label className='search_label_size' for="SportsTrainer">Sports Trainer</label><br />


                                                    {status === 98 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Adults" name="Adults" value="Adults" />
                                                            <label className='search_label_size' for="Adults">Adults</label><br />

                                                            <input type="checkbox" id="Atheletes" name="Atheletes" value="Atheletes" />
                                                            <label className='search_label_size' for="Atheletes">Atheletes</label><br />

                                                            <input type="checkbox" id="DifferentlyAbled" name="DifferentlyAbled" value="DifferentlyAbled" />
                                                            <label className='search_label_size' for="DifferentlyAbled">Differently Abled</label><br />

                                                            <input type="checkbox" id="Kids" name="Kids" value="Kids" />
                                                            <label className='search_label_size' for="Kids">Kids</label><br />

                                                            <input type="checkbox" id="Teenagers" name="Teenagers" value="Teenagers" />
                                                            <label className='search_label_size' for="Teenagers">Teenagers</label><br />

                                                            <input type="checkbox" id="Women" name="Women" value="Women" />
                                                            <label className='search_label_size' for="Women">Women</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Tailor" name="Tailor" value="Tailor" checked={status === 99}
                                                        onClick={(e) => radioHandler(99)} />
                                                    <label className='search_label_size' for="Tailor">Tailor</label><br />


                                                    {status === 99 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Commercial" name="BoutiqueTailor" value="BoutiqueTailor" />
                                                            <label className='search_label_size' for="Commercial">Boutique Tailor</label><br />

                                                            <input type="checkbox" id="DesignerTailor" name="DesignerTailor" value="DesignerTailor" />
                                                            <label className='search_label_size' for="DesignerTailor">Designer Tailor</label><br />

                                                            <input type="checkbox" id="GentsTailor" name="GentsTailor" value="GentsTailor" />
                                                            <label className='search_label_size' for="GentsTailor">Gents Tailor</label><br />

                                                            <input type="checkbox" id="IndustrialTailor" name="IndustrialTailor" value="IndustrialTailor" />
                                                            <label className='search_label_size' for="IndustrialTailor">Industrial Tailor</label><br />

                                                            <input type="checkbox" id="LadiesTailor" name="LadiesTailor" value="LadiesTailor" />
                                                            <label className='search_label_size' for="LadiesTailor">Ladies Tailor</label><br />

                                                            <input type="checkbox" id="LeatherTailor" name="LeatherTailor" value="LeatherTailor" />
                                                            <label className='search_label_size' for="LeatherTailor">Leather Tailor</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Teacher" name="Teacher" value="Teacher" checked={status === 100}
                                                        onClick={(e) => radioHandler(100)} />
                                                    <label className='search_label_size' for="Teacher">Teacher</label><br />


                                                    {status === 100 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Computer" name="Computer" value="Computer" />
                                                            <label className='search_label_size' for="Computer">Computer</label><br />

                                                            <input type="checkbox" id="Hindi" name="Hindi" value="Hindi" />
                                                            <label className='search_label_size' for="Hindi">Hindi</label><br />

                                                            <input type="checkbox" id="Math" name="Math" value="Math" />
                                                            <label className='search_label_size' for="Math">Math</label><br />

                                                            <input type="checkbox" id="Sanskrit" name="Sanskrit" value="Sanskrit" />
                                                            <label className='search_label_size' for="Sanskrit">Sanskrit</label><br />

                                                            <input type="checkbox" id="Science" name="Science" value="Science" />
                                                            <label className='search_label_size' for="Science">Science</label><br />

                                                            <input type="checkbox" id="SocialScience" name="SocialScience" value="SocialScience" />
                                                            <label className='search_label_size' for="SocialScience">Social Science</label><br />

                                                            <input type="checkbox" id="Abacus" name="Abacus" value="Abacus" />
                                                            <label className='search_label_size' for="Abacus">Abacus</label><br />

                                                            <input type="checkbox" id="Accounts" name="Accounts" value="Accounts" />
                                                            <label className='search_label_size' for="Accounts">Accounts</label><br />

                                                            <input type="checkbox" id="Arabic" name="Arabic" value="Arabic" />
                                                            <label className='search_label_size' for="Arabic">Arabic</label><br />

                                                            <input type="checkbox" id="ArtsandCrafts" name="ArtsandCrafts" value="ArtsandCrafts" />
                                                            <label className='search_label_size' for="ArtsandCrafts">Arts and Crafts</label><br />

                                                            <input type="checkbox" id="Biology" name="Biology" value="Biology" />
                                                            <label className='search_label_size' for="Industrial">Biology</label><br />

                                                            <input type="checkbox" id="Botany" name="Botany" value="Botany" />
                                                            <label className='search_label_size' for="Botany">Botany</label><br />

                                                            <input type="checkbox" id="Chemistry" name="Chemistry" value="Chemistry" />
                                                            <label className='search_label_size' for="Chemistry">Chemistry</label><br />

                                                            <input type="checkbox" id="Commerce" name="Commerce" value="Commerce" />
                                                            <label className='search_label_size' for="Commerce">Commerce</label><br />

                                                            <input type="checkbox" id="Economics" name="Economics" value="Economics" />
                                                            <label className='search_label_size' for="Economics">Economics</label><br />

                                                            <input type="checkbox" id="English" name="English" value="English" />
                                                            <label className='search_label_size' for="English">English</label><br />

                                                            <input type="checkbox" id="Finance" name="Finance" value="Finance" />
                                                            <label className='search_label_size' for="Finance">Finance</label><br />

                                                            <input type="checkbox" id="French" name="French" value="French" />
                                                            <label className='search_label_size' for="French">French</label><br />

                                                            <input type="checkbox" id="HR" name="HR" value="HR" />
                                                            <label className='search_label_size' for="HR">HR</label><br />

                                                            <input type="checkbox" id="Kannada" name="Kannada" value="Kannada" />
                                                            <label className='search_label_size' for="Kannada">Kannada</label><br />

                                                            <input type="checkbox" id="Marketing" name="Marketing" value="Marketing" />
                                                            <label className='search_label_size' for="Marketing">Marketing</label><br />

                                                            <input type="checkbox" id="Physics" name="Physics" value="Physics" />
                                                            <label className='search_label_size' for="Physics">Physics</label><br />

                                                            <input type="checkbox" id="Spanish" name="Spanish" value="Spanish" />
                                                            <label className='search_label_size' for="Spanish">Spanish</label><br />

                                                            <input type="checkbox" id="Tamil" name="Tamil" value="Tamil" />
                                                            <label className='search_label_size' for="Tamil">Tamil</label><br />

                                                            <input type="checkbox" id="Urdu" name="Urdu" value="Urdu" />
                                                            <label className='search_label_size' for="Urdu">Urdu</label><br />

                                                            <input type="checkbox" id="Zoology" name="Zoology" value="Zoology" />
                                                            <label className='search_label_size' for="Zoology">Zoology</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="TicketingExecutive" name="TicketingExecutive" value="TicketingExecutive" checked={status === 101}
                                                        onClick={(e) => radioHandler(101)} />
                                                    <label className='search_label_size' for="TicketingExecutive">Ticketing Executive</label><br />


                                                    {status === 101 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Airlines" name="Airlines" value="Airlines" />
                                                            <label className='search_label_size' for="Airlines">Airlines</label><br />

                                                            <input type="checkbox" id="Events" name="Events" value="Events" />
                                                            <label className='search_label_size' for="Events">Events</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Multiplex" name="Multiplex" value="Multiplex" />
                                                            <label className='search_label_size' for="Multiplex">Multiplex</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="Railway" name="Railway" value="Railway" />
                                                            <label className='search_label_size' for="Railway">Railway</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Trainer" name="Trainer" value="Trainer" checked={status === 102}
                                                        onClick={(e) => radioHandler(102)} />
                                                    <label className='search_label_size' for="Trainer">Trainer</label><br />


                                                    {status === 102 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Aerobics" name="Aerobics" value="Aerobics" />
                                                            <label className='search_label_size' for="Aerobics">Aerobics</label><br />

                                                            <input type="checkbox" id="Dance" name="Dance" value="Dance" />
                                                            <label className='search_label_size' for="Dance">Dance</label><br />

                                                            <input type="checkbox" id="Gym" name="Gym" value="Gym" />
                                                            <label className='search_label_size' for="Gym">Gym</label><br />

                                                            <input type="checkbox" id="Language" name="Language" value="Language" />
                                                            <label className='search_label_size' for="Language">Language</label><br />

                                                            <input type="checkbox" id="MusicalArts" name="MusicalArts" value="MusicalArts" />
                                                            <label className='search_label_size' for="MusicalArts">Musical Arts</label><br />

                                                            <input type="checkbox" id="MusicalInstruments" name="MusicalInstruments" value="MusicalInstruments" />
                                                            <label className='search_label_size' for="MusicalInstruments">Musical Instruments</label><br />

                                                            <input type="checkbox" id="SoftSkills" name="SoftSkills" value="SoftSkills" />
                                                            <label className='search_label_size' for="SoftSkills">Soft Skills</label><br />

                                                            <input type="checkbox" id="Sport" name="Sport" value="Sport" />
                                                            <label className='search_label_size' for="Sport">Sport</label><br />

                                                            <input type="checkbox" id="Yoga" name="Yoga" value="Yoga" />
                                                            <label className='search_label_size' for="Yoga">Yoga</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="TransportSupervisor" name="TransportSupervisor" value="TransportSupervisor" checked={status === 103}
                                                        onClick={(e) => radioHandler(103)} />
                                                    <label className='search_label_size' for="TransportSupervisor">Transport Supervisor</label><br />


                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Videographer" name="Videographer" value="Videographer" checked={status === 104}
                                                        onClick={(e) => radioHandler(104)} />
                                                    <label className='search_label_size' for="Videographer">Videographer</label><br />


                                                    {status === 104 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Event" name="Event" value="Event" />
                                                            <label className='search_label_size' for="Event">Event</label><br />

                                                            <input type="checkbox" id="Fashion" name="Fashion" value="Fashion" />
                                                            <label className='search_label_size' for="Fashion">Fashion</label><br />

                                                            <input type="checkbox" id="Films" name="Films" value="Films" />
                                                            <label className='search_label_size' for="Films">Films</label><br />

                                                            <input type="checkbox" id="Media" name="Media" value="Media" />
                                                            <label className='search_label_size' for="Media">Media</label><br />

                                                            <input type="checkbox" id="Nature" name="Nature" value="Nature" />
                                                            <label className='search_label_size' for="Nature">Nature</label><br />

                                                            <input type="checkbox" id="Sports" name="Sports" value="Sports" />
                                                            <label className='search_label_size' for="Sports">Sports</label><br />

                                                            <input type="checkbox" id="Travel" name="Travel" value="Travel" />
                                                            <label className='search_label_size' for="Travel">Travel</label><br />

                                                            <input type="checkbox" id="Wedding" name="Wedding" value="Wedding" />
                                                            <label className='search_label_size' for="Wedding">Wedding</label><br />

                                                            <input type="checkbox" id="Wildlife" name="Wildlife" value="Wildlife" />
                                                            <label className='search_label_size' for="Wildlife">Wildlife</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>


                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Waiter/Steward" name="Waiter/Steward" value="Waiter/Steward" checked={status === 105}
                                                        onClick={(e) => radioHandler(105)} />
                                                    <label className='search_label_size' for="Waiter/Steward">Waiter/Steward</label><br />


                                                    {status === 105 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Airlines" name="Airlines" value="Airlines" />
                                                            <label className='search_label_size' for="Airlines">Airlines</label><br />

                                                            <input type="checkbox" id="Healthcare" name="Healthcare" value="Healthcare" />
                                                            <label className='search_label_size' for="Healthcare">Healthcare</label><br />

                                                            <input type="checkbox" id="Hotel&Restaurant" name="Hotel&Restaurant" value="Hotel&Restaurant" />
                                                            <label className='search_label_size' for="Hotel&Restaurant">Hotel & Restaurant</label><br />

                                                            <input type="checkbox" id="Language" name="Language" value="Language" />
                                                            <label className='search_label_size' for="Language">Language</label><br />

                                                            <input type="checkbox" id="Others" name="Others" value="Others" />
                                                            <label className='search_label_size' for="Others">Others</label><br />

                                                            <input type="checkbox" id="QuickServiceRestaurants" name="QuickServiceRestaurants" value="QuickServiceRestaurants" />
                                                            <label className='search_label_size' for="QuickServiceRestaurants">Quick Service Restaurants</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="WardBoy" name="WardBoy" value="WardBoy" checked={status === 106}
                                                        onClick={(e) => radioHandler(106)} />
                                                    <label className='search_label_size' for="WardBoy">Ward Boy</label><br />


                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="WarehouseExecutive" name="WarehouseExecutive" value="WarehouseExecutive" checked={status === 107}
                                                        onClick={(e) => radioHandler(107)} />
                                                    <label className='search_label_size' for="WarehouseExecutive">Warehouse Executive</label><br />


                                                    {status === 107 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Picker/Helpers" name="Picker/Helpers" value="Picker/Helpers" />
                                                            <label className='search_label_size' for="Picker/Helpers">Picker/Helpers</label><br />


                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Welder" name="Welder" value="Welder" checked={status === 108}
                                                        onClick={(e) => radioHandler(108)} />
                                                    <label className='search_label_size' for="Welder">Welder</label><br />


                                                    {status === 108 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="ButtWelder" name="ButtWelder" value="ButtWelder" />
                                                            <label className='search_label_size' for="ButtWelder">Butt Welder</label><br />

                                                            <input type="checkbox" id="MigandTigWelder" name="MigandTigWelder" value="MigandTigWelder" />
                                                            <label className='search_label_size' for="MigandTigWelder">Mig and Tig Welder</label><br />

                                                            <input type="checkbox" id="SpotWelder" name="SpotWelder" value="SpotWelder" />
                                                            <label className='search_label_size' for="SpotWelder">Spot Welder</label><br />

                                                            <input type="checkbox" id="ArcWelder" name="ArcWelder" value="ArcWelder" />
                                                            <label className='search_label_size' for="ArcWelder">Arc Welder</label><br />

                                                            <input type="checkbox" id="AutomotiveWelders" name="AutomotiveWelders" value="AutomotiveWelders" />
                                                            <label className='search_label_size' for="AutomotiveWelders">Automotive Welders</label><br />

                                                            <input type="checkbox" id="PipeWelders" name="PipeWelders" value="PipeWelders" />
                                                            <label className='search_label_size' for="PipeWelders">Pipe Welders</label><br />



                                                        </div>) : null}

                                                </div>
                                            </div>



                                            <div className='col-md-6'>
                                                <div className='text-left'>

                                                    <input type="radio" id="Wireman" name="Wireman" value="Wireman" checked={status === 109}
                                                        onClick={(e) => radioHandler(109)} />
                                                    <label className='search_label_size' for="Wireman">Wireman</label><br />


                                                    {status === 109 ?
                                                        (<div className='search_sub_names'>
                                                            <input type="checkbox" id="Commercial" name="Commercial" value="Commercial" />
                                                            <label className='search_label_size' for="Commercial">Commercial</label><br />

                                                            <input type="checkbox" id="Residential" name="Residential" value="Residential" />
                                                            <label className='search_label_size' for="Residential">Residential</label><br />

                                                            <input type="checkbox" id="Industrial" name="Industrial" value="Industrial" />
                                                            <label className='search_label_size' for="Industrial">Industrial</label><br />


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

    )
}

export default UI
