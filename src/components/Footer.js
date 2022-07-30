import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export const Footer = () => (
  <Container maxW={'100%'} as="footer" role="contentinfo" py={{ base: '8', md: '8' }} bg='white' color={'primary.800'}>
    <Stack  justify="center" spacing={{ base: '4', md: '5' }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
     <Text textAlign={'center'} fontSize='20px' fontWeight={'bold'} color='gray.600'>Prince Patel</Text>
    </Stack>
  </Container>
)