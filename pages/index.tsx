import { Box, Text, Link, Code } from '@chakra-ui/react';
import NextLink from 'next/link';

// 2. Then use it like this
import { Logo } from '../src/components/Logo';

export default function Home() {
  return (
    <Box>
      <Logo h="40vmin" pointerEvents="none" />
      <Text>
        <Code fontSize="xl"> Hello World. </Code>{' '}
        <NextLink href="/about" as={process.env.BACKEND_URL + '/about'} passHref>
          <Link color="teal.500" fontSize="2xl">
            About
          </Link>
        </NextLink>
        .
      </Text>
    </Box>
  );
}
