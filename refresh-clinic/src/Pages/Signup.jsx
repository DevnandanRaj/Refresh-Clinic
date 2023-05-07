import { useState } from "react";
import {
  useToast,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function Signup({ isOpen, onClose }) {
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
        onClose();
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Signup</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value.trim());
              }}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSignup}>
            Signup
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Signup;
