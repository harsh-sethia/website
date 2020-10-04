import React from "react"
import my_logo from "../images/my-logo.png"
import my_logo_two from "../images/my-logo-two.png"
import toggler from "../images/toggler.png"

class NavMenuComponent extends React.Component{
    render = () =>
        <div className = "sticky-top">
            <nav id = "navbar-example2" className="navbar navbar-expand-lg navbar-light bg-color mb-3 p-0">
                <a className="navbar-brand" href="#">

                    <figure className="swap-on-hover mr-4">
                        <img className="swap-on-hover__front-image" src={my_logo}  height="40px" width="40px"/>
                        <img className="swap-on-hover__back-image" src={my_logo_two}  height="40px" width="40px"/>
                    </figure>
                </a>

                <button className="navbar-toggler ffbf00" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <img src={toggler}  height="40px" width="40px"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link header-color" href="#about-me">About Me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link header-color" href="#work-experience">Work Experience</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle header-color" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Education
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#education">General</a>
                                <a className="dropdown-item" href="#">Courses & Certificates</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link header-color" href="#skills">Skills</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link header-color" href="#projects">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link header-color" href="#footer-contact">Contact Me</a>
                        </li>

                    </ul>
                </div>
            </nav>


        </div>

}

export default NavMenuComponent