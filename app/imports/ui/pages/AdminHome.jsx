import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

class AdminHome extends React.Component {
  render() {
    return (
        <div className='admin-background' >
          <Grid container centered stackable columns={3} >
            <Grid.Column textAlign='center'>
              <Header as='h1' inverted>
                <Icon name='edit' size='huge'/>
                <Header.Content>Edit Club Profile</Header.Content>
              </Header>
              <Header as='h3' inverted>This allows you to change your information on your club. This includes descriptions, meeting times and locations,
                URLs to their websites (if any), contact information for officers, and a few select photos.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' inverted>
                <Icon name='search' size='huge'/>
                <Header.Content>View Clubs</Header.Content>
              </Header>
              <Header as='h3' inverted>Can view all the clubs that are available at UH Manoa. Can sort through all the clubs
                depending on interest.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' inverted>
                <Icon name='plus circle' size='huge'/>
                <Header.Content>Add New Clubs</Header.Content>
              </Header>
              <Header as='h3' inverted>Add in new clubs that are popping up within UH Manoa. Adding a new club requires the name of the club, the club
              leader, description of the club, and other information such as pictures and club type.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}


export default AdminHome;
