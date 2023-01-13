import React, {useEffect, useState} from 'react'

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Link from 'next/link';

import { Box, Center, Text, VStack, Flex, Spacer, HStack} from '@chakra-ui/react'


const Chart = () => {

    const [prices, setPrices] = useState([]);
    const [volumes, setVolumes] = useState([]);

    const tokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

    const [projectDetails, setProjectDetails] = useState({
        tokenName: '',
        tokenSymbol: '',
        tokenAddress: '',
        projectDescription: '',
        website: '',
        twitter: '',
        discord: '',
        blockexplorer: '',
        image: '',
        price: '',
       });

    const options = {
        accessibility: {
          enabled: false,
        },
        tooltip: {
          split: false,
          shared: true,
          valuePrefix: "$",
          valueDecimals: 6,
        },
        credits: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
        chart: {
          animation: false,
          spacingBottom: 15,
          spacingTop: 10,
          spacingLeft: 10,
          spacingRight: 20,
          backgroundColor: "transparent",
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
    
        rangeSelector: {
          buttonTheme: {
            // styles for the buttons
            fill: "none",
            stroke: "black",
            "stroke-width": 0,
            r: 8,
            style: {
              color: "black",
              fontWeight: "bold",
            },
            states: {
              hover: {
                fill: "black",
                style: {
                  color: "white",
                },
              },
              disabled: {
                style: {
                  color: "grey",
                },
              },
              select: {
                fill: "black",
                style: {
                  color: "#FFFFFF",
                },
              },
            },
          },
          inputBoxWidth: 120,
          inputBoxHeight: 18,
          inputStyle: {
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          },
          buttons: [
            {
              type: "day",
              count: 1,
              text: "1d",
              title: "View 1 day",
            },
            {
              type: "day",
              count: 7,
              text: "1w",
              title: "View 1 Week",
            },
            {
              type: "month",
              count: 1,
              text: "1m",
              title: "View 1 month",
            },
            {
              type: "month",
              count: 6,
              text: "6m",
              title: "View 6 months",
            },
            {
              type: "year",
              count: 1,
              text: "1y",
              title: "View 1 year",
            },
            {
              type: "all",
              text: "All",
              title: "View all",
            },
          ],
          selected: 5,
          dropdown: "never",
        },
    
        yAxis: [
          {
            gridLineColor: "#454343",
            labels: {
              align: "left",
            },
            height: "100%",
            resize: {
              enabled: true,
            },
          },
          {
            labels: {
              align: "left",
            },
            top: "80%",
            height: "20%",
            offset: 0,
          },
        ],
        series: [
          {
            name: "Price",
            data: prices,
            type: "line",
            color: "blue",
            lineWidth: 4,
          },
          {
            type: "column",
            id: "volume",
            name: "Volume",
            data: volumes,
            color: "gray",
            yAxis: 1,
    
            tooltip: {
              valueDecimals: 0,
            },
          },
        ],
      };

    const getPrices = async () => {
        try {
            const url = new URL(`https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/${tokenAddress}/market_chart/?vs_currency=usd&days=max`);
            const response = await fetch(url);
            const result = await response.json();
          //   console.log(result.total_volumes)
  
            setPrices(result.prices.map((price) => price));
            setVolumes(result.total_volumes.map((volume) => volume));
          //   console.log(prices)
      
        } catch (error) {
            console.log(error);
        }
        }

    const getProjectDetails = async () => {

        try {
            const url = new URL(`https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/${tokenAddress}`);
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)

            setProjectDetails(() => {
                return {
                  tokenName: result.name,
                  tokenSymbol: result.symbol,
                  tokenAddress: result.contract_address,
                  projectDescription: result.description.en,
                  website: result.links.homepage[0],
                  twitter: `https://twitter.com/${result.links.twitter_screen_name}`,
                  discord: result.links.chat_url[0],
                  blockexplorer: result.links.blockchain_site[0],
                  image: result.image.large,
                  price: result.market_data.current_price.usd
                }
               });
        } catch (error) {
            console.log(error)
        }  
          }

        useEffect(() => {
            getPrices();
            getProjectDetails();
            // console.log(projectDetails)
        }, [])




  return (
    <>
    <Box py='20px' px='40px'>
    <Center>
    <VStack mb='10px'> 
    <Text as='b' color='white' fontSize="4xl">Pret Wrapped BNB(wBnb): ${projectDetails.price} USD</Text>
    <HStack><Text color='white' fontSize="xl">Date preluate de pe </Text><Text as={'u'} color='white'><Link href='https://coinmarketcap.com/currencies/wbnb/' target='_blank'>CoinMarketCap</Link></Text></HStack>
    </VStack>
    </Center>
    <Center>

    <Flex flexDirection='row' flex={'auto'} mr='10px' w={['400%', '300%', '250%', '150%', '95%']}>
       <VStack spacing='24px' pl={'10px'} width='100%' height='100%'> 
        <Box w='100%' h='400px'
        bgColor={'white'} borderRadius='xl'
        >
            <HighchartsReact highcharts={Highcharts} options={options} constructorType={"stockChart"} />
        </Box>

          <Spacer />

     <Box w='100%' h='250px' mb='20px'
     bgColor={'white'}
    //  boxShadow='0px 0px 4px 1px #004e92'
     borderRadius='xl'
    color='black' p='30px'
    overflowY={'auto'} 
    sx={{
    '&::-webkit-scrollbar': {
        borderRadius: '5px',
        width: '5px',
        backgroundColor: `grey`,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: `blue`,
        borderRadius: '8px',
    },
    }
    }
     >
          <Text as='b' fontSize={'3xl'}>Descriere</Text>
          <Text>
          {projectDetails.projectDescription}
          </Text><br />
          <Text as='b' fontSize={'3xl'}>Cumpara ChainLink</Text>
          <HStack mt='5px'>

          <Box bgColor={'messenger.500'} color='white' px='3' py='2' borderRadius={'full'}>
            <Text as='b'><Link href='https://pancakeswap.finance/' target={'_blank'}>PancakeSwap</Link></Text>
          </Box>

          <Box bgColor={'messenger.500'} color='white' px='3' py='2' borderRadius={'full'}>
            <Text as='b'><Link href='https://www.binance.com/en' target={'_blank'}>Binance</Link></Text>
          </Box>

          </HStack>
          </Box>
          </VStack>
          </Flex>
</Center></Box>
    </>
  )
}

export default Chart