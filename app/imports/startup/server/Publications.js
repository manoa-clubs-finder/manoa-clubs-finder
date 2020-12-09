import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Clubs';

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Clubs.userPublicationName, function () {
  if (this.userId) {
    return Clubs.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

Meteor.publish('adminPermission', function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({});
  }
  return this.ready();
});
