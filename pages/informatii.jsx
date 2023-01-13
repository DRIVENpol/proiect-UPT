import { Box, Center, Image, VStack, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import pozaProfil from '../images/pozaProfil.jpeg'
import fbIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'
import linkedIcon from '../images/linkedin.png'
import gitIcon from '../images/github.png'

const informatii = () => {
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
    <Text as='b' fontSize={'4xl'}>Informatii Personale</Text>
    <Text fontSize={'xl'}>- Nascut in Timisoara, Romania;</Text>
    <Text fontSize={'xl'}>- Fost jucator de tennis de camp</Text>
    <Text fontSize={'xl'}>- Pasionat de blockchain & Web3</Text>
    <Text fontSize={'xl'}>- Lucrez activ in domeniul Web3: consultanta & securitate in cadrul afacerii mele <Text as='u'><Link href='https://www.drivenecosystem.com/' target='_blank'>DRIVENlabs Inc.</Link></Text></Text>
    </VStack>
    </Center>
    </Box>

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}>Playlist Preferat</Text>
    <iframe width="1060" height="515" src="https://www.youtube.com/embed/N0m-Oto0BIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </VStack>
    </Center>
    </Box>

    </VStack>
    
    </Center>
    </>
  )
}

export default informatii