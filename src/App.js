
import './App.css';
import { Box, ChakraProvider, extendTheme, SimpleGrid } from '@chakra-ui/react';
import Header from './components/Header';

function App() {

  const theme = extendTheme({
    colors: {
      primary: {
        100: "#E5FCF1",
        200: "#27EF96",
        300: "#10DE82",
        400: "#0EBE6F",
        500: "#0CA25F",
        600: "#0A864F",
        700: "#086F42",
        800: "#075C37",
        900: "#064C2E"
      }
    },
  })


  return (
    <ChakraProvider theme={theme}>
      <Header></Header>

      <SimpleGrid columns={[2, 2, 3, 4]} spacing='40px' padding='20px'>
        <Box shadow={'2xl'} bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
