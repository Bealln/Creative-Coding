import React from 'react';
import ReactDOM from 'react-dom/client';
// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import {projects} from "./projects.js";
import ProjectList from './ProjectList';
import {Grid,Stack} from '@chakra-ui/react'
import Hero from './AppHeader';
import Footer from './AppFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Stack spacing='20'>
        <Hero />   
        <ProjectList w='100%' projects={projects}/> 
        <Footer />
      </Stack>
      
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

