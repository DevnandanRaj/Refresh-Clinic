import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
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
import { AuthContext } from "../Context/AuthContextProvider";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RefreshLogo from "../Resources/RefreshLogo.png";

function Login() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { login, isAuth } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://refresh-clinic-server.onrender.com/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Username, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        login();
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Failed",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

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
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Link to="/signup">
                  <Button variant="link" colorScheme="blue">
                    Sign Up
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
            <Stack spacing="6">
              <Stack spacing="5">
                <form onSubmit={handleLogin}>
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                      id="username"
                      type="text"
                      value={Username}
                      onChange={(event) => setUsername(event.target.value)}
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
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button
                      type="submit"
                      variant="link"
                      colorScheme="blue"
                      size="sm"
                      isLoading={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Log in"}
                    </Button>
                  </HStack>
                </form>
              </Stack>
              <HStack>
                <Divider />
                <Divider />
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
