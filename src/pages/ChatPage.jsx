import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ChatPage = () => {
    return (
        <Box position={'absolute'} left={'50%'}
            transform={'translateX(-50%)'}
            p={4}
            w={{
                lg: '750px',
                md: '80%',
                base: '100%'
            }}>
            <Flex gap={4} flexDirection={{
                base: 'column',
                md: 'row'
            }}
                maxW={{
                    sm: '400px',
                    md: 'full'
                }}
                mx={'auto'}
            >
                <Flex flex={30} gap={2} flexDirection={'column'}
                    maxW={{
                        sm: '250px',
                        md: 'full'
                    }} mx={'auto'}>
                    <Text
                        fontWeight={700} color={useColorModeValue('gray.600', 'gray.400')}
                    >
                        Your Conversations
                    </Text>
                    <form>
                        <Flex alignItems={'center'} gap={2}>
                            <Input placeholder='search for a user' />
                            <Button size={'sm'}>
                                <Search2Icon />
                            </Button>
                        </Flex>
                    </form>
                </Flex>
                <Flex flex={70}>MessageContainer</Flex>
            </Flex>
        </Box>
    )
}

export default ChatPage