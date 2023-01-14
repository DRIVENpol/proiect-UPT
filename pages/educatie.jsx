import React from 'react'

import { Box, Center, Image, VStack, Text, HStack, Card, CardHeader, CardBody, AspectRatio, Heading, Stack, StackDivider } from '@chakra-ui/react'
import Link from 'next/link'

import pozaProfil from '../images/pozaProfil.jpeg'
import fbIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import linkedIcon from '../images/linkedin.png'
import gitIcon from '../images/github.png'

const educatie = () => {
  return (
    <>
   <Center>
    <VStack width={'100%'} m='20' gap='10'>
    <Box mb='10'><VStack>
        <Image
        borderRadius='full'
        boxSize='150px'
        src={pozaProfil.src}
        alt='Dan Abramov'
        />
    <Text as='b' color='white'>Paul Socarde | Varsta: 24</Text>
    <Text as='b' color='white'>📍Timisoara, Romania</Text>

    <HStack>
    <Link href='https://www.facebook.com/socardepaul1/' target="_blank"><Image src={fbIcon.src} height='24px' width={'24px'} /></Link>
    <Link href='https://twitter.com/polthedev' target="_blank"><Image src={twitterIcon.src} height='24px' width={'24px'} /></Link>
    <Link href='https://www.linkedin.com/in/socardepaul/' target="_blank"><Image src={linkedIcon.src} height='24px' width={'24px'} /></Link>
    <Link href='https://github.com/DRIVENpol' target="_blank"><Image src={gitIcon.src} height='24px' width={'24px'} /></Link>

    </HStack>
    </VStack>
    </Box>

    <Box>
    <Card >
  <CardHeader>
    <Heading size='md'>Educatie si formare</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          <Text fontSize='3xl'>Liceu</Text>
        </Heading>
        <Text pt='2' fontSize='xl'>
          Liceul Teoretic Grigore Mosil - Timisoara (Matematica Intensiv)
        </Text><br />
        <AspectRatio ratio={2/1} maxW='100%' maxH='200px'>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22270.7226665597!2d21.20804796957231!3d45.75434681273253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d9b928c2e05%3A0xaff2c8c80760425f!2sLiceul%20Teoretic%20Grigore%20Moisil%20-%20corp%20gimnaziu!5e0!3m2!1sro!2sro!4v1673660124762!5m2!1sro!2sro'
  />
</AspectRatio>
      </Box>
      <Box>
      <Heading size='xs' textTransform='uppercase'>
          <Text fontSize='3xl'>Faculte</Text>
        </Heading>
        <Text pt='2' fontSize='xl'>
          Universitatea Politechnica Timisoara - ETC ID/FR
        </Text><br />
        <AspectRatio ratio={2/1} maxW='100%' maxH='200px'>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1695.3124273218634!2d21.225268569009966!3d45.74848174880509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d8303f55439%3A0xbe8d0248f81cb2a9!2sFacultatea%20de%20Electronic%C4%83%2C%20Telecomunica%C8%9Bii%20%C8%99i%20Tehnologii%20Informa%C8%9Bionale!5e0!3m2!1sro!2sro!4v1673660234142!5m2!1sro!2sro'
  />
</AspectRatio>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </Box>
    </VStack>
    </Center>
    </>
  )
}

export default educatie