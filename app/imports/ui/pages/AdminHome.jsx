import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';

class AdminHome extends React.Component {
  render() {
    const homePage = { paddingTop: '25px', paddingBottom: '15px' };
    return (
        <div style={homePage} id='adminhome-page' >
          <Grid container centered stackable columns={3} >
            <Header as="h2" textAlign="center">Welcome Admin!</Header>
            <Image fluid src='\images\club-admin-home.jpg'/>
            <Grid.Column>
              <Header as='h1'>
                <Icon name='edit' size='huge'/>
                <Header.Content>Edit Clubs</Header.Content>
              </Header>
              <Header as='h3'>This allows you to change clubs information if they have inappropriate content. This includes descriptions, meeting times and locations,
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

            <Grid.Column>
              <Header as='h1'>
                <Icon name='edit' size='huge'/>
                <Header.Content>Edit Roles</Header.Content>
              </Header>
              <Header as='h3'>Can change the roles of the users.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default AdminHome;
