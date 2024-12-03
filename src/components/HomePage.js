
import React from "react";
import PageHeader from "./PageHeader";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
import FooterNavigation from "./FooterNavigation";

export default  function HomePage() {
    return <>
        <div className="home-page">
            <PageHeader/>
            <HeroSection/>
            <Highlights/>
            <Testimonials/>
            <AboutSection/>
            <FooterNavigation/>
        </div>
    </>
}