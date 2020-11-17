import React from 'react';
import { Grid, Image, Menu, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Row>
            <Grid.Column floated='left' width={3}>
              <Image size='small' circular src="/images/meteor-logo.png"/>
            </Grid.Column>

            <Grid.Column width={10}>
              <Menu borderless fluid vertical >
                <Menu.Item classname = 'header'><Header as='h1'>Aloha</Header></Menu.Item>
                <Menu.Item>Welcome to Manoa Clubs Finder</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column floated='right' width={3}>
              <Image size='small' circular src="/images/meteor-logo.png"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated='left' width={3}>

            </Grid.Column>

            <Grid.Column width={10}>
              <p>
                Place holder text to be edited later
              </p>
            </Grid.Column>

            <Grid.Column floated='right' width={3}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Landing;
