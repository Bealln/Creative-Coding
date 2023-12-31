import React from "react";
import Sketch from "react-p5";
let started = false;
let x = 50;
let y = 50;


const Day5 = (props) => {
  const setup = (p5, canvasParentRef) => {
    if (started) {
      p5.remove();
      return;
    }
    started = true;
    p5.createCanvas(500, 500).parent(canvasParentRef);
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    
  };
  
  

  

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};


export default Day5;