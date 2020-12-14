import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubClubAdmin extends React.Component {

  emailCheck() {
    return Meteor.user().emails[0].address === this.props.club.contactInfo;
  }

  render() {
    return (
        <Card centered>
          <Image src={this.props.club.photo} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.club.clubName}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            {this.emailCheck() ?
                (<Link id='edit-page' to={`/edit/${this.props.club._id}`}>Edit</Link>) : ' '}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ClubClubAdmin.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubClubAdmin);
