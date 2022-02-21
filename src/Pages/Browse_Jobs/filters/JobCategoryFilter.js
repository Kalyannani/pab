import { Link } from "react-router-dom";

const JobCategoryFilter = () => {

    return <>
        <div class="card">
            <div class="card-header" id="headingFive">

                <h5
                    class=" collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                >
                    Job Function / Category{" "}
                    <span className="float-right">
                        <i className="fas fa-plus"></i>
                    </span>
                </h5>

            </div>
            <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input "
                                    type="checkbox"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault2"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault2"
                                >
                                    Production Management(120)
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
                                    Design Engineering(300)
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
                                    Saftey/health(235)
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
                                    Engineering (568)
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
                                    Product Development (798)
                                </label>
                            </div>

                            <div className="more">
                                <Link
                                    to="/categoryjobs"
                                    className="more_inner float-right mr-4 py-1"
                                >
                                    {" "}
                                    more...{" "}
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default JobCategoryFilter;