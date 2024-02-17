import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Home />
      </ChakraProvider>   
    </div>
  );
}

export default App;
