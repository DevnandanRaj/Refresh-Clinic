import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  return (
    <ChakraProvider>
      {/* add other components here */}
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
