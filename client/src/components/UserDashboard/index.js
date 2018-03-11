import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserNav from './UserNav';
import Header from './Header';
import PollCreateForm from '../PollCreateForm';
import { GridDisplay } from '../common';
import { logout } from '../../actions/AuthActions';

const styles = {
  dashboardStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mainStyle: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    padding: '2rem 10rem',
  },
};

class Dashboard extends Component {
  handleLogout = () => {
    const { logout, history } = this.props;
    logout(history);
  }

  render() {
    console.log('User Dashboard', this.props);
    return (
      <div className="user-dashboard" style={styles.dashboardStyle}>
        <UserNav handleLogout={this.handleLogout} history={this.props.history} />
        <div className="user-dashboard__main" style={styles.mainStyle}>
          <Header title="Your Dashboard" />
          <Route exact path="/dashboard" render={() => <GridDisplay />} />
          <Route path="/dashboard/create-poll" render={() => <PollCreateForm />} />
        </div>
      </div>
    );
  }
}

export default connect(null, { logout })(Dashboard);
