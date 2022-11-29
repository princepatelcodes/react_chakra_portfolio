import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import Education from './Education'
 

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src='https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png' width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Prince Patel</Heading>

                        <Text fontSize={'sm'} textAlign='center'>
                            I am currently pursuing MCA form College of Engineering, Anna university, Tamil Nadu. I am looking for <Tag variant={'solid'}>internship</Tag> and <br /> <Tag mt={1} variant={'solid'}> Job Opportunities</Tag><br /> (Degree Completion in 2023).
                        </Text>

                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack Developer</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>App Developer</Tag>
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box me={2} >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaLinkedin /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <Text fontWeight={'600'}>princepatell</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaTwitter /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Twitter</Text>
                                    <Text fontWeight={'600'}>princepatelt</Text>
                                </VStack>
                            </HStack>

                        </VStack>
                    </Box>

                    <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaFacebook size={24} /></IconButton>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaInstagram size={24} /></IconButton>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaTwitter size={24} /></IconButton>
                    </ButtonGroup>
                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Education
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}
