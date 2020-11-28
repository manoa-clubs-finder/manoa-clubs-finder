import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ClubAdmin from '../components/ClubAdmin';
import { Clubs } from '../../api/club/Clubs';
import { Notes } from '../../api/note/Notes';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Clubs (Admin)</Header>
          <Card.Group>
            {this.props.clubs.map((club, index) => <ClubAdmin
                key={index}
                club={club}
                notes={this.props.notes.filter(note => (note.clubId === club._id))}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Clubs.userPublicationName);
  const subscription2 = Meteor.subscribe(Notes.userPublicationName);
  return {
    clubs: Clubs.collection.find({}).fetch(),
    notes: Notes.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListClubAdmin);