import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/club.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Clubs.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
