import React from 'react'
import {Box, Container, Text} from  "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container >
       <Box
       display={"flex"}
       alignItems={"center"}
       flexDirection="row"
       justifyItems="center"
       justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius='1px'
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          vjh
        </Text>

      </Box >

      <box>

      </box>
    </Container>
  )
};

export default HomePage
