'use client'

import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import logo from './media/logo.svg';


const Logo = (props: any) => {
    return (
     <Image src={logo} alt="logo" />
    )
  }




export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Stack
        mt = {10}
        marginLeft={10}
        mb={10}
        spacing={8}
        align='stretch' >
        <Flex 
            w={16}
            h={16}
            align={'center'}
            justify={'center'}>
            <Image src={logo} alt="logo" />
        </Flex>
        <Text>® 2023 Code and art by Beatriz Lopez Neira </Text>
      </Stack>
    </Box>
  )
}

