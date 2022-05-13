import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect  } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./footer";


const App = () => {
    return (
    <>
        <Navbar />
        
        <Switch>
            <Route   exact path="/" ><Home/> </Route>
            <Route   exact path="/about"  ><About/> </Route>
            <Route   exact path="/services" ><Services/> </Route>
            <Route   exact path="/contact" ><Contact/> </Route>
            <Redirect to="/" />
        </Switch>
        <Footer />
    </>
    );
};

export default App;