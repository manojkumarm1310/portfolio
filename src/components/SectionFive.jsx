import React from "react";
import {Projects} from "./Projects";
import { FiExternalLink } from "react-icons/fi";
export default function SectionFive()
{
    return(<section className="section-5 project reveal" id="Projects">
        <h1 className="sub_title" style={{marginBottom:"20px"}}>Projects</h1>
         <h1 className="sub_title" style={{color:"rgba(222, 18, 18, 0.929)"}}>See my works</h1>
         <div className="projects width" data-aos="fade-up">
         <div className="projects-container">
          {Projects.map((val)=>(
            <div key={val.title} className="projects-box">
                <img src={val.src} alt="projectImg" />
                    <div className="projects-content">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                        <div className="demo-links">
                            <a href={val.href1} target='_blank'>Github</a>
                            <a href={val.href2} target='_blank'>Live Demo <FiExternalLink /></a>
                        </div>
                    </div>
            </div>))}
         </div>
         </div>
    </section>)
}