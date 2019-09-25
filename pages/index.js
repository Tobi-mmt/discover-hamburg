import React from 'react';
import { Container, Box } from '@material-ui/core';
import DATA from '../data'
import Nav from "../components/Nav"
import Card from "../components/Card"

export default function Index() {
  return (
    <>
      <Nav title="Hamburg erkunden" />
      <Container>
        <Box textAlign="center">
          {
            DATA.map((place) => <Card key={place.id} place={place}/>
            )
          }
        </Box>

      </Container>
    </>
  );
}