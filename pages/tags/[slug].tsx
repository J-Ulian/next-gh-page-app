import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPosts, PostMeta } from '@src/api';
import { PostsList } from '@src/components/PostsList';
import { Text } from '@chakra-ui/react';

export default function TagPage({ slug, posts }: { slug: string; posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <Text fontSize="4xl">Tag: {slug}</Text>
      <PostsList meta={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter(post => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map(post => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map(post => post.meta.tags).flat());
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
