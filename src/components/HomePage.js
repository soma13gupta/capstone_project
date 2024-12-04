
import React from "react";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
import PageFooter from "./PageFooter";

export default  function HomePage() {
    return <>
        <div className="home-page">
            <HeroSection/>
            <Highlights/>
            <Testimonials/>
            <AboutSection/>
        </div>
    </>
}