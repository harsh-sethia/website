import React from "react"

class SkillsContent extends React.Component{
    render = () =>
        <div>
            <div className="row my-3">

                <div className=" col-sm-5 col-md-4">
                    <div className="list-group" id="list-tab" role="tablist">

                        <a className="list-group-item list-group-item-action active" id="list-home-list"
                           data-toggle="list" href="#list-home" role="tab" aria-controls="home">Programming Languages</a>

                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                           href="#list-profile" role="tab" aria-controls="profile">Software</a>

                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                           href="#list-messages" role="tab" aria-controls="messages">Other Technologies</a>

                    </div>
                </div>

                <div className="col-sm-7 col-md-8">
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list"> Java | Python | SQL | HTML | CSS | Racket
                        </div>

                        <div className="tab-pane fade" id="list-profile" role="tabpanel"
                             aria-labelledby="list-profile-list">Microsoft Office | MySQL | Adobe InDesign | iMovie
                        </div>

                        <div className="tab-pane fade" id="list-messages" role="tabpanel"
                             aria-labelledby="list-messages-list">React | AzureAD | ServiceNow | Proofpoint TAP/TRAP | Symantec Altiris
                        </div>

                    </div>
                </div>

            </div>
        </div>
}

export default SkillsContent