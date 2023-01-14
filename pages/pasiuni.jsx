import { Box, Center, Image, VStack, Text, HStack, Button } from '@chakra-ui/react'
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
    Dupa ce am terminat cu tennisul, am hotarat ca vreau sa fac ceva unde rezultatele sunt direct proportionale cu munca depusa.
    Cum aveam putine cunostinte in marketingul online (dupa un curs de Udemy) am hotarat sa aplic pentru un internship la o agentie
    destul de mare din Bucuresti care avea contracte cu GlobalRecords si KissFm. Dupa un an am renuntat si mi-am deschis propria agentie
    in Timisoara, deorece tot ce faceam acolo era sa postez pe Instagram si sa raspund la comentarii (nu strategii de marketing, paid ads samd).
    </Text>

    <Text fontSize={'xl'} align='center'>
    In 5 ani de marketing am reusit sa strang un portofoliu de peste 120 de clienti (mici & medii) din Romania si din afara.
    </Text>

    </VStack>
    </Center>
    </Box>

    <Box borderRadius='xl' bgColor={'white'} w='100%' h={'100%'} p='10'>
    <Center>
    <VStack>
    <Text as='b' fontSize={'4xl'}><Link href='/cariera'>💻 Blockchanin & Web3</Link></Text>
    <Text fontSize={'2xl'} as='u'>Istoric</Text>
    <Text fontSize={'xl'} align='center'>
        Proiectul meu de blockchain a inceput dintr-o joaca, in timp ce faceam marketing si am hotarat sa imi creez propria mea moneda
        virtuala - un smart contract de tip ERC20. Vazand ca incepe sa prinda din ce in ce mai bine la public ideea mea, am renuntat la marketing si
        am hotarat ca vreau sa incerc si drumul asta, avand un background in programare inca din liceu (C++, PHP, MySQL, Python);
    </Text>
    <Text fontSize={'xl'} align='center'>
        In momentul de fata, proiectul meu pe blockchain are peste 5,000 de investitori (persoane care au cumparat si detin moneda), peste 20 clienti 
        pentru care am facut consultanta, audite de securitate sau implementare, o companie deschisa legal in Montana, USA si o echipa de 9 persoane:
        3 developeri full time (cu tot cu mine), un developer freelancer, un UI/UX designer, o persoana pentru vanzari, o persoana pentru operatii si client management,
        o persoana pentru marketing si un advisor care s-a imbogatit cand a fost Dotcom Bubble.
    </Text>
    <br/>
    <Text fontSize={'2xl'} as='u'>Educatie & Formare</Text>
    <Text fontSize={'xl'} align='center'>
        Tot ce am invatat a fost pe cont propriu, din documentatii (Ethereum Yellowpaper, Whitepaper), cursuri de Solididy, Hackathons & Bug Bounties. In viitor (dupa ce termin cu licenta),
        planuiesc sa fac si un master pe blockchain.
    </Text>
     <Button colorScheme='messenger'><Link href='/cariera'>Mergi la cariera</Link></Button>
    </VStack>
    </Center>
    </Box>

    </VStack>
    
    </Center>
    </>
  )
}

export default pasiuni
