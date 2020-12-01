import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Clubs } from '../../api/club/Clubs';

const bridge = new SimpleSchema2Bridge(Clubs.schema);

/** Renders the Page for editing a single document. */
class EditClub extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { clubName, description, meetingTimes, location, url, contactInfo, photo, category, _id } = data;
    Clubs.collection.update(_id, { $set: { clubName, description, meetingTimes, location, url, contactInfo, photo, category } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Club updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid id='edit-page' container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Clubs</Header>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Segment>
                <TextField name='clubName'/>
                <TextField name='description'/>
                <TextField name='meetingTimes'/>
                <TextField name='location'/>
                <TextField name='url'/>
                <TextField name='contactInfo'/>
                <TextField name='photo'/>
                <TextField name='category'/>
                <TextField name='clubAdmin'/>
                <TextField name='clubAdminName'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditClub.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Clubs.userPublicationName);
  return {
    doc: Clubs.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditClub);
