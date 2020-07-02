
import React from 'react';
import "../css/style.css";
export default function Skills() {
    
        return (
           <>
                <div className="skills d-flex align-items-center text-center">
                    <span class="border-bottom-0">
                               
                     <div className="skill-container d-inline-flex d-inline-block">
                                ||
                                <img className="icon" src={require("../Assets/Images/html.png")} alt="html"/> 
                                || 
                                <img className="icon" src={require("../Assets/Images/csslogo.png")} alt="css"/>
                                 || 
                                <img className="icon" src={require("../Assets/Images/jslogo.png")} alt="javascript"/>
                                ||
                                <img className="icon" src={require("../Assets/Images/jquery-icon.png")} alt="jquery"/> 
                                ||
                                <img className="icon" src={require("../Assets/Images/mysql.png")} alt="mySQL"/> 
                                ||
                                <img className="icon" src={require("../Assets/Images/mongo1.png")} alt="mongodb"/> 
                                ||

                            </div>
                            </span>
             </div>
                
           </>
        )
    }
