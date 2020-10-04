import React from "react"

class ProjectContent extends React.Component{
    render = () =>
        <div className = "row mb-3">

            <div className = "col-sm-12 col-md-4 my-2">
                <div className="card h-100 ">
                    <div className="card-body">
                        <h5 className="card-title">Personal Website</h5>
                        <p className="card-text">Developed a personal website to host an extended version of my resume with detailed description on jobs,
                            education and projects. Built using <b>React, HTML and CSS</b>. Hosted on Github Pages.</p>
                        <a href="#" className="btn button_slide slide_right">Learn More</a>
                    </div>
                </div>
            </div>

            <div className = "col-sm-12 col-md-4 my-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">Itinerary Planner</h5>
                        <p className="card-text">Developed an Itinerary planner that allows travelers to collaborate and plan a trip.
                            The application was developed with the use of <b>React</b>  on the frontend and <b>SQL</b>  on the backend.</p>
                        <a href="#" className="btn button_slide slide_right">Learn More</a>
                    </div>
                </div>
            </div>

            <div className = "col-sm-12 col-md-4 my-2">
                <div className="card h-100 ">
                    <div className="card-body">
                        <h5 className="card-title">Club Event Calendar</h5>
                        <p className="card-text">Created a solution for the centralized location of club event activities occurring in Northeastern.
                            Used Netbeans’ GUI builder along with <b>Java</b> for the frontend and <b>SQL</b>  as the backend.</p>
                        <a href="#" className="btn button_slide slide_right">Learn More</a>
                    </div>
                </div>
            </div>






        </div>
}

export default ProjectContent