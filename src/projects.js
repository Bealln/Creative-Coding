//images
import Project from "./media/Project1.png"
import night from "./media/night_jungle.png"

//art
import Concreto from './art/Concreto.js';
import CirclularMoire from './art/CircularMoire.js';

export const projects = [
    {id: 1,
    name : "Concreto", 
    description: "This is a copy of artwork X",
    thumbnail: Project,
    code: "",
    art: {Concreto},
    },

    {id: 2,
    name : "Concreto2", 
    description: "Circles and more circles",
    thumbnail: night ,
    code: "",
    art: {Concreto},
    },

    {id: 3,
        name : "Anotherone", 
        description: "this and that",
        thumbnail: night ,
        code: "",
        art: {Concreto},
    },

    {id: 4,
        name : "blahblahe", 
        description: "this and that",
        thumbnail: night,
        code: "",
        art: {CirclularMoire},
    },
    

]