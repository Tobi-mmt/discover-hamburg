import React, { Component } from 'react'
import { Container, Box } from '@material-ui/core'
import DATA from '../data'
import Nav from "../components/Nav"
import Card from "../components/Card"

export default class Index extends Component {
  state = {
    seenPlaces: []
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  componentDidMount() {
    const data = localStorage.getItem('state')
    if (data) {
      this.setState(() => {
        return JSON.parse(data)
      })
    }
  }

  toggleSeen = (id) => {
    this.setState(prevState => {
      const seenPlaces = prevState.seenPlaces
      const idIndex = seenPlaces.indexOf(id)
      if (idIndex >= 0) {
        const newSeenPlaces = seenPlaces
        newSeenPlaces.splice(idIndex, 1)
        return { seenPlaces: newSeenPlaces }
      } else {
        return { seenPlaces: [...seenPlaces, id] }
      }
    })
  }

  render() {
    const { seenPlaces } = this.state
    return (
      <>
        <Nav title="Hamburg erkunden" />
        <Container>
          <Box textAlign="center">
            {
              DATA.map((place) => <Card key={place.id} place={place} seen={seenPlaces.includes(place.id)} toggleSeen={this.toggleSeen} />
              )
            }
          </Box>
        </Container>
      </>
    )
  }
}
