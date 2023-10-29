import React from "react";
import Sketch from "react-p5";
let started = false;

var theta = 0.0;
var ellipseWidthMultiplier = 10;
var ellipseHeightMultiplier = 20;
var rotationSpeed = 0.005;


const CirclularMoire = (props) => {
  const setup = (p5, canvasParentRef) => {
    if (started) {
        p5.remove();
        return;
      }
      started = true;
      p5.createCanvas(500, 500).parent(canvasParentRef);
      p5.background(45,43,100);
    };
	
   
    
    //Printing the artists name, title of work and date for credit
	//print('Concreto,Alfredo Volpi, December 1950');
	// Reference: https://artsandculture.google.com/asset/concreto/XQGNUoKY-Ec7HA

  const draw = (p5) => {
    //stationary ellipse
    p5.push();
    p5.translate(p5.width/2, p5.height/2);
    for(var i =0; i < 20; i++){
        p5.strokeWeight(1);
        p5.noFill();
        p5.stroke(255);
      p5.ellipse(0, 0,
      i*ellipseWidthMultiplier,
      i*ellipseHeightMultiplier);
    }
    p5.pop();
  
    //rotating ellipse
    p5.push();
    p5.translate(p5.width/2, p5.height/2);
    p5.rotate(theta);
    for(var i =0; i < 20; i++){
        p5.noFill();
        p5.strokeWeight(1);
        p5.ellipse(0, 0,
      i*ellipseWidthMultiplier,
      i*ellipseHeightMultiplier);
    }
    p5.pop();

    theta += rotationSpeed;
    };


  return <Sketch setup={setup} draw={draw} />;
};


export default CirclularMoire;




