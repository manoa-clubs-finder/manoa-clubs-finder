import React, { createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Sticky, Grid, Table, Checkbox, Segment, Image, Rail, Ref, Input, Dropdown } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import Club from '../components/Club';

const categoryOptions = [
  { key: 'academic', value: 'academic', text: 'Academic' },
  { key: 'music', value: 'music', text: 'Music' },
  { key: 'sports', value: 'sports', text: 'Sports' },
];

/** A simple static component to render some text for the landing page. */
class ClubSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  contextRef = createRef()














  state = {
    isFetching: false,
    multiple: true,
    search: true,
    searchQuery: null,
    value: [],
    options: categoryOption,
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  fetchOptions = () => {
    this.setState({ isFetching: true });

    setTimeout(() => {
      this.setState({ isFetching: false, options: getOptions() });
      this.selectRandom();
    }, 500);
  }

  selectRandom = () => {
    const { multiple, options } = this.state;
    const value = _.sample(options).value;
    this.setState({ value: multiple ? [value] : value });
  }

  toggleSearch = (e) => this.setState({ search: e.target.checked })

  toggleMultiple = (e) => {
    const { value } = this.state;
    const multiple = e.target.checked;
    // convert the value to/from an array
    const newValue = multiple ? _.compact([value]) : _.head(value) || '';
    this.setState({ multiple, value: newValue });
  }













  render() {

    const filteredClubs = this.props.clubs.filter(
        (club) => club.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );

    return (
        <div>
          <Grid centered columns={3}>
            <Grid.Column>
              <Ref innerRef={this.contextRef}>
                <div>
                  <Card.Group>
                    {filteredClubs.map((club, index) => <Club
                        key={index}
                        club={club}/>)}
                  </Card.Group>

                  <Rail position='left'>
                    <Sticky context={this.contextRef} offset={100}>
                      <Grid.Column floated='left' width={10}>
                        <Table.Cell center>Academic</Table.Cell>
                        <Input placeholder='Search...'
                               value={this.state.search}
                               onChange={this.updateSearch.bind(this)}
                        />
                        <Table.Cell center>Spiritual</Table.Cell>
                        <Dropdown
                            clearable
                            fluid
                            multiple
                            selection
                            options={categoryOptions}
                            onChange={this.handleChange}
                            placeholder='Select Category'
                        />
                        <Checkbox toggle/>
                        <Table.Cell center>Recreational</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Honorary Society</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Cultural</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Service</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Sports</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Leisure</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Art</Table.Cell>
                        <Checkbox toggle/>
                        <Table.Cell center>Music</Table.Cell>
                        <Checkbox
                            placeholder='Music'
                            name='music'
                            value={name}
                            onChange={this.updateSearch.bind(this)}
                            toggle/>
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
