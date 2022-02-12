import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import NextLink from 'next/link';

// 2. Then use it like this

import { ColorModeSwitcher } from '../src/components/ColorModeSwitcher';
import { Logo } from '../src/components/Logo';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            {/* <Link
            href="https://chakra-ui.com"
            color="teal.500"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link> */}
          </VStack>
        </Grid>
      </Box>
      <div>
        Hello World.{' '}
        <NextLink href="/about" as={process.env.BACKEND_URL + '/about'} passHref>
          <Link color="teal.500" fontSize="2xl">
            About
          </Link>
        </NextLink>
      </div>
    </ChakraProvider>
  );
}
