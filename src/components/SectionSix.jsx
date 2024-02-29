import React from 'react'
import "../CSS/footer.css"
import { TbArrowBigUpFilled } from "react-icons/tb"
import { useState } from 'react'

const Footer = () => {
    const ThisYear = new Date().getFullYear()

    const [visible,setVisible] = useState(false)

    const toggleVisible=()=>{
      const value = document.documentElement.scrollTop;

      if(value >405){
        setVisible(true)
      }
      else{
        setVisible(false)
      }
    }

    const scrollTop = ()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      }) 
    }

   window.addEventListener("scroll",toggleVisible)

  return (
    <div className="footer" id="Contact">
      <h1>Manojkumar</h1>

      <div className="footer-links">
        <a href="#About">About</a>
        <a href="#Skill">Skills</a>
        <a href="#Projects">Projects</a>
      </div>


      <div className="footer-social-links">
              <div className="my-social">
                <a href="http://www.linkedin.com/in/manojkumarm1310" target="_blank">
                  <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="linkedin" />
                </a>
              </div>

              <div className="my-social">
                <a href="https://github.com/manojkumarm1310" target="_blank">
                  <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="github"  />
                </a>
              </div>


      </div>
        <p>&copy; {ThisYear} Manojkumar.All rights reserved.</p>
        
        <button className='scrollUp' 
                id='scrollUp' 
                style={visible ? {display:'block'} : {display:"none"}}
                onClick={scrollTop}
                >
          <TbArrowBigUpFilled className='arrowUp'/>
        </button>
    </div>
  )
}

export default Footer
