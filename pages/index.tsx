import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllPosts, PostMeta } from '@src/api';
import { Logo } from '../src/components/Logo';
import { PostsList } from '@src/components/PostsList';

export default function Home({ meta }: { meta: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <Box>
        <Logo h="33vmin" pointerEvents="none" />
      </Box>
      <Text fontSize="4xl">Posts:</Text>
      <PostsList meta={meta} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = getAllPosts()
    .slice(0, 9)
    .map(post => post.meta);

  return { props: { meta } };
};
