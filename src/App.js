
import { useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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
       primary : {
        "50": "#f5f7fe",
        "100": "#d9dffa",
        "200": "#b8c4f5",
        "300": "#8fa2ef",
        "400": "#788fec",
        "500": "#5874e7",
        "600": "#3a5ce3",
        "700": "#163ede",
        "800": "#002ad2",
        "900": "#001f9b"
      }
    },
    fonts: {
      heading: `'DM Sans', sans-serif`,
      body: `'DM Sans', sans-serif`,
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
