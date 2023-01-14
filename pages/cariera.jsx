import { Box, Center, Image, VStack, Text, HStack,
 } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import pozaProfil from '../images/pozaProfil.jpeg'
import fbIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import linkedIcon from '../images/linkedin.png'
import gitIcon from '../images/github.png'
import AccCariera from '@/components/AccCariera'

const cariera = () => {
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
    <Text as='b' fontSize={'4xl'}>💻 Loc de munca actual</Text>
    <Text fontSize={'xl'} align='center'>
    In momentul de fata nu am un rol bine stabilit in firma mea. Fiind la inceput si avand un deficit de resurse umane, taskurile mele sunt urmatoarele:
    organizare, dezvoltarea de produse noi, managementul echipei de developeri, audite de securitate. Pe langa acestea, particip frecvent la hackathons si 
    bug-bounties.
    </Text>
    </VStack>
    </Center>
    </Box>

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}>🔮 Proiecte interesante</Text>
    <Text fontSize={'xl'} align='center'>
    Ultimele doua proiecte realizate cu succes:
    </Text>
    <AccCariera />
    </VStack>
    </Center>
    </Box>

    </VStack>
    
    </Center>
    </>
  )
}

export default cariera