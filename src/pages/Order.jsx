import React from "react";
import { Box, Heading, Text, Image, Container, SimpleGrid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Order = () => {
  const menuItems = [
    {
      name: "Fish and Chips",
      description: "Crispy battered fish served with golden fries and tartar sauce.",
      price: 12.99,
      image: "https://example.com/images/fish-and-chips.jpg",
    },
    {
      name: "Shrimp Scampi",
      description: "Succulent shrimp sautéed in garlic butter, served over pasta.",
      price: 15.99,
      image: "https://example.com/images/shrimp-scampi.jpg",
    },
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection, served with vegetables.",
      price: 18.99,
      image: "https://example.com/images/grilled-salmon.jpg",
    },
  ];

  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Order Now
        </Heading>
        <Text fontSize="xl" mb={8}>
          Select your favorite seafood items and place your order.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
          {menuItems.map((item, index) => (
            <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={item.image} alt={item.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {item.name}
                </Heading>
                <Text mb={2}>{item.description}</Text>
                <Text fontWeight="bold">${item.price.toFixed(2)}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Link to="/">
          <Button colorScheme="blue">Back to Home</Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Order;
