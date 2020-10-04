import React from "react"

class SkillsContent extends React.Component{
    render = () =>
        <div>
            <div className="row my-3">

                <div className=" col-sm-5 col-md-4">
                    <div className="list-group list-group-square" id="list-tab" role="tablist">

                        <a className="list-group-item list-group-item-action list-group-item-warning active" id="list-home-list"
                           data-toggle="list" href="#list-home" role="tab" aria-controls="home">Programming Languages</a>

                        <a className="list-group-item list-group-item-action list-group-item-warning" id="list-profile-list" data-toggle="list"
                           href="#list-profile" role="tab" aria-controls="profile">Software</a>

                        <a className="list-group-item list-group-item-action list-group-item-warning" id="list-messages-list" data-toggle="list"
                           href="#list-messages" role="tab" aria-controls="messages">Other Technologies</a>

                    </div>
                </div>

                <div className="col-sm-7 col-md-8">
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active header-color" id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list">
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Java</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Python</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>SQL</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>HTML</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>CSS</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Racket</button>
                        </div>

                        <div className="tab-pane fade header-color" id="list-profile" role="tabpanel"
                             aria-labelledby="list-profile-list">
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Microsoft Office</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>MySQL</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Adobe Indesign</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>iMovie</button>
                        </div>

                        <div className="tab-pane fade header-color" id="list-messages" role="tabpanel"
                             aria-labelledby="list-messages-list">
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>React</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Azure AD</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>ServiceNow</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Proofpoint TAP/TRAP</button>
                            <button type="button" className="btn button_slide my-1 mx-1" disabled>Symantec Altiris</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
}

export default SkillsContent