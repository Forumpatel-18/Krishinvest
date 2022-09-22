import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color:"#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "32.5%",
  transform: "translate(-50%,-50%)"
};

const image2 ="/images/bgImg2.jpeg";


const hero2 = () => {
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
    </Parallax>\
    -250  */}

    <Parallax bgImage={image2} strength={450}>
      <div style={{ height: 450 }}>
        <div style={insideStyles}>
        <h1>WE MODERNISE AGRICULTURE</h1>
        <h2>WE MODERNISE INVESTMENTS</h2>
        </div>
      </div>
    </Parallax>

    <div style={{ height: 25 }} />
    <img src="/images/i2.png" className="img2"/>
    <div style={{ height: 25 }} />

  </div>
    );
  
};

export default hero2;
