import { AppProps } from 'next/app';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../src/components/ColorModeSwitcher';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Component {...pageProps} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
