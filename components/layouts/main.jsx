import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>David Rivera Morales - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}
export default Main
