import { Box, Container, Heading, Highlight, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function Banner() {
  return (
    <Container maxW={'95%'}>
        <SimpleGrid columns={[1,1,2]} spacing={[8, 8, 20]}>
            
            <Box order={{ base : 2, md : 1}}  color={'primary.900'} display='flex' flexDirection={'column'} alignItems={{ base : 'center', md : 'start'}} justifyContent={'center'}>
            
            <Heading size={['lg', 'lg', '2xl']}>Hey I am Prince Patel.</Heading>
            
            <Text fontSize={['md', 'lg', 'xl']} textAlign={['center', 'center','inherit']} color={'gray.600'} py={2}>I am currently pursuing MCA form College of Engineering, Anna university, Tamil Nadu.</Text>

            <Text fontSize={['md', 'lg', 'xl']} textAlign={['center', 'center','inherit']} color={'gray.600'}>I am looking for <Highlight query='internship' styles={{ px: '1', py: '1', bg: 'green.100' }}>internship</Highlight>  or <Highlight query='freelance projects' styles={{ px: '1', py: '1', bg: 'blue.100' }}>Freelance Projects</Highlight>.</Text>
            
            </Box>
            <Box order={{ base : 1, md : 2}} p={8} >
                <Image rounded='2xl' src='https://scontent.fmaa6-1.fna.fbcdn.net/v/t1.6435-9/68260332_873290379707811_356255893546860544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8f2k4BLJ1-YAX9gGuYk&_nc_oc=AQkeHUBhTX2S6iziV_kq1u3i-rhLL9ruh3UFqVMRmPd5N_mXBzG8SxLmSLHIDyASgxU&_nc_ht=scontent.fmaa6-1.fna&oh=00_AT9wQoks9OtgxQtFLnUj5ulKCSMsy3eBSytOpvJBQMv58g&oe=630C7FB2' />
            </Box>
        </SimpleGrid>
    </Container>
  )
}
