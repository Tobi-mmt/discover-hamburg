import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import Link from '../src/Link';
import DATA from '../data'
import Nav from "../components/Nav"
import Card from "../components/Card"

export default function Index() {
  return (
    <>
      <Nav title="Hamburg erkunden" />
      <Container maxWidth="md">
        <Box >
          {
            DATA.map((place) => <Card key={place.id} place={place}/>
            )
          }
        </Box>

      </Container>
    </>
  );
}