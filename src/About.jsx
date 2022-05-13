import React from "react";
// import { NavLink } from "react-router-dom";
 //import web from "../src/images/red-roses.jpg";
import Common from "./Common";


const About = () => {
    return (
        <>
        < Common 
        name='Welcome To About Page' 
        imgsrc="https://internetdevels.com/sites/default/files/public/blog_preview/hire_e-commerce_developers.jpg" 
        visit='/contact'
        btname="Contact Now" />
        </>
    );
};

export default About;
