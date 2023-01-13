import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import Link from 'next/link'
const Footer = () => {
  return (
   <>
   <Center>
   <Box bgColor={'black'} width='100%' textAlign={'center'} py='5'>
    <Text as='b' color='white'>Follow me on </Text><Text as='b' color='#1DA1F2'><Link href='https://twitter.com/polthedev' target={'_blank'}>Twitter</Link></Text>
   </Box>
   </Center>
   </>
  )
}

export default Footer