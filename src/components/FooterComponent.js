import React from "react"

class FooterComponent extends React.Component{
    render = () =>
        <footer className = "footer" id="footer-contact">
            <div className = "footer-content">
                    <div className = "col-12">

                        <div className = "row hide-when-small">
                            <h6 className = "mx-2 mt-1">Have a question or Just want to chat? Let's Connect!</h6>
                        </div>

                        <a href="https://www.linkedin.com/in/sethia21/" target="_blank"
                           className="btn button_slide slide_right mt-2 ml-0 mr-2 text-right">
                            <i className="fa fa-linkedin"/></a>

                        <a href="https://www.instagram.com/h.sethia99/" target="_blank"
                           className="btn button_slide slide_right mt-2 mr-2">
                            <i className="fa fa-instagram"/>
                        </a>

                        <a href="mailto:sethia.h@northeastern.edu" target="_blank"
                           className="btn button_slide slide_right mt-2 mr-2">
                            <i className="fa fa-envelope"/>
                        </a>

                    </div>

            </div>

            <div className = "footer-bottom">
                &copy; Harsh Sethia
            </div>

        </footer>
}

export default FooterComponent