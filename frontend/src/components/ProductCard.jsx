import React from 'react'
import { Box, Heading, IconButton, useColorModeValue, useToast, Image, Text, HStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import useProductStore from '../store/useProductStore';

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const {removeProduct} = useProductStore();
    const toast = useToast();

    const handleDeleteProduct = async (pid) => {
        try {
            const response = await fetch(`/api/products/${pid}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            
            if (!response.ok) {
                toast({
                    title: "Error",
                    description: data.message || "Failed to delete product",
                    status: "error",
                    isClosable: true,
                });
                return;
            }
            
            removeProduct(pid);
            toast({
                title: "Success",
                description: "Product deleted successfully",
                status: "success",
                isClosable: true
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete product",
                status: "error",
                isClosable: true,
            });
        }
    };
    
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{transform: "translateY(-5px)", shadow: "xl"}}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit='cover'/>
            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize="xl" color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton 
                        aria-label="Edit product" 
                        icon={<EditIcon/>} 
                        colorScheme='blue'
                    />
                    <IconButton 
                        aria-label="Delete product" 
                        icon={<DeleteIcon/>} 
                        onClick={() => handleDeleteProduct(product._id)} 
                        colorScheme='red'
                    />
                </HStack>
            </Box>
        </Box>
    );
};

export default ProductCard;