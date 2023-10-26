import React from "react";
import Navbar2 from "./Navbar2";
import Card1 from "./card1";
import "./Home.css";
import Card2 from "./cards2";
import Mid from "./mid";
import Footer from "./footer";



function Home() {
  return (
    <div className="scroll">
      <Navbar2 />
      <div className="cards">
        <Card1 />
        <div className="card2">
        <Card2/>
        </div>
        </div>
        <div className="bottom">
      </div>
      <Mid/>
      <Footer/>
    </div>
  );
}

export default Home;
