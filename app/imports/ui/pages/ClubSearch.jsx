import React, { Component, createRef } from 'react';
import { Grid, Icon, Header, Image, Sticky, Menu, Input, Segment } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ClubAdminHome extends React.Component {
  contextRef = createRef()

  render() {
    const homePage = { paddingTop: '4px', paddingBottom: '15px' };
    return (
        <div style={homePage}>
          <div ref={this.contextRef}>
            <Sticky context={this.contextRef}>
              <Menu
                  attached='top'
                  tabular
                  style={{ backgroundColor: '#fff', paddingTop: '1em' }}
              >
                <Menu.Item as='a' active name='bio' />
                <Menu.Item as='a' active={false} name='photos' />
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Input
                        transparent
                        icon={{ name: 'search', link: true }}
                        placeholder='Search users...'
                    />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Sticky>
            <Segment attached='bottom'>
              {_.times(5, (i) => (
                  <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              ))}
            </Segment>
          </div>

          <Grid container centered stackable columns={2}>
            <Image fluid src='https://manoa.hawaii.edu/wp/wp-content/uploads/2017/09/uhm-first-year.jpg'/>
            <Grid.Column textAlign='center'>
              <Header as='h1'>
                <Icon name='edit' size='huge'/>
                <Header.Content>Edit Club Profile</Header.Content>
              </Header>
              <Header as='h3'>This allows you to change your information on your club. This includes descriptions, meeting times and locations,
                URLs to their websites (if any), contact information for officers, and a few select photos.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
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

export default ClubAdminHome;
