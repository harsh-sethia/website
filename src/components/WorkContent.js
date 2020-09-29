import React from "react"

class WorkContent extends React.Component {
    render = () =>
        <div>

            <div className="accordion mt-4 mb-4" id="accordionExample">

                <div className="card">
                    <div className="card-header" id="tutor_neu">
                        <h6 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workOne" aria-expanded="true" aria-controls="workOne">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src="./Khoury.jpeg"  height="50px" width="50px"></img> &nbsp;
                                            <h5 className = "mb-0 pt-2 pl-2">Khoury College of Computer Sciences, Boston</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2">January - June 2020</h5>
                                    </div>

                                </div>

                            </button>
                            <h6 className =  "ml-5 mt-n4 pl-4">Computer Science Teaching Assistant</h6>
                        </h6>
                    </div>

                    <div id="workOne" className="collapse show" aria-labelledby="workOne"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            Degree: B.S. in Computer Science and Business Administration (Exp. May 2022)
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="coop_cfn">
                        <h6 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workTwo" aria-expanded="true" aria-controls="workTwo">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src="./CFN.jpeg"  height="50px" width="50px"></img> &nbsp; <h5 className = "mb-0 pt-2 pl-2">Commonwealth Financial Network, Waltham</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2">June - December 2019</h5>
                                    </div>

                                </div>

                            </button>
                            <h6 className =  "ml-5 mt-n4 pl-4">Information Security Co-op</h6>
                        </h6>
                    </div>

                    <div id="workTwo" className="collapse" aria-labelledby="workTwo"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            Degree: B.S. in Computer Science and Business Administration (Exp. May 2022)
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="intern_shpl">
                        <h6 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workThree" aria-expanded="true" aria-controls="workThree">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src="./SHPL.png"  height="50px" width="50px"></img> &nbsp;
                                            <h5 className = "mb-0 pt-2 pl-2">Sethia Handicrafts Private Limited, Jodhpur</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2">May - July 2017</h5>
                                    </div>
                                </div>

                            </button>
                            <h6 className =  "ml-5 mt-n4 pl-4">Summer Internship</h6>
                        </h6>
                    </div>

                    <div id="workThree" className="collapse" aria-labelledby="workThree"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            Degree: B.S. in Computer Science and Business Administration (Exp. May 2022)
                        </div>
                    </div>
                </div>




            </div>

        </div>
}

export default WorkContent