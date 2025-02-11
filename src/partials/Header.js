
import "./Header.css";
import logoimg from '../images/portfolio logo.png';
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {FaHome, FaRaspberryPi, FaUserAlt } from "react-icons/fa";
import {MdContactPage, MdOutlinePriceCheck} from "react-icons/md"


export default function Header(){
    const [state, setState] = useState(0);
    return(
        <div className="headdiv">
            <nav className="navibar">
                {/*<figure className="navlogo">
                    <img className="navlogoimage" src={logoimg} alt="Conpanny logo"/>
                </figure>*/}
                {/*<h1 className="pageTitle" style={{color: "white"}}>Portfolio</h1>*/}


                <div className={"nameNavItem"}>
                    <FaUserAlt id={"nameNavIcon"} /><div id={"nameNavText"}>Thierry Klougbo</div>
                </div>
              
                <ul className="linkbar">
    
                    <li className={"navitem"} id={"homeNavItem"}>
                        <Link className={"navlink"} id={"homeLink"} to="/"> <FaHome style={{marginRight: '10px', marginBottom: '5'}}/> Home</Link>
                    </li>
                    <li className={"navitem"} id={"projectsNavItem"}>
                        <Link className={"navlink"} id={"projectsLink"} to="/projects"> <FaRaspberryPi style={{marginRight: '10px', marginBottom: '5'}}/> Projects</Link>
                    </li>
                    {/*<li className={"navitem"}>*/}
                    {/*    <Link className={"navlink"} to={"/pricing"}><MdOutlinePriceCheck style={{marginRight: '10px', marginBottom: '5'}}/>Pricing</Link>*/}
                    {/*</li>*/}
                    {/* <li className={"navitem"}>
                        <Link className={"navlink"} to="/contactMe"><MdContactPage style={{marginRight: '10px', marginBottom: '5'}}/>Contact Me</Link>
                    </li> */}
                    {/*<li className={"navitem"}>
                        <Link className={"navLink"} to="/register">Register</Link>
                    </li>
                    <li className={"navitem"}>
                        <Link className={"navLink"} to="/login">Login</Link>
                    </li>*/}
                </ul>
            </nav>

        </div>
    )
}
