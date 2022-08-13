import './App.css';
import { useEffect } from 'react';
import {  ChakraProvider,  extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CTA from './components/CTA';
import { Footer } from './components/Footer';
import Banner from './components/Banner';
import SkillsProjects from './components/SkillsProjects';
 

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: '#dbd6e7',
          color: 'white',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
    colors: {
      primary: {
        100: "#dbd6e7",
        200: "#cac2dc",
        300: "#b8aed0",
        400: "#a79ac5",
        500: "#9585b9",
        600: "#8371ad",
        700: "#725da2",
        800: "#604996",
        900: "#4f358b"
      }
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
  })

  useEffect(() => {
    Aos.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Banner />
      <SkillsProjects />
      <CTA />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
