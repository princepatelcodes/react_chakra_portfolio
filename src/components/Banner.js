import { Box, Button, Container, Heading, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'
import DevIcon from 'devicon-react-svg';

export default function Banner() {
    const devIconStyle = {
        fill: "#1c1c1c",
        width: "32px",
    };

    return (

        <Box as="section" >
            <Container py={{ base: '16', md: '24' }}>
                <Stack spacing={{ base: '8', md: '10' }}>
                    <Stack spacing={{ base: '4', md: '5' }} align="center">
                        <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })} color={'primary.800'}>Ready to Grow?</Heading>
                        <Text color="gray.500" maxW="2xl" textAlign="center" fontSize="xl">
                            With this beautiful and responsive React components you will realize your next project
                            in no time.
                        </Text>
                    </Stack>
                    <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">

                        <Button variant={'primary'} size='lg' bg={'primary.700'}
                            href={'#'}
                            _hover={{
                                bg: 'primary.900',
                            }}>
                            Github
                        </Button>
                        <IconButton
                            bg={'primary.100'} _hover={{
                                bg: 'primary.200'
                            }} alignItems='center' justifyContent={'center'}>

                            <DevIcon icon='linkedin' style={devIconStyle} />
                        </IconButton>
                        <IconButton
                            bg={'primary.100'} _hover={{
                                bg: 'primary.200'
                            }} alignItems='center' justifyContent={'center'}>

                            <DevIcon icon='linkedin' style={devIconStyle} />
                        </IconButton>
                        <IconButton
                            bg={'primary.100'} _hover={{
                                bg: 'primary.200'
                            }} alignItems='center' justifyContent={'center'}>

                            <DevIcon icon='github' style={devIconStyle} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}