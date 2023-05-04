import React from 'react';
import { Box, Flex, IconButton, useDisclosure, Stack, useColorModeValue, Button, Heading, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navBgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const hoverColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Box bg={navBgColor} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label='Open Menu'
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex align='center'>
          <Heading as='h1' size='md' color={textColor}>
            FindDoctor
          </Heading>
        </Flex>
        <Flex align='center' justify='flex-end'>
          <Stack direction='row' spacing={4} align='center'>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Video Consult
            </Button>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Medicines
            </Button>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Login
            </Button>
            <Button color={textColor} variant='solid' bg='green.400' _hover={{ bg: 'green.500' }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as={'nav'} spacing={4}>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Video Consult
            </Button>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Medicines
            </Button>
            <Button color={textColor} variant='ghost' _hover={{ color: hoverColor }}>
              Login
            </Button>
            <Button color={textColor} variant='solid' bg='green.400' _hover={{ bg: 'green.500' }}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
