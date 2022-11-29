import { Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export default function CTA() {
    return (

        <Container id='freelance' as="section" maxW='7xl' py={{ base: '10', md: '12' }} my={{ base: '10', md: '12' }} bg='white' borderRadius='20' alignItems='center'>
            <Stack spacing={{ base: '8', md: '10' }}>
                <Stack spacing={{ base: '4', md: '5' }} align="center">
                    <Heading size={useBreakpointValue({ base: 'lg', md: 'xl' , lg : '2xl' })} fontWeight='800' color={'primary.800'}>Looking For Freelancer ?</Heading>
                    <Text color="gray.700" maxW="2xl" textAlign="center" fontSize="md">
                        I have spent enough time with simple and complex full fleged projects. I have created apps, website, scripts and have also coded and deployed admin panels and database/backend on cloud.I love to take on new challenges and work on experimental projects.
                        <br />
                        Let us discuss more about your work.
                    </Text>
                </Stack>
                <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
                    <Button as='a' variant={'ghost'} size='lg' bg={'primary.800'} color='white'
                        href={'mailto:iprincepatel22@gmail.com'}
                        transition='all ease-in 200ms'
                        _hover={{
                            bg: 'primary.900',
                            textDecoration: 'none',
                            px: '10',
                            transition: 'all ease-in 200ms'
                        }}>
                        Send an Email
                    </Button>
                </Stack>
            </Stack>
        </Container>

    );
}