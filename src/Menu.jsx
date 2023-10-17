import React from "react";

function Menu()
{
    return (
         <header className="menu">
            <div className="menu-left">
                <div className="homePage-tag">
                    <h3><a href="#Home">MK</a></h3>
                </div>
            </div>
            <div className="menu-right">
                <nav className="menu-content">
                    <a href="#Home">Home</a>
                    <a href="#About"> About</a>
                    <a href="#Skill">Skill</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </div>
        </header>)
}

export default Menu;