import React from "react";
import Todo from "./images/projects/Todo.png";
import sample from "./images/projects/sample.png";
import MemoryGame from "./images/projects/MemoryGame.png";
import puzzleGame  from "./images/projects/puzzleGame.png";
import Portfolio from "./images/projects/Portfolio.png";
import ParcelProject  from "./images/projects/parcelproject.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function SectionFive()
{
   

    return(<section className="section-5 project reveal" id="Projects">
        <h1 className="sub_title">Projects</h1>
        <div className="projects width" data-aos="fade-up">
            <div className="projectDetail">
              <img src={Portfolio} />
              <div className="projectContent">
              <h3>Portfolio</h3>
              <p>A personal portfolio website to showcase my web development projects, skills and my journey.</p>
              <a href="" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div> 

           <div className="projectDetail" >
              <img src={Todo} />
              <div className="projectContent">
                <h3>Taskpad</h3>
                <p>A React-based web page combining a to-do list and notepad for efficient task management and note-taking</p>
                <a href="https://manojkumarm1310.github.io/Todo-Notepad/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div> 

           <div className="projectDetail">
              <img src={MemoryGame} />
              <div className="projectContent">
              <h3>Memory Game</h3>
              <p>A memory game that involves finding the sequence order of colors is a fun and challenging brain-teaser</p>
              <a href="https://manojkumarm1310.github.io/Memory-Game/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div> 

           <div className="projectDetail">
              <img src={puzzleGame} />
              <div className="projectContent">
              <h3>Sliding Puzzle</h3>
              <p>A sliding puzzle game is a classic puzzle game that involves rearranging a set of square tiles within a grid to form a specific pattern</p>
              <a href="https://manojkumarm1310.github.io/Puzzle_Game/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div> 
           {/* <div className="projectDetail">
              <img src={ParcelProject} />
              <div className="projectContent">
              <h3>Smart  Parcel Locker</h3>
              <p>A smart parcel locker is a secure, automated storage system designed for package delivery</p>
              <a href="FinalyearProject.pdf" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div> 

           <div className="projectDetail">
              <img src={sample} />
              <div className="projectContent">
              <h3>PROJECT</h3>
              <p>A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals.</p>
              <a href="" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade  /></a>
              </div>
           </div>  */}
        </div>
    </section>)
}