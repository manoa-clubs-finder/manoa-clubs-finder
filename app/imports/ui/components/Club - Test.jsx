import React, { useState, useEffect, createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Sticky, Grid, Table, Checkbox, Segment, Image, Rail, Ref } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import Club from '../components/Club';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch(Clubs).then(response => response.json())
        .then((json) => setData(json));
  }, [])

  return (
      <div>
        <div>filter goes here</div>
        <div>dataable goes here</div>
      </div>
  );
}

/** A simple static component to render some text for the landing page. */
class ClubSearch extends React.Component {
  contextRef = createRef()

  state = { checked: false }

  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  render() {
    return (
        <div>
          <Grid centered columns={3}>
            <Grid.Column>
              <Ref innerRef={this.contextRef}>
                <div>
                  <Card.Group>
                    {this.props.clubs.map((club, index) => <Club
                        key={index}
                        club={club}/>)}
                  </Card.Group>

                  <Rail position='left'>
                    <Sticky context={this.contextRef} offset={100}>
                      <Grid.Column floated='left' width={10}>
                        <Table.Cell center>Academic</Table.Cell>
                        <Checkbox
                            onChange={this.toggle}
                            checked={this.state.checked}
                            value=""

                            toggle />
                        <Table.Cell center>Spiritual</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Recreational</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Honorary Society</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Cultural</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Service</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Sports</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Leisure</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Art</Table.Cell>
                        <Checkbox toggle />
                        <Table.Cell center>Music</Table.Cell>
                        <Checkbox toggle />
                      </Grid.Column>
                    </Sticky>
                  </Rail>
                </div>
              </Ref>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Contact documents in the props. */
ClubSearch.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Contact documents.
  const subscription = Meteor.subscribe(Clubs.userPublicationName);
  return {
    clubs: Clubs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClubSearch);
