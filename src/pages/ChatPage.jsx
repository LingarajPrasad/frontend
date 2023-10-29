import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const ChatPage = () => {
  return (
    <Box position={'absolute'} left={'50%'}
    transform={'translateX(-50%)'}
    p={4}
    w={{
        lg:'750px',
        md:'80%',
        base:'100%'
    }}>
        <Flex gap={4} flexDirection={{
            base:'column',
            md:'row'
        }}
        maxW={{
            sm:'400px',
            md:'full'
        }}
        mx={'auto'}
        >
<Flex flex={30}>Conversation</Flex>
<Flex flex={70}>MessageContainer</Flex>
        </Flex>
    </Box>
  )
}

export default ChatPage