import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Row>
            <Grid.Column floated='left' width={3}>
              <Image size='small' src="images\manoa-seal.jpg"/>
            </Grid.Column>
            <Grid.Column width={10} classname >
              <Header as ='h1' >Manoa Clubs Finder</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={3}>
              <Image size='small' circular src="images\flowers.png"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated='left' width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
              <p>
                Looking for clubs made easier with all of them listed with in one spot.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={3}>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column floated='right' width={6}>
              <Image size='big' src = "images\club-table.jpg" rounded bordered/>
            </Grid.Column>
            <Grid.Column floated='left' width={6}>
              <Image size='big' src = "images\sport-football.jpg" rounded bordered/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated='right' width={6}>
              <Image size='big' src = "images\uhm-sailing.jpg" rounded bordered/>
            </Grid.Column>
            <Grid.Column floated='left' width={6}>
              <Image size='big' src = "images\rio-game.jpg" rounded bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
