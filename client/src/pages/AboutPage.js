import React from "react";
import AboutHeader from "../components/AboutHeader/AboutHeader";
import AboutContent from "../components/AboutContent/AboutContent";
import AboutContentBottom from "../components/AboutContentBottom/AboutContentBottom";
import AboutTeam from "../components/AboutTeam/AboutTeam";

function AboutPage(){
    return(
        <div>
            <AboutHeader />
            <AboutContent />
            <AboutTeam />
            <AboutContentBottom />
        </div>
    )
}

export default AboutPage;