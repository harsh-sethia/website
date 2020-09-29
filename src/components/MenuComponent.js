import React from "react"
import AboutContent from "./AboutContent";
import EducationContent from "./EducationContent";
import WorkContent from "./WorkContent";
import SkillsContent from "./SkillsContent";
import ProjectContent from "./ProjectContent";

class MenuComponent extends React.Component {
    render = () =>
        <div>


            <nav className="navbar navbar-expand-lg sticky-top bg-custom-blue mb-3 pl-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">About Me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#work-experience">Work Experience</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Education
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#education">General</a>
                                <a className="dropdown-item" href="#">Courses & Certificates</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>

            </nav>

            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <h4 id="about-me">About Me</h4>
                <AboutContent/>

                <div>
                    <h4 id="work-experience">Work Experience</h4>
                </div>

                <WorkContent/>

                <h4 id="education">Education</h4>
                <EducationContent/>

                <h4 id="skills">Skills</h4>
                <SkillsContent/>

                <h4 id="projects">Projects</h4>
                <ProjectContent/>
            </div>

        </div>
}

export default MenuComponent