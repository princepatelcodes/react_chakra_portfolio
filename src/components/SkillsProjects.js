
import { Box, Container, Flex, Heading, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa'

import Projects from './Projects'

export default function SkillsProjects() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>

            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>

                <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Projects
                    </Heading>
                    <Projects />
                </Box>
                <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>

                    <Heading textAlign={'start'}>Skills</Heading>

                    <Text fontSize={'sm'} textAlign='start'>
                        My skills, which I constantly keep improving.
                    </Text>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                        </VStack>
                    </Box>
                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Frameworks</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                        </VStack>
                    </Box>
                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Other Tools</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    )
}
