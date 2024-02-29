import React, { useState } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";
function SectionOne()
{
    const [text]=useTypewriter({
        words:["FULL STACK WEB DEVELOPER","MERN STACK DEVELOPER","CODER"],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
    })
    
    return (
        <section className="section-1" id="profile">
        <div>
            <div>
                <div className="main-frame width">
                    <div>
                        <div className="info-me" >
                            <h1 className="Hello">Hello,</h1>
                            <h1 className="name">I'm <span> MANOJKUMAR M</span></h1>
                            <h2 className="name">and I'm <span className="role">{text}</span><span><Cursor cursorStyle="|" cursorColor="red"/></span></h2>
                            <h3 className="quote">As a passionate web developer, I'm eager to bring my fresh perspective and creativity to the digital realm, crafting visually stunning and user-friendly websites that leave a lasting impact.</h3>
                            <div className="anchor_About">
                                 <a className="button-35" href="Resume_MANOJKUMAR M.pdf" target="_blank" > Resume </a>
                                 <div className="social-links">
                                 <div className="my-social">
                <a href="http://www.linkedin.com/in/manojkumarm1310" target="_blank">
                  <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="linkedin" />
                </a>
              </div>

              <div className="my-social">
                <a href="https://github.com/manojkumarm1310" target="_blank">
                  <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="github" />
                </a>
              </div>
                                 </div>        
                            </div>
                        </div>
                    </div>
                    <div className="profile_adj">
                        <div className="infophoto-me"></div>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}

export default SectionOne;