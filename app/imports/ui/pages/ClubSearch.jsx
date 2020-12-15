import React, { createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Grid, Button, Dropdown } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import Club from '../components/Club';

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
];

/** A simple static component to render some text for the landing page. */
class ClubSearch extends React.Component {

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

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
    console.log('searchQuery.value');
  }

  submitChange = () => {
    if (_.isEmpty(this.state.value) === true) {
      console.log('it\'s empty');
    }
    console.log(this.state.value);
  }

  toggleSearch = (e) => this.setState({ search: e.target.checked });

  handleDropDownSelect = (event, data) => {
    console.log(data.value);
  };

  render() {
    const { multiple, options, search, value } = this.state;

    const filteredClubs = this.props.clubs.filter((club) => club.category.toLowerCase().indexOf(this.state.value) !== -1);

    return (
        <div>
          <Grid>
            <Grid.Column width={8}>
              <p>
                <Button onClick={this.submitChange} >
                  Submit Changes
                </Button>
              </p>
              <Dropdown
                  fluid
                  selection
                  options={options}
                  value={this.state.value}
                  placeholder='All Category'
                  onChange={this.handleChange}
                  onSearchChange={this.handleSearchChange}
              />
            </Grid.Column>
          </Grid>
          <Grid centered columns={3}>
            <Grid.Column>
              <div>
                <Card.Group>
                  {this.props.clubs.map((club, index) => <Club
                      key={index}
                      club={club}/>)}
                </Card.Group>
                <Card.Group>
                  {filteredClubs.map((club, index) => <Club
                      key={index}
                      club={club}/>)}
                </Card.Group>
              </div>
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
