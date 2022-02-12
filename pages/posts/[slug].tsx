import type { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Box, Text } from '@chakra-ui/react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

import { getPostFromSlug, getSlugs, PostMeta } from '@src/api';
// import 'highlight.js/styles/atom-one-dark.css';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <Box minH="90vh">
        <Text mb={8} fontSize="4xl">
          {post.meta.title}
        </Text>
        <Text textAlign={'start'} maxWidth="min(80vw, 800px)">
          <MDXRemote {...post.source} components={{ Image }} />
        </Text>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    // mdxOptions: {
    //   rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeHighlight],
    // },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
