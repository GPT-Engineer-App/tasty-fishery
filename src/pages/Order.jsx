import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Order = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Order Now
        </Heading>
        <Text fontSize="xl">Start your order by selecting your favorite seafood items.</Text>
      </Container>
    </Box>
  );
};

export default Order;
