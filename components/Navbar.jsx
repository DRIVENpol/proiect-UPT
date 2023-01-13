//Create a navbar component
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

import { Box, Flex, Spacer, 
    Center,
    HStack,
    Text
} from '@chakra-ui/react'

const Navbar = () => {

    const router = useRouter();

    console.log(router.pathname)
    return (
       <>
      <Center>
        <Box
        bgColor={'whiteAlpha.200'}
        w={['95%', '95%', '95%', '70%', '70%']}
        p={3}
        px='10'
        mt='10'
        color='white'
        borderRadius='full'
         >                
            <Flex flexDirection='row' flex={{ base: 1, md: 'auto' }}>
            <HStack>
                <Box fontSize={['xl', 'lg', 'xl', '2xl', '2xl', '2xl']}>
                <Link href='/'><b>Socarde</b> Paul</Link>
                </Box>

                </HStack>
                <Spacer />
                <HStack>
                {router.pathname === "/informatii" ? (
                   <Text as='b' color='#00bbff'><Link href='informatii'>&gt; Informatii</Link></Text>
                ) : (
                    <Text _hover={{color: "#00bbff"}}><Link href='informatii'>Informatii</Link></Text>
                )}
                <Text>|</Text>
                {router.pathname === "/pasiuni" ? (
                   <Text as='b' color='#00bbff' _hover={{color: "#00bbff"}}><Link href='pasiuni'>&gt; Pasiuni</Link></Text>
                ) : (
                    <Text _hover={{color: "#00bbff"}}><Link href='pasiuni'>Pasiuni</Link></Text>
                )}
                <Text>|</Text>
                {router.pathname === "/cariera" ? (
                   <Text as='b' color='#00bbff' _hover={{color: "#00bbff"}}><Link href='cariera'>&gt; Cariera</Link></Text>
                ) : (
                    <Text _hover={{color: "#00bbff"}}><Link href='cariera'>Cariera</Link></Text>
                )}
                <Text>|</Text>
                {router.pathname === "/educatie" ? (
                   <Text as='b' color='#00bbff' _hover={{color: "#00bbff"}}><Link href='educatie'>&gt; Educatie & Formare</Link></Text>
                ) : (
                    <Text _hover={{color: "#00bbff"}}><Link href='educatie'>Educatie & Formare</Link></Text>
                )}
                </HStack>
            </Flex>      

        </Box>
        </Center>
       </>
    );
    }

export default Navbar;