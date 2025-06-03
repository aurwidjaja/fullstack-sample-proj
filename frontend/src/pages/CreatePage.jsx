import { Heading, useColorModeValue, VStack, Container, Box, Input, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/useProductStore';

const CreatePage = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const createProduct = useProductStore((state) => state.createProduct);

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      });
    } else {
      toast({
        title: "Success",
        description: "Product created successfully",
        status: "success",
        isClosable: true
      });
    }
    setNewProduct({name: "", price: "", image: ""});
  };

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Create New Product
        </Heading>

        <Box 
          w="full" 
          bg={useColorModeValue("white", "gray.800")}
          p={8} 
          rounded="lg" 
          shadow="md"
        >
          <VStack spacing={6}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              size="lg"
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              size="lg"
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              size="lg"
            />
            <Button 
              colorScheme="blue" 
              w="full" 
              size="lg"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;