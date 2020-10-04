import React from "react"
import khoury from "../images/Khoury.jpeg"
import cfn from "../images/CFN.jpeg"
import shpl from "../images/SHPL.png"

class WorkContent extends React.Component {
    render = () =>
        <div>

            <div className="accordion mt-4 mb-4 " id="accordionExample">

                <div className="card">
                    <div className="card-header" id="tutor_neu">
                        <h6 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workOne" aria-expanded="true" aria-controls="workOne">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src={khoury}  height="50px" width="50px"/> &nbsp;
                                            <h5 className = "mb-0 pt-2 pl-2 card-title-color">Khoury College of Computer Sciences, Boston</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3 card-title-color hide-when-small">
                                        <h5 className = "mb-0 pt-3 pl-2">January - June 2020</h5>
                                    </div>

                                </div>

                            </button>
                            <div className = "hide-when-small">
                                <h6 className =  "ml-5 mt-n4 pl-4">Computer Science Teaching Assistant</h6>
                            </div>
                        </h6>
                    </div>

                    <div id="workOne" className="collapse show" aria-labelledby="workOne"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <div className = "show-when-small">
                                <p> <b>Role: </b>Computer Science Teaching Assistant</p>
                                <p> <b>Timeframe: </b>January 2020 - June 2020</p>
                            </div>

                            <ul>
                                <b>Job Responsibilities:</b>
                                <li>
                                    Host office hours for students and provide them an opportunity to get help on
                                    upcoming homework and bridge the gap between unclear concepts.
                                </li>
                                <li>
                                    Attend Lab hours to help students revise concepts taught during the week and get
                                    some practice on the concepts.
                                </li>
                                <li>
                                    Grade homework, lab quizzes, and exams and report any scope of improvement for future tasks.
                                </li>
                            </ul>

                            <ul>
                                <b>Key Takeaways:</b>
                                <li>
                                    Gained a good exposure of interacting with people, understanding their thought
                                    process while development and helping them with solutions.
                                </li>
                                <li>
                                    Developed a better understanding of the content previously learned.
                                </li>
                                <li>
                                    Learned that sometimes the best to overcome failure is to understand how you can
                                    improve and not be afraid to keep trying until you meet a goal.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="coop_cfn">
                        <h6 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workTwo" aria-expanded="true" aria-controls="workTwo">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src={cfn}  height="50px" width="50px"/> &nbsp;
                                            <h5 className = "mb-0 pt-2 pl-2 card-title-color">Commonwealth Financial Network, Waltham</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3 hide-when-small">
                                        <h5 className = "mb-0 pt-3 pl-2 card-title-color">June - December 2019</h5>
                                    </div>

                                </div>

                            </button>
                            <div className = "hide-when-small">
                                <h6 className =  "ml-5 mt-n4 pl-4">Information Security Co-op</h6>
                            </div>

                        </h6>
                    </div>

                    <div id="workTwo" className="collapse" aria-labelledby="workTwo"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <div className = "show-when-small">
                                <p> <b>Role: </b>Information Security Co-op</p>
                                <p> <b>Timeframe: </b>June 2019 - December 2019</p>
                            </div>

                            <ul>
                                <b>Job Responsibilities:</b>
                                <li>
                                    Responded to information security-related questions and requests from internal and external users.
                                </li>

                                <li>
                                    Communicated with other teams to process any further requests. For example,
                                    Credit Monitoring, Access rights to a website or software, and Encryption for client devices.
                                </li>

                                <li>
                                    Monitored and remediated incidents and daily activity in security systems such as
                                    Proofpoint TAP/TRAP and Microsoft Azure Security Portal.
                                </li>

                                <li>
                                    Researched and Documented industry best practices relative to vulnerability remediation
                                    and workflow for future employees.
                                </li>
                                <li>
                                    Created alerts used to inform our users of security issues.
                                </li>
                                <li>
                                    Documented privacy incidents, events, and policies and procedures.
                                </li>

                                <li>
                                    Conducted testing on Intune MAM and helped employees with difficulties set it up.
                                </li>

                                <li>
                                    Trained new employees with daily workflows before finishing the co-op.
                                </li>
                            </ul>

                            <ul>
                                <b>Key Takeaways:</b>
                                <li>
                                    Achieved a great insight into common security issues within a firm and how to remediate them.
                                </li>
                                <li>
                                    A better understanding of things that I may want from a future job.
                                </li>
                                <li>
                                    As an introverted person, communication was not a strength, however,
                                    the job pushed me to communicate in a better manner on the phone and email as well.
                                </li>
                                <li>
                                    It trained me to adapt to changing situations quickly and
                                    keep calm in a tricky situation.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="intern_shpl">
                        <h6 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#workThree" aria-expanded="true" aria-controls="workThree">

                                <div className = "row">
                                    <div className = "col-sm-12 col-md-9">
                                        <div className = "row">
                                            <img src={shpl}  height="50px" width="50px"/> &nbsp;
                                            <h5 className = "mb-0 pt-2 pl-2 card-title-color">Sethia Handicrafts Private Limited, Jodhpur</h5>
                                        </div>
                                    </div>
                                    <div className = "col-sm-12 col-md-3 hide-when-small">
                                        <h5 className = "mb-0 pt-3 pl-2 card-title-color">May - July 2017</h5>
                                    </div>
                                </div>

                            </button>
                            <div className = "hide-when-small">
                                <h6 className =  "ml-5 mt-n4 pl-4">Summer Internship</h6>
                            </div>
                        </h6>
                    </div>

                    <div id="workThree" className="collapse" aria-labelledby="workThree"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <div className = "show-when-small">
                                <p> <b>Role: </b>Summer Internship</p>
                                <p> <b>Timeframe: </b>May 2017 to July 2017</p>
                            </div>

                            <ul>
                                <b>Job Responsibilities:</b>
                                <li>
                                    Understanding how the company functions in various areas daily
                                </li>
                                <li>
                                    Analyzing the scope of improvement for potential software
                                </li>
                                <li>
                                    Building an Inventory tracking system
                                </li>
                            </ul>

                            <ul>
                                <b>Software Details:</b>
                                <li>
                                    Frontend: Visual Basic
                                </li>
                                <li>
                                    Backend: MS Access
                                </li>
                                <li>
                                    Simple SQL Queries to perform actions from frontend to backend
                                </li>
                                <li>
                                    Supports basic CRUD operations for products
                                </li>
                                <li>
                                    Helps in generating reports such as Purchase Order, Damages, and
                                    Inventory Details between specified dates.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>

        </div>
}

export default WorkContent