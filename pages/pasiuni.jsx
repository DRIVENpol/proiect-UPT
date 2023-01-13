import { Box, Center, Image, VStack, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import pozaProfil from '../images/pozaProfil.jpeg'
import fbIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import linkedIcon from '../images/linkedin.png'
import gitIcon from '../images/github.png'

const pasiuni = () => {
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

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}>🎾 Tennisul de camp</Text>
    <Text fontSize={'xl'} align='center'>
        De la varsta de 7 ani am practicat tennisul de camp, incepandu-mi cariera de jucator profesionist
        la varsta de 10 ani. De atunci, pana la varsta de 17 ani am ajuns in top 20 jucatori de tenis din Romania 
        cu multiple titluri la turnee nationale si internationale (in cadrul Tennis Europe).
    </Text>
    <Text fontSize={'xl'} align='center'>
        Din pacate, la 17 ani a trebuit sa renunt deoarece nu puteam sa tin pasul cu sportivii care 
        erau la un liceu/facultate de profil si se antrenau de doua ori pe zi.
    </Text>
    </VStack>
    </Center>
    </Box>

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}>🔮 Marketing Online</Text>
    <Text fontSize={'xl'} align='center'>
        De la varsta de 7 ani am practicat tennisul de camp, incepandu-mi cariera de jucator profesionist
        la varsta de 10 ani. De atunci, pana la varsta de 17 ani am ajuns in top 20 jucatori de tenis din Romania 
        cu multiple titluri la turnee nationale si internationale (in cadrul Tennis Europe).
    </Text>
    <Text fontSize={'xl'} align='center'>
        Din pacate, la 17 ani a trebuit sa renunt deoarece nu puteam sa tin pasul cu sportivii care 
        erau la un liceu/facultate de profil si se antrenau de doua ori pe zi.
    </Text>
    </VStack>
    </Center>
    </Box>

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}>💻 Blockchanin & Web3</Text>
    <Text fontSize={'2xl'} as='u'>Educatie & Formare</Text>
    <Text fontSize={'xl'} align='center'>
        De la varsta de 7 ani am practicat tennisul de camp, incepandu-mi cariera de jucator profesionist
        la varsta de 10 ani. De atunci, pana la varsta de 17 ani am ajuns in top 20 jucatori de tenis din Romania 
        cu multiple titluri la turnee nationale si internationale (in cadrul Tennis Europe).
    </Text>
    <Text fontSize={'xl'} align='center'>
        Din pacate, la 17 ani a trebuit sa renunt deoarece nu puteam sa tin pasul cu sportivii care 
        erau la un liceu/facultate de profil si se antrenau de doua ori pe zi.
    </Text>
    <br/>
    <Text fontSize={'2xl'} as='u'>Istoric</Text>
    <Text fontSize={'xl'} align='center'>
        Din pacate, la 17 ani a trebuit sa renunt deoarece nu puteam sa tin pasul cu sportivii care 
        erau la un liceu/facultate de profil si se antrenau de doua ori pe zi.
    </Text>
    </VStack>
    </Center>
    </Box>

    </VStack>
    
    </Center>
    </>
  )
}

export default pasiuni