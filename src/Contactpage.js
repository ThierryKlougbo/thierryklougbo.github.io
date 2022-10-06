
import React from 'react';
import "./Contactpage.css";
import {FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/fa";

export default function contactPage(){
    return(
        <div className={"contactPage"}>

            <div id={'container'}>
                <p className={"title"}>
                    Let Us Create Something <br/>
                    Greate Thogether
                </p>

                <div id={'contactForm'}>
                    <form>
                        <div className="form-row nameAndEmail">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Name</label>
                                <input type={"text"} className={"form-control"} id={"inputName"} placeholder={"Name"} required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                            </div>
                        </div>

                        <div className="form-row nameAndEmail">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPhone">Phone</label>
                                <input type="text" className="form-control" id="inputPhone" required/>
                            </div>
                            {/*<div className="form-group col-md-4">
                                <label htmlFor="inputPrice">Price Range</label>
                                <select id="inputPrice" className="form-control" required>
                                    <option selected>Choose...</option>
                                    <option>Range 1</option>
                                    <option>Range 2</option>
                                    <option>Range 3</option>
                                </select>
                            </div>*/}
                        </div>

                        <div className="form-row nameAndEmail projectdiv">
                            <div className="form-group col-md-6" style={{width: "100%"}}>
                                <label htmlFor="inputProject">The Project</label>
                                <textarea cols="50" rows="10" className="form-control" id="inputProject" placeholder={"A Short Description Of what you'd like us to work on."} required/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Contact me</button>
                    </form>
                </div>

                <div className={"socials"}>
                    <p className={"orparagraf"}>
                        <h1>Or</h1>
                        +32 48 78 22 98 | thierryklougbo@gmail.com
                    </p>

                    <div className={"socialIcons"}>
                        <a href="https://www.linkedin.com/in/thierry-klougbo-880b071b1/" target={"_blank"}><FaLinkedinIn className={"icon"}/></a>
                        <a href="https://www.instagram.com/thigorro/" target="_blank"><FaInstagram className={"icon"}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100008328725064" target={"_blank"}><FaFacebookF className={"icon"}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}