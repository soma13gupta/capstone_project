import './HeroSection.css';
import herosSection from "../images/heroSection.jpg";
import './HeroSection.css';
import React from "react";

export default  function HeroSection() {
    return <>
        <div className="hero-section">
            <div className="hero-section-content">
                <article>
                    <h1> Little Lemon</h1>
                    <h2> Chicago</h2>
                    <h3> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>

                    <button className="table-reserve"  onClick={() => alert("Table reserved")}>Reserve a Table</button>
                </article>
                    <img className="icon" src={herosSection}  alt={"menu"}/>
            </div>
        </div>
    </>
}