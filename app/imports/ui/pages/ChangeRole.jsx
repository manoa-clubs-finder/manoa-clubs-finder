import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, SelectField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

const options = [
  { label: 'Club Admin', value: 'clubAdmin' },
  { label: 'Admin', value: 'admin' },
  { label: 'Club User', value: 'clubUser' },
];

const formSchema = new SimpleSchema({
  userID: String,
  role: {
    type: String,
    allowedValues: ['clubAdmin', 'admin', 'clubUser'],
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class ChangeRole extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { role, userID } = data;
    if (Meteor.users.findOne(userID)) {
      Meteor.setUserRoles(userID, role);
      swal('Success', 'Role Updated successfully', 'success');
      formRef.reset();
    } else {
      swal('Error', 'Role NOT Updated successfully', 'error');
    }
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const changeRolePage = { paddingTop: '15px', paddingBottom: '20px' };
    let fRef = null;
    return (
        <Grid container centered style={changeRolePage}>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Stuff</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='userID'/>
                <SelectField name="role" options={options} />
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default ChangeRole;
