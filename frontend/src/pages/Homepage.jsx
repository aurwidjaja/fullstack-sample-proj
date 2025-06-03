import { Container, Heading, Text, VStack, SimpleGrid, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import useProductStore from '../store/useProductStore';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    // Fetch products from your API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        useProductStore.getState().setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text 
          fontSize={'30'}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"} 
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>
        {products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text fontSize={'xl'} fontWeight={"bold"} color='gray.500'>
            No products found.{' '}
            <Link to="/create">
              <Text as='span' color='blue.500' _hover={{textDecoration: "underline"}}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Homepage;