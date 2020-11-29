import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import Club from '../components/Club';

/** A simple static component to render some text for the landing page. */
class ClubSearch extends React.Component {
  render() {
    const clubSearch = { paddingTop: '15px', paddingBottom: '15px' };
    return (
        <Container style={clubSearch}>
          <Header as="h2" textAlign="center">UH Manoa Clubs</Header>
          <Card.Group>
            {this.props.clubs.map((club, index) => <Club
                key={index}
                club={club}/>)}
          </Card.Group>
        </Container>
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
