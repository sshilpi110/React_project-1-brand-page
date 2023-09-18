 

import React from 'react'
import {RxDashboard} from "react-icons/rx"
import {BsArrowDownUp} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import { Box,HStack,Stack,Text,Icon, Heading} from "@chakra-ui/react"

const Sidenav = () => {

  const navLinks=[
    {
      icon:RxDashboard,
      text:"Dashboard",
      link:"/"
    },

    {
      icon:BsArrowDownUp,
      text:"Transactions",
      link:"/transactions"
    },
  ]
  return (
    <Stack  justifyContent="space-between" boxShadow="lg" w="16rem" h="100vh" >
      <box>
      <Heading textAlign="center"  fontSize="20px" as="h1" pt="3.5rem">@DOSOMECODING</Heading>
      <Box mt="6" mx="3">
      {navLinks.map((nav)=>(
        <HStack 
        borderRadius="10px"
         key={nav.text} 
         py="3"
          px="4"
        _hover={{
          bg:"F3F3F7",
          color:"#171717",
        }}
        color="#797E82"
        >
          <Icon  as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
        </HStack>
      ))}
      </Box>
      </box>
     

     <Box mt="6" mx="3" mb="6">
     <HStack 
        borderRadius="10px"
        py="3"
          px="4"
        _hover={{
          bg:"F3F3F7",
          color:"#171717",
        }}
        color="#797E82"
        >
          <Icon  as={BiSupport}/>
          <Text fontSize="14px" fontWeight="medium" >Support</Text>
        </HStack>
     </Box>
      
    </Stack>
  )
};

export default Sidenav;
