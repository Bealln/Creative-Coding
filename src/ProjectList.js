import React from "react";
import ProjectCard from './ProjectCard';
import {Grid} from '@chakra-ui/react'

const ProjectList = ({projects}) => {
    return(
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mx={6}>
        

        {
            projects.map((user,i) => {
        return(
        <ProjectCard w='100%' 
        key={i} 
        id={projects[i].id} 
        name={projects[i].name} 
        description={projects[i].description} 
        thumbnail={projects[i].thumbnail}
        art = {projects[i].art}
        />
        );
    })
        }   
        </Grid>
        

    );
}

export default ProjectList;


