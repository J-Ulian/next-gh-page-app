import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

export function YouTube({ id }: { id: string }): React.ReactNode {
  return (
    <AspectRatio mb={8} mt={10} ratio={16 / 9}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
      />
    </AspectRatio>
  );
}
