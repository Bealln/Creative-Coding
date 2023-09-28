import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import Card from './Card';
import Day5 from './art/Day5';
import Concreto from './art/Concreto';
import ProjectCard from './ProjectCard';
import { Grid, GridItem } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mx={6}>
          <ProjectCard w='100%' />
          <ProjectCard w='100%' />
          <ProjectCard w='100%' />
       </Grid>
      <Day5/>
      <Concreto />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
