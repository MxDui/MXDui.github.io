import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/layout'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
        Hello, I'm a PERN stack developer based in Mexico City
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            David Rivera Morales
          </Heading>
          <p>Digital Builder (Developer / Shitcoiner / 3D Amateur)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
