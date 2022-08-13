import {
    Box,
    Button,
    CloseButton,
    Container,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiInfo } from 'react-icons/fi'
  
  export const TopBanner = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Box as="section" flex={'1'}>
        <Box bg="gray.50" color={'gray.800'}>
          <Container  py={{ base: '4', md: '2.5' }} position="relative">
            <CloseButton display={{ sm: 'none' }} position="absolute" right="2" top="2" />
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              justify="space-between"
              spacing={{ base: '3', md: '2' }}
            >
              <Stack
                spacing="4"
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'start', md: 'center' }}
              >
                {!isMobile && (
                  <Square size="12" bg="bg-subtle" borderRadius="md">
                    <Icon as={FiInfo} boxSize="6" />
                  </Square>
                )}
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={{ base: '0.5', md: '1.5' }}
                  pe={{ base: '4', sm: '0' }}
                >
                  <Text fontWeight="medium">We just launched our new product.</Text>
                
                </Stack>
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: '3', sm: '2' }}
                align={{ base: 'stretch', sm: 'center' }}
              >
                <Button variant="ghost" width="full">
                  Read more
                </Button>
                
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
  }