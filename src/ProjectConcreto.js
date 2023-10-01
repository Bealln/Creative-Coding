import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import concreto from './media/concreto.png';
import Concreto from './art/Concreto.js';

const ProjectConcreto = () => {
    return(
        <Card maxW='100%'>
        <CardBody>
          <Image
              w='100%'
              src= {concreto}
              alt='preview'
              borderRadius='lg'
            />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Turn around</Heading>
            <Text>
              This project is a study of circles and circles
            </Text>
          </Stack>
        </CardBody>
        <Divider color='gray.300' />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              See code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      

    );
}

export default ProjectConcreto;


