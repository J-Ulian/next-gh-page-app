import React from 'react';
import NextLink from 'next/link';

import type { PostMeta } from '@src/api';
import { HStack, Link, List, ListIcon, ListItem, Tag, Text } from '@chakra-ui/react';

// import styles from "@/styles/Articles.module.css";

interface PostsListProps {
  meta: PostMeta[];
}

export const PostsList: React.FC<PostsListProps> = ({ meta }) => {
  return (
    <List textAlign={'start'} spacing={3}>
      {meta.map(post => (
        <ListItem key={post.slug}>
          <NextLink href={`/posts/${post.slug}`} as={`${process.env.BACKEND_URL}/posts/${post.slug}`} passHref>
            <Link color="teal.500" fontSize="2xl">
              {post.title}
            </Link>
          </NextLink>
          <Text>{post.excerpt}</Text>
          <HStack mt={2} spacing={4}>
            {post.tags.map((tag, idx) => (
              <NextLink key={idx} href={`/tags/${tag}`} as={`${process.env.BACKEND_URL}/tags/${tag}`} passHref>
                <Tag cursor={'pointer'} size={'sm'} variant="solid" colorScheme="teal">
                  {tag}
                </Tag>
              </NextLink>
            ))}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
