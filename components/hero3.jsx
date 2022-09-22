import React from "react";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background:"#fff",
  opacity:"0.5",
  borderradius:"100%",
  padding: "1 10 50 80",
  color:"#0a2652",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%,-50%)"
};

const image3 ="/images/bgImg7.jpg";


const hero3 = () => {
    return(
 <div>
    {/* 
    Normal parallax
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax> */}

    {/* 
    Dynamic blur parallax
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax> */}
    <Parallax bgImage={image3} strength={700}  blur={{ min: -10, max: 5 }}>
      <div style={{ height: 450 }} className="hero3-div">
        <div style={insideStyles} className="hero3-div">
        <h1>Questions? </h1>
        <h2>We’re Here to Help!</h2>
        
        <a href="https://api.whatsapp.com/send/?phone=918652521225&text&app_absent=0">
        <button type="button" class="btn btn-outline-dark">
        Chat with us
        </button>
        </a>
        
        <a href="/faq">
        <button type="button" class="btn btn-outline-dark hero3-btn">FAQ</button>
        </a>
        </div>
        
      </div>
    </Parallax>

    <div style={{ height: 100 }} />

  </div>
    );
  
};

export default hero3;
