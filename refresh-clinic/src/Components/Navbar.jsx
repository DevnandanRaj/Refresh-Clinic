import React, { useContext } from "react";
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import RefreshLogo from "../Resources/RefreshLogo.png";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";
function Navbar() {
  const navBgColor = useColorModeValue("teal", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverColor = useColorModeValue("gray.500", "gray.300");
  const { isAuth,logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <Box bg={navBgColor} px={4}>
      <Flex h={24} alignItems="center" justifyContent="center">
        <Link to="/">
        <Flex align="center">
          <Image src={RefreshLogo} alt="Logo" boxSize="90px" mr={4} />
          </Flex>
          </Link>
        <Flex align="center" justify="flex-end">
          <Stack direction="row" spacing={4} align="center">
            <Link to="/finddoctors"><Button
              color={textColor}
              variant="ghost"
              _hover={{ color: hoverColor }}
            >
              FindDoctor
            </Button></Link>
          <Link to="/finddoctors"><Button
              color={textColor}
              variant="ghost"
              _hover={{ color: hoverColor }}
            >
              Book an Appointment
            </Button></Link>
             <Link to="/medicines">
            <Button
              color={textColor}
              variant="ghost"
              _hover={{ color: hoverColor }}
            >
              Medicines
            </Button></Link>
          <Link to="/booktest">  <Button
              color={textColor}
              variant="ghost"
              _hover={{ color: hoverColor }}
            >
              Book Tests
            </Button></Link>
            <Button
              color={textColor}
              variant="ghost"
              _hover={{ color: hoverColor }}
            >
              Surgeries
            </Button>
            {isAuth ? (
              <Button
                color={textColor}
                variant="solid"
                bg="red.400"
                _hover={{ bg: "red.500" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
                <>
                  <Link to='/login'>
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                >
                  Login
                    </Button>
                    </Link>
                  <Link to='/signup'>
                <Button
                  color={textColor}
                  variant="solid"
                  bg="green.400"
                  _hover={{ bg: "green.500" }}
                  disabled={isAuth}
                >
                  Sign Up
                    </Button>
                    </Link>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
