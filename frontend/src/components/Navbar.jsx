import React from 'react';
import { Container, Flex, Text, HStack, Button, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { CiSquarePlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import useProductStore from '../store/useProductStore';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.100", "gray.900");
    const products = useProductStore((state) => state.products);

    return <Container maxW={"1140px"} px={4} bg={bgColor}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store</Link>
            </Text>

            <HStack spacing={4} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus fontSize={20} />
                    </Button>
                </Link>
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
                    onClick={toggleColorMode}
                    variant="ghost"
                />
            </HStack>
        </Flex>
    </Container>;
};

export default Navbar;