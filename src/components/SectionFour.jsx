import React from "react";
import { Skills } from "./Skills";
export default function SectionFour()
{
    window.addEventListener("scroll",reveal3);
    function reveal3()
    {
        var Containerreveals=document.querySelectorAll(".container");
        for(var i=0;i<Containerreveals.length;i++)
        {
           let windowheight=window.innerHeight;
           let revealtop=Containerreveals[i].getBoundingClientRect().top;
           let revealpoint=10;
  
           if(revealtop < windowheight - revealpoint)
           {
              Containerreveals[i].classList.add("active");
           }
           else{
              Containerreveals[i].classList.remove("active");
           }
        }

        let revealsBars=document.querySelectorAll(".bar");
        for(var i=0;i<revealsBars.length;i++)
        {
        let windowheight=window.innerHeight;
        let revealtop=revealsBars[i].getBoundingClientRect().top;
        let revealpoint=10;

        if(revealtop < windowheight - revealpoint)
        {
           revealsBars[i].classList.add("active");
        }
        else{
           revealsBars[i].classList.remove("active");
        }
      }

         var TechBarreveals=document.querySelectorAll(".TechBar");
        var skillsIconreveals=document.querySelectorAll(".skills_icon");
        var heading1reveals=document.querySelector(".heading1");
        for(var i=0;i<TechBarreveals.length;i++)
        {
           let windowheight=window.innerHeight;
           let revealtop=heading1reveals.getBoundingClientRect().top;
           let revealpoint=150;
        // console.log(revealtop +" __ "+( windowheight-revealpoint));
           if(revealtop < windowheight - revealpoint)
           {
              TechBarreveals[i].classList.add("progress-line");
           }
           else{
              TechBarreveals[i].classList.remove("progress-line");
           }
        }
      }
    return(
        <section className="section-4 reveal" id="Skill">
            <div className="Skills "><h1 className="sub_title">Skills</h1></div>
                <div className="section_skill width" >
                    <div className="container">
                        <h1 className="heading1" style={{color:"rgba(222, 18, 18, 0.929)"}}>What I know</h1>
                        <div className="Technical-bars">
                {Skills.map((skill)=>{
                    return <div className="bar">
                                <img className="skills_icon" src={skill.image} alt="HTML_icon" />
                                <div className="info">
                                 <span>{skill.Tech}</span>
                                </div>
                                <div className={skill.css+" TechBar"}>
                                     <span></span>
                               </div>
                            </div>})}  

                        </div>
                    </div>
                </div>
        </section>

    );
}