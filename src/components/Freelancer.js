import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function Freelancer() {
    return (

        <Box id='freelance' as="section" >
            <Container py={{ base: '16', md: '24' }}>
                <Stack spacing={{ base: '8', md: '10' }}>
                    <Stack spacing={{ base: '4', md: '5' }} align="center">
                        <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })} color={'primary.800'}>Looking For Freelancer ?</Heading>
                        <Text color="gray.500" maxW="2xl" textAlign="center" fontSize="xl">
                            I have spent enough time with simple and complex full fleged projects. I have created apps, website, scripts and have also coded and deployed admin panels and database/backend on cloud.I love to take on new challenges and work on experimental projects.
                            <br/>
                            Let us discuss more about your work.
                        </Text>
                    </Stack>
                    <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">

                        <Button variant={'primary'} size='lg' bg={'primary.700'}
                            href={'#'}
                            _hover={{
                                bg: 'primary.900',
                            }}>
                            Send an Email                        
                            </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}