import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RefreshLogo from "../Resources/RefreshLogo.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toast = useToast();
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 201) {
        toast({
          title: "Signup Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Flex align="center" justify="center" mx="auto">
              <Image src={RefreshLogo} alt="Logo" boxSize="120px" mr={4} />
            </Flex>

            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Create an account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Already have an account?</Text>
                <Link to="/login">
                  <Button variant="link" colorScheme="blue">
                    Log in
                  </Button>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <form onSubmit={handleSignup}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                      id="username"
                      type="name"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FormControl>
                </Stack>
                {error && (
                  <Text color="red.500" textAlign="center">
                    {error}
                  </Text>
                )}
                <Button type="submit" colorScheme="blue">
                  Sign up
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default Signup;
