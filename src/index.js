import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import ProjectCard from './ProjectCard';
import ProjectDay5 from './ProjectConcreto';
import { Grid} from '@chakra-ui/react'
import SplitScreen from './App_header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <SplitScreen /> 
      <br />{'  '}
      <br />{'  '}
      <br />{'  '}
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mx={6}>
          <ProjectCard w='100%' />
          <ProjectCard w='100%' />
          <ProjectDay5 w='100%' />
       </Grid>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
