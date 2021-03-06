import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#024731' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>Manoa Clubs Finder</Header>
          </Menu.Item>
          {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') ? (
              <Menu.Item id='navbar-club-admin-home' as={NavLink} activeClassName="active" exact to="/ClubAdminHome" key='list'>Club Admin Home</Menu.Item>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-admin-home' as={NavLink} activeClassName="active" exact to="/AdminHome" key='admin'>Admin Home</Menu.Item>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'clubUser') ? (
              <Menu.Item id='navbar-user-home' as={NavLink} activeClassName="active" exact to="/ClubUserHome" key='list'>Club User Home</Menu.Item>
          ) : ''}
          {this.props.currentUser ? (
              [<Menu.Item id='navbar-club-search' as={NavLink} activeClassName="active" exact to="/ClubSearch" key='list'>Search Clubs</Menu.Item>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') ? (
              <Menu.Item id='navbar-club-admin-edit-club' as={NavLink} activeClassName="active" exact to="/ClubSearchClubAdmin" key='list'>Club Admin Edit Clubs</Menu.Item>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-admin-edit-club' as={NavLink} activeClassName="active" exact to="/ClubSearchAdmin" key='list'>Admin Edit Clubs</Menu.Item>
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item id='navbar-change-role' as={NavLink} activeClassName="active" exact to="/ChangeRole/" key='list'>Change Role</Menu.Item>
          ) : ''}
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact
                                   to="/signin"/>
                    <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact
                                   to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact
                                   to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
