import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import CirclularMoire from "./art/CircularMoire";

const ProjectTest = ({id, name, description, thumbnail, art}) => {
    return(
        <Card maxW='100%'>
        <CardBody>
            <CirclularMoire  h='400px' w='100%'/>
          <Stack mt='6' spacing='3'>
            <Heading size='md'> 
              {name}
            </Heading>
            <Text>
              {description}
            </Text>
          </Stack>
        </CardBody>
        <Divider color='gray.300' />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button 
              rounded={'full'} 
              bg={'#8ED3DB'}
              color={'white'}
              _hover={{
                bg: '#64C3CE',}}>
              See code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      

    );
}

export default ProjectTest;


