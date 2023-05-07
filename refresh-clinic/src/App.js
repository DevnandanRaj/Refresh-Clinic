import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import AllRoutes from "./Routes/AllRoutes"
function App() {
  return (
    <ChakraProvider>
 
      {/* add other components here */}
      <Home />
      <AllRoutes/>
    </ChakraProvider>
  );
}

export default App;