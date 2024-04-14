import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Icon, Flex, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      name: "Fresh Salmon",
      description: "Wild-caught Alaskan salmon, rich in omega-3 fatty acids.",
      image: "https://images.unsplash.com/photo-1600186321656-eaffd828d536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbG1vbnxlbnwwfHx8fDE3MTMxMDAwNzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Jumbo Shrimp",
      description: "Succulent, sustainably-sourced jumbo shrimp.",
      image: "https://images.unsplash.com/photo-1526497127495-3b388dc87620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqdW1ibyUyMHNocmltcHxlbnwwfHx8fDE3MTMxMDAwNzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Cod Fillets",
      description: "Flaky, mild-flavored cod fillets, perfect for any recipe.",
      image: "https://images.unsplash.com/photo-1664288377740-1bec924cd622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2QlMjBmaWxsZXRzfGVufDB8fHx8MTcxMzEwMDA3MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Gatsby For R130",
      description: "A delicious gatsby sandwich filled with fresh seafood.",
      image: "https://images.unsplash.com/photo-1630921081276-f5f2a5a8bfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYXRzYnklMjBzYW5kd2ljaHxlbnwwfHx8fDE2ODEzMzI1NTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      <Box bg="blue.500" color="white" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to AJs Fishery
          </Heading>
          <Text fontSize="xl">Discover the freshest seafood sourced from sustainable fisheries.</Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={8}>
          Our Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {products.map((product, index) => (
            <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="container.lg" py={8}>
        <Link href="/order">
          <Button colorScheme="blue" size="lg">
            Order Now
          </Button>
        </Link>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            AJs Fishery is committed to providing the highest quality seafood while promoting sustainable fishing practices. We partner with local fishermen to bring you the freshest catch daily.
          </Text>
          <Flex justify="center">
            <Link href="#" mr={4}>
              <Icon as={FaFacebook} boxSize={8} />
            </Link>
            <Link href="#" mr={4}>
              <Icon as={FaTwitter} boxSize={8} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} boxSize={8} />
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
