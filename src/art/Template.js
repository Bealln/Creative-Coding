import React from "react";
import Sketch from "react-p5";
let started = false;






const NAME = (props) => {
  const setup = (p5, canvasParentRef) => {
    if (started) {
        p5.remove();
        return;
      }
      started = true;
      //Canvas here
    };
	

    const draw = (p5) => {
	
    // Sketch code here
    };
return <Sketch setup={setup} draw={draw} />;
}
export default NAME;




