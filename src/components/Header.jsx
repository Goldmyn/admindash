import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { nav_icon, notif_icon, search_icon } from '../utils/svgs';
import NavLink from './links/NavLink';
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";

/* An array for the Nav Links */

const navLinks = ['Overview', 'Payments', 'Cards', 'Accounts', 'Admin'];
const userImg = 'https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

function Header() {

    const { colorMode, toggleColorMode } = useColorMode(); 
    const isDark = colorMode === "dark";

    const  [active, setActive] = useState('Overview')

  return (
    <div className='items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3'>
        {/* logo */}
        <div className='border-b border-grey-900 w-[25%] flex md:space-x-2 md:pb-6 pb-2  items-center justify-center md:justify-start' >
            <img 
                className='md:w-12 md:h-12 w-10 h-10'
                src='https://cdn-icons-png.flaticon.com/512/2830/2830284.png'
                alt='logo'

            />
            <h1 className='self-center hidden lg:inline md:font-bold md:text-xl text-md'>
                P2pBank
            </h1>
        </div>

        {/* NavLinks */}

        <div className='border-b pb-5  border-grey-900 w-[140%]   items-center justify-center flex space-x-2'>
            {navLinks.map((link) => (
                <div onClick={()=>setActive(link)} className='relative   items-center justify-center flex'>
                    <NavLink title={link} key={link} />
                    <div className={ ` ${link === active ? 'items-center  justify-center flex absolute -bottom-3' : 'hidden'}`}>
                        {nav_icon}
                    </div>
                </div>
            ))}
        </div>
        
        { /* Login */}

        <div className='border-b border-grey-900 pb-6 pt-4 hidden md:flex items-end justify-end px-3 space-x-6 w-[60%]'>
            <div>{search_icon}</div>
            <div>{notif_icon}</div>
            <img src={userImg} alt='user-Image' className='w-8 h-8 rounded-full object-center object-cover' />
            <div>
            <ChakraProvider>
                <VStack>
                <Flex w="100%">
                <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
                isRound="true" onClick={toggleColorMode} style={{color:'black', backgroundColor:'gray'}}></IconButton>
                </Flex>
                </VStack>
            </ChakraProvider>
            </div>
        </div>
    </div>
  );
}

export default Header