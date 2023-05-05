import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      {/* add other components here */}
    </ChakraProvider>
  );
}

export default App;