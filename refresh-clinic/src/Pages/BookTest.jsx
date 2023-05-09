import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function BookTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [test, setTest] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <>
      <Navbar />
      <Box p={4} bg={bgColor}>
        <Box maxW="md" mx="auto" mb={6}>
          <Text as="h1" fontSize="3xl" textAlign="center">
            Book Lab Test
          </Text>
        </Box>
        <Box maxW="md" mx="auto">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </FormControl>
              <FormControl id="test" isRequired>
                <FormLabel>Test</FormLabel>
                <Input
                  type="text"
                  value={test}
                  onChange={(event) => setTest(event.target.value)}
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Additional Message</FormLabel>
                <Textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" isLoading={submitting}>
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default BookTest;
