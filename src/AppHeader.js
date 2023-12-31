'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import logo from './media/logo.svg';
import headerImage from './media/night_jungle.png';

const Hero = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Flex 
            w={16}
            h={16}
            align={'center'}
            justify={'center'}>
            <Image src={logo} alt="logo" />
            </Flex>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}>
              Creative coding
            </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Here is a collection of my creative coding projects. This is an exploration of art and code to push my abilities and create something fun and interactive.
            Enjoy the art, explore the code and play!
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            By Beatriz Lopez Neira
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'#8ED3DB'}
              color={'white'}
              _hover={{
                bg: '#64C3CE',
              }}>
              View projects
            </Button>
            <Button 
              rounded={'full'} 
              bg={'#8ED3DB'}
              color={'white'}
              _hover={{
                bg: '#64C3CE',}}>Contact</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={headerImage}
        />
      </Flex>
    </Stack>
  )
}


export default Hero;