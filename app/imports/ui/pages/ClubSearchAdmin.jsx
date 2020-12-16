import React, { createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Grid, Dropdown, Menu, Sticky, Container, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import ClubAdmin from '../components/ClubAdmin';

const categoryOptions = [
  { key: 'all', value: '', text: 'All Categories' },
  { key: 'academic', value: 'academic', text: 'Academic' },
  { key: 'music', value: 'music', text: 'Music' },
  { key: 'sports', value: 'sports', text: 'Sports' },
  { key: 'spiritual', value: 'spiritual', text: 'Spiritual' },
  { key: 'recreational', value: 'recreational', text: 'Recreational' },
  { key: 'Honorary Society', value: 'Honorary Society', text: 'Honorary Society' },
  { key: 'service', value: 'service', text: 'Service' },
  { key: 'cultural', value: 'cultural', text: 'Cultural' },
  { key: 'professional', value: 'professional', text: 'Professional' },
  { key: 'religious', value: 'religious', text: 'Religious' },
  { key: 'leisure', value: 'leisure', text: 'Leisure' },
];

/** A simple static component to render some text for the landing page. */
class ClubSearchAdmin extends React.Component {

  contextRef = createRef()

  constructor() {
    super();
    this.state = {
      multiple: true,
      search: '',
      searchQuery: null,
      value: '',
      options: categoryOptions,
    };
  }

  handleChange = (e, { value }) => {
    this.setState({ value: value });
    console.log(this.state.value);
  }

  handleSearchChange = (e, { searchQuery }) => {
    this.setState({ searchQuery });
    /* console.log('searchQuery.value'); */
  }

  render() {
    const { options } = this.state;

    const clubSearch = { paddingTop: '15px', paddingBottom: '15px' };

    const filteredClubs = this.props.clubs.filter((club) => club.category.toLowerCase().indexOf(this.state.value) !== -1);

    return (
        <div ref={this.contextRef}>
          <Container style={clubSearch} id='admineditclubs-page'>
            <Header as="h2" textAlign="center">UH Manoa Clubs</Header>
            <Grid>
              <Sticky context={this.contextRef}>
                <Menu
                    tabular
                    inverted
                    style={{ backgroundColor: '#fff', paddingTop: '10px', marginRight: '1em', marginTop: '1em' }}
                >
                  <Menu.Item>
                    <Header as='h4' style={{ paddingTop: '10px' }}>Filter Clubs</Header>
                    <Dropdown
                        fluid
                        selection
                        options={options}
                        value={this.state.value}
                        placeholder='All Categories'
                        onChange={this.handleChange}
                        onSearchChange={this.handleSearchChange}
                    />
                  </Menu.Item>
                </Menu>
              </Sticky>
            </Grid>
            <div>
              <Card.Group>
                {filteredClubs.map((club, index) => <ClubAdmin
                    key={index}
                    club={club}/>)}
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Contact documents in the props. */
ClubSearchAdmin.propTypes = {
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
})(ClubSearchAdmin);
