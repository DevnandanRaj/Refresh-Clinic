import { useContext, useState } from "react";
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
import { AuthContext } from "../Context/AuthContextProvider";

function Login({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const toast = useToast();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users?username=${username}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.length > 0) {
        login();
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3000,
            isClosable: true,
        });
        onClose();
      } else {
        toast({
          title: "Login Failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
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
          <Button colorScheme="blue" mr={3} onClick={handleLogin}>
            Login
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Login;
