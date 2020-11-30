import React from 'react';
import { Grid, Icon, Header, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ClubUserHome extends React.Component {

  render() {
    const homePage = { paddingTop: '25px', paddingBottom: '15px' };
    return (
        <div style={homePage} id='userhome-page'>
          <Grid container centered stackable columns={2}>
            <Header as="h2" textAlign="center">Welcome UH Student!</Header>
            <Image fluid src='https://manoa.hawaii.edu/wp/wp-content/uploads/2017/09/uhm-first-year.jpg'/>
            <Grid.Column>
              <Header as='h1'>
                <Icon name='edit' size='huge'/>
                <Header.Content>Edit Club Profile</Header.Content>
              </Header>
              <Header as='h3'>This allows you to change your information on your club. This includes descriptions, meeting times and locations,
                URLs to their websites (if any), contact information for officers, and a few select photos.</Header>
            </Grid.Column>

            <Grid.Column>
              <Header as='h1'>
                <Icon name='search' size='huge'/>
                <Header.Content>View Clubs</Header.Content>
              </Header>
              <Header as='h3'>Can view all the clubs that are available at UH Manoa. Can sort through all the clubs
                depending on interest.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default ClubUserHome;
