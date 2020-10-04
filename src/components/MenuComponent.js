import React from "react"
import AboutContent from "./AboutContent";
import EducationContent from "./EducationContent";
import WorkContent from "./WorkContent";
import SkillsContent from "./SkillsContent";
import ProjectContent from "./ProjectContent";
import NavMenuComponent from "./NavMenuComponent";

class MenuComponent extends React.Component {
    render = () =>
        <div>

            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <h4 id="about-me" className = "header-color">About Me</h4>
                <AboutContent/>

                <div>
                    <h4 id="work-experience" className = "header-color">Work Experience</h4>
                </div>

                <WorkContent/>

                <h4 id="education" className = "header-color">Education</h4>
                <EducationContent/>

                <h4 id="skills" className = "header-color">Skills</h4>
                <SkillsContent/>

                <h4 id="projects" className = "header-color">Projects</h4>
                <ProjectContent/>
            </div>


        </div>

}

export default MenuComponent