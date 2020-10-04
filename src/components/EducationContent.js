import React from "react"
import neu from "../images/NEULogo.png"
import sis from "../images/sis.png"

class EducationContent extends React.Component {
    render = () =>
        <div>

            <div className="accordion mt-4 mb-4" id="accordionExample">

                <div className="card">
                    <div className="card-header" id="education_neu">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src={neu}  height="50px" width="50px"/> &nbsp;
                                            <h5 className = "mb-0 pt-3 pl-2 card-title-color">Northeastern University, Boston</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2 card-title-color">August 2017 - May 2022</h5>
                                    </div>

                                </div>

                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <ul>
                                <li>
                                    Currently in my senior year pursuing a <b>Bachelor’s degree in Computer Science and
                                    Business Administration </b> with a concentration in Entrepreneurship.
                                    Expected Completion: May 2022
                                </li>

                                <li>
                                    <b>3.21 CGPA and Part of Dean’s List for Spring 2020 Semester.</b>
                                </li>

                                <li>
                                    Activities on campus involve being part of clubs (FirstByte and NUTV),
                                    a goalkeeper for the co-rec soccer team, and completion of CPR Certification.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="education_sis">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src={sis}  height="50px" width="50px"/> &nbsp;
                                            <h5 className = "mb-0 pt-3 pl-2 card-title-color">Singapore International School, Mumbai</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3">
                                        <h5 className = "mb-0 pt-3 pl-2 card-title-color">August 2009 - May 2017</h5>
                                    </div>

                                </div>

                            </button>
                        </h2>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <ul>
                                <li>
                                    <b>
                                        Completed International Baccalaureate (IB) program
                                    </b>
                                </li>

                                <li>
                                    <b>
                                        Completed International General Certificate of Secondary
                                        Education (IGCSE) with distinction
                                    </b>
                                </li>

                                <li>
                                    Part of School Band for a year
                                </li>
                                <li>
                                    Part of the School Marching band for 3 years –
                                    <b> highest by any SIS Student at the time.</b>
                                </li>
                                <li>
                                    Drumkit player with level 3 TCL Certification
                                </li>
                                <li>
                                    Level 3 TCL Dramatics Certification
                                </li>
                                <li>
                                    C-Level Canadian Red Cross license (Expired in May 2019)
                                </li>
                                <li>
                                    Volunteer for various in-school and out of school events.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>

        </div>
}

export default EducationContent