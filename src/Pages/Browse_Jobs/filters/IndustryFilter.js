import { Link } from "react-router-dom";

const IndustryFilter = () => {

    return <>
        <div class="card">
            <div class="card-header" id="headingThree">

                <h5
                    class=" collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                >
                    Industry{" "}
                    <span className="float-right">
                        <i className="fas fa-plus"></i>
                    </span>
                </h5>

            </div>
            <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">

                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault1"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault1"
                                >
                                    BPO / Call Center(879)
                                </label>
                            </div>
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault1"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault1"
                                >
                                    Real Estate(589)
                                </label>
                            </div>
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault1"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault1"
                                >
                                    Management Jobs (685)
                                </label>
                            </div>
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault1"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault1"
                                >
                                    Financial Services (965)
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default IndustryFilter;