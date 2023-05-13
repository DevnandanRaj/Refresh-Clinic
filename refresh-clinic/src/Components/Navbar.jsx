import React, { useContext } from "react";
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Button,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import RefreshLogo from "../Resources/RefreshLogo.png";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";

function Navbar() {
  const navBgColor = useColorModeValue("teal", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverColor = useColorModeValue("gray.500", "gray.300");
  const { isAuth, logout } = useContext(AuthContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
  };

  

  return (
    <Box bg={navBgColor} px={4}>
      <Flex h={24} alignItems="center" justifyContent="space-between">
        <Flex align="center">
          <Image src={RefreshLogo} alt="Logo" boxSize="90px" mr={4} />
 <IconButton
  aria-label="Open Menu"
  size="lg"
  mr={2}
  icon={<HamburgerIcon boxSize={12} />}
  display={{ md: "none" }}
  onClick={onOpen}
  bg="transparent"
  _focus={{ outline: "none" }}
  position="absolute"
  right={0}
/>
        </Flex>

        <Flex
          align="center"
          justify="flex-end"
          display={{ base: "none", md: "flex" }}
        >
          <Stack direction="row" spacing={4} align="center">
            <Link to="/">
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
              >
                Home
              </Button>
            </Link>
            <Link to="/finddoctors">
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
              >
                FindDoctor
              </Button>
            </Link>
            <Link to="/finddoctors">
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
              >
                Book an Appointment
              </Button>
            </Link>
            <Link to="/medicines">
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
              >
                Medicines
              </Button>
            </Link>
            <Link to="/booktest">
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
              >
                Book Tests
              </Button>
            </Link>
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
                <Link to="/login">
                  <Button
                    color={textColor}
                    variant="ghost"
                    _hover={{ color: hoverColor }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
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
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={6} />
          <DrawerHeader borderBottomWidth="1px">
            <Image src={RefreshLogo} alt="Logo" boxSize="90px" mr={4} />
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link to="/">
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                  w="100%"
                  py={8}
                >
                  Home
                </Button>
              </Link>
              <Link to="/finddoctors">
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                  w="100%"
                  py={8}
                >
                  Find Doctor
                </Button>
              </Link>
              <Link to="/finddoctors">
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                  w="100%"
                  py={8}
                >
                  Book an Appointment
                </Button>
              </Link>
              <Link to="/medicines">
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                  w="100%"
                  py={8}
                >
                  Medicines
                </Button>
              </Link>
              <Link to="/booktest">
                <Button
                  color={textColor}
                  variant="ghost"
                  _hover={{ color: hoverColor }}
                  w="100%"
                  py={8}
                >
                  Book Tests
                </Button>
              </Link>
              <Button
                color={textColor}
                variant="ghost"
                _hover={{ color: hoverColor }}
                w="100%"
                py={8}
              >
                Surgeries
              </Button>
              {isAuth ? (
                <Button
                  color={textColor}
                  variant="solid"
                  bg="red.400"
                  _hover={{ bg: "red.500" }}
                  w="100%"
                  py={8}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      color={textColor}
                      variant="ghost"
                      _hover={{ color: hoverColor }}
                      w="100%"
                      py={8}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      color={textColor}
                      variant="solid"
                      bg="green.400"
                      _hover={{ bg: "green.500" }}
                      w="100%"
                      py={8}
                      disabled={isAuth}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
