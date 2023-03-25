import React from 'react';
import { Box, Grid, VStack, Heading, Text, Code } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading>Param's Portfolio</Heading>
          <Text>
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          <Link to='/blogs'>Learn through blogs</Link>
          <Link to='/blogs/blog/mongoDB'>mongo db</Link>
          <Link to='/achivements'>achivements</Link>
          <Link to='/works'>works</Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Portfolio;
