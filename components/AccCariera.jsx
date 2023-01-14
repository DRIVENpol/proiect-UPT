import React from 'react'
import { Box, Center, Image, VStack, Text, HStack, Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from '@chakra-ui/react'
    import Link from 'next/link'

const AccCariera = () => {
  return (
   <>
   <Accordion width={'100%'}>
  <AccordionItem width={'100%'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' width={'10px'}>
         <Text as='b'>Rev3al</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text as='b'>Descriere</Text>
        <Text>Rev3al este un proiect blockchain care are ca scop protejareaq asseturilor digitale de tip NFT. Acestia pun la dispozitie un API care va manipula
        metadata unui NFT astfel incat acesta nu poate fi replicat.</Text><br />
        <Text as='b'>Ce am realizat pentru ei?</Text>
        <Text>Un ERC20 smart contract cu un mecanism de staking virtual integrat. Practic, utilizatorii pot pune monede la stake fara a le trimite
            unui contract de tip MasterChef - monedele puse la stake sunt vizibile in portofel dar nu pot fi transferate.
            De altfel s-a realizat si o interfata web care sa comunice cu smart contractul ERC20 si cu un alt smart contract pentru vesting.
        </Text><br />
        <Button colorScheme='messenger'><Link href='https://medium.com/@psocarde/rev3al-migration-behind-the-scenes-part-1-6f09e7a0ce02' target='_blank'>Citeste mai mult</Link></Button>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text as='b'>Metarix</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Metarix este o solutie blockchain de tip L2(Layer 2) care a fost construita pe baza technologiei ZK RollUps. Aceasta doreste sa se focuseze
        mai mult pe partea de gaming a blockchainului si sa ajute dezvoltatorii oferind diverse SDK-uri.</Text><br />
        <Text as='b'>Ce am realizat pentru ei?</Text>
        <Text>Un smart contract pentru staking, farming, NFT market place si DEX (Decentralized Exchange) pentru care ulterior se va construi si interfete web aferente.
        </Text><br />
        <Button colorScheme='messenger'><Link href='https://metarix.network/' target='_blank'>Vezi Website</Link></Button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
   </>
  )
}

export default AccCariera