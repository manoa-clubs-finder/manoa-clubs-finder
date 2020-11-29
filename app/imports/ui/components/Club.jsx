import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  render() {
    return (
        <Card centered>
          <Image src={this.props.club.photo} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.club.clubName}</Card.Header>
            <Card.Meta>{this.props.club.meetingTimes}</Card.Meta>
            <Card.Description>{this.props.club.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.club.location}
          </Card.Content>
          <Card.Content extra>
            {this.props.club.url}
          </Card.Content>
          <Card.Content extra>
            {this.props.club.contactInfo}
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
