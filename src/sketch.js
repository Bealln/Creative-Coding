

import React from "react";


class Drawing extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {

     p.setup = () => {
        createCanvas(windowWidth, windowHeight);
	    background(100);
	    background(45,43,100);
        
     }

     p.draw = () => {
        for(var x =10; x<windowWidth;){
			for(var y =10; y<windowHeight;){
				ellipse(x, y, 20, 20);
				y = y+20;
			}
		x = x+ 20;
	    }
     }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}


