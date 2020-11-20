import React, { createRef } from 'react';
import { Grid, Icon, Header, Image, Sticky, Segment, Ref, Rail, Table, Checkbox, Card } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class ClubSearch extends React.Component {
  contextRef = createRef()

  render() {
    const homePage = { paddingTop: '4px', paddingBottom: '15px' };

    const filterTable = { paddingLeft: '-100px' };

    return (
        <div style={homePage}>
          <Grid centered columns={3}>
            <Grid.Column>
              <Ref innerRef={this.contextRef}>
                <Segment>
                  <Card>
                    <Image src='https://freepngimg.com/thumb/music/24577-1-music-transparent-image.png' wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Musical Club</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        I like hardcore rock. Don&pos;t judge.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        45 Club Members
                      </a>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Programming Club</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Programming is fun.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        22 Club Members
                      </a>
                    </Card.Content>
                  </Card>
                  <Rail position='left' style={filterTable}>
                    <Sticky context={this.contextRef} offset={200}>
                      <Segment>
                      <Grid.Column floated='left' width={10}>
                        <Header as='h3'>Filter Club</Header>
                        <Grid.Column floated='left' width={5}>
                          <Table.Cell center>Sports</Table.Cell>
                          <Checkbox toggle />
                          <Table.Cell center>Games</Table.Cell>
                          <Checkbox toggle />
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                          <Table.Cell center>Music</Table.Cell>
                          <Checkbox toggle />
                          <Table.Cell center>Academic</Table.Cell>
                          <Checkbox toggle />
                        </Grid.Column>
                      </Grid.Column>
                      </Segment>
                    </Sticky>
                  </Rail>
                </Segment>
              </Ref>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default ClubSearch;
