import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import {projects} from "./projects.js";
import ProjectList from './ProjectList';
import {Grid,Stack} from '@chakra-ui/react'
import Hero from './AppHeader';
import Footer from './AppFooter';
import ProjectTest from './ProjectTest';
import ProjectTest2 from './ProjectTest2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Stack spacing='20'>
        <Hero />   
        {/* Statis projects, working fine */}
        <ProjectList w='100%' projects={projects}/> 
        {/* Dynamic projects, can't pass a component as a prop on the Card item */}
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mx={6}>
          <ProjectTest/>
          <ProjectTest2/>
          <ProjectTest/>
        </Grid>
        <Footer />
      </Stack>
      
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

