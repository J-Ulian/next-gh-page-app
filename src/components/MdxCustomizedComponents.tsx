import { Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';

export const CustomizedH2: React.FC = props => {
  return <Text mb={8} mt={8} fontSize="3xl" color="#ecb365" {...props} />;
};

export const CustomizedH3: React.FC = props => {
  return <Text mb={8} mt={6} fontSize="2xl" color="#ecb365" {...props} />;
};

export const CustomizedH4: React.FC = props => {
  return <Text mb={4} mt={8} fontSize="xl" color="#ecb365" {...props} />;
};

export const CustomizedUnorderedList: React.FC = props => {
  return <UnorderedList mb={4} mt={4} {...props} />;
};

export const CustomizedListItem: React.FC = props => {
  return <ListItem {...props} />;
};

export const CustomizedText: React.FC = props => {
  return <Text mt={4} mb={4} {...props} />;
};

export const CustomizedLink: React.FC = props => {
  return <Link color="teal.500" {...props} />;
};
