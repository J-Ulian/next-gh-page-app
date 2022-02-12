import { Box, Text, Link, Code } from '@chakra-ui/react';

import { getAllPosts, PostMeta } from '@src/api';

import { Logo } from '../src/components/Logo';
import { PostsList } from '@src/components/PostsList';

export default function Home({ meta }: { meta: PostMeta[] }) {
  return (
    <>
      <Box>
        <Logo h="33vmin" pointerEvents="none" />
      </Box>
      <Text fontSize="4xl">Posts:</Text>
      <PostsList meta={meta} />
    </>
  );
}

export async function getStaticProps() {
  const meta = getAllPosts()
    .slice(0, 9)
    .map(post => post.meta);

  return { props: { meta } };
}
