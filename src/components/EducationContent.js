import React from "react"

class EducationContent extends React.Component {
    render = () =>
        <div>

            <div className="accordion mt-4 mb-4" id="accordionExample">

                <div className="card">
                    <div className="card-header" id="education_neu">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src="./NEULogo.png"  height="50px" width="50px"></img> &nbsp; <h5 className = "mb-0 pt-3 pl-2">Northeastern University, Boston</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2">August 2017 - May 2022</h5>
                                    </div>

                                </div>

                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            Degree: B.S. in Computer Science and Business Administration (Exp. May 2022)
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="education_sis">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src="./sis.png"  height="50px" width="50px"></img> &nbsp;
                                            <h5 className = "mb-0 pt-3 pl-2">Singapore International School, Mumbai</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2">August 2009 - May 2017</h5>
                                    </div>

                                </div>

                            </button>
                        </h2>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            Degree: B.S. in Computer Science and Business Administration (Exp. May 2022)
                        </div>
                    </div>
                </div>


            </div>

        </div>
}

export default EducationContent