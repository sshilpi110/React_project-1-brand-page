import { Container, Flex, Heading, MenuButton, MenuItem ,Menu ,Button, MenuList,HStack,Box,Icon} from '@chakra-ui/react'
import {FaUserCircle} from "react-icons/fa"
import React from 'react'

const TopNav = () => {
  return (
    <Box>
    <HStack maxW="88rem" h="16" justifyContent="space-between" px="32px">
      
        <Heading fontWeight="medium" fontSize="28px">Dashboard</Heading>
        <Menu>
          <MenuButton><Icon as={FaUserCircle} fontSize="24px"/></MenuButton>
          <MenuList>
          <MenuItem>LogOut</MenuItem>
          <MenuItem>Support</MenuItem>
          

          </MenuList>
          
        </Menu>
       
    </HStack>
    </Box>
  )
}

export default TopNav
