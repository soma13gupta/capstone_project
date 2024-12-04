import React from "react";
import "../styles/AboutSection.css";
import heroSection from "../images/heroSection.jpg";

export default  function AboutSection() {
    return <>
        <div className="about-section">
            <div className="about-section-content">
                <article>
                    <h1> Little Lemon</h1>
                    <h2> Chicago</h2>
                    <h3> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                </article>
                <img className="icon" src={heroSection}  alt={"menu"}/>
            </div>
        </div>
    </>
}