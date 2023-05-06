import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      {/* add other components here */}
      hi
      <Footer/>
    </ChakraProvider>
  );
}

export default App;