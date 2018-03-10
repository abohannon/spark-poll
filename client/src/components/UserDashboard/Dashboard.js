import React, { Component } from 'react';
import UserNav from './UserNav';
import Header from './Header';
import { GridDisplay } from '../common';

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
  render() {
    console.log('User Dashboard', this.props);
    return (
      <div className="user-dashboard" style={styles.dashboardStyle}>
        <UserNav />
        <div className="user-dashboard__main" style={styles.mainStyle}>
          <Header title="Your Dashboard" />
          <GridDisplay />
        </div>
      </div>
    );
  }
}

export default Dashboard;
