import React from 'react';
import Navbar from './Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
  
       <ChakraProvider>
      <Navbar />
      <h1>Welcome to My App</h1>
      <p>This is my app's home page.</p>
        </ChakraProvider>
  
  );
}

export default App;
