import React from "react"

class AboutContent extends React.Component {
    render = () =>
        <div>
            <div className="card mb-3 ">
                <div className="row no-gutters">
                    <div className=" col-sm-12 col-md-3">
                        <img src="./my-photo.jpg" className="card-img" height = "300px"></img>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="card-body">
                            <h5 className="card-title card-title-color">Hi! I am Harsh.</h5>
                            <p className="card-text">The about me information would go over here. This is just a sample to see how the content would look over here. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }

    export default AboutContent