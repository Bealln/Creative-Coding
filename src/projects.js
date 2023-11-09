//images
import Project from "./media/Project1.png"
import night from "./media/night_jungle.png"

//art

import CirclularMoire from './art/CircularMoire.js';
import NightJungle from "./art/NightJungle";
import MoireDisco from "./art/MoireDisco";
import Concreto from './art/Concreto.js';
import Day5 from "./art/Day5";

export const projects = [
    {id: 1,
        name : "Concreto", 
        description: "This is a copy of artwork X",
        thumbnail: Project,
        codelink: 'www.google.com',
        Art: NightJungle,
    },

    {id: 2,
        name : "Concreto2", 
        description: "Circles and more circles",
        thumbnail: night ,
        codeLink: "www.google.com",
        Art: MoireDisco,
    },

    {id: 3,
        name : "blahblahe", 
        description: "this and that",
        thumbnail: night,
        codeLink: "https://www.google.com/",
        Art: CirclularMoire,
    },

    

]