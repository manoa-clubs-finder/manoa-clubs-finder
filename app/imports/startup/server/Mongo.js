import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Clubs';

/* eslint-disable no-console */
/** Initialize the database with a default data document. */
function addClub(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Clubs.collection.insert(data);
}
/** Initialize the collection if empty. */
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default Clubs.');
    Meteor.settings.defaultClubs.map(data => addClub(data));
  }
}
