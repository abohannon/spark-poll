import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserNav from './UserNav';
import Header from './Header';
import PollCreateForm from '../PollCreateForm';
import PollView from '../PollView';
import PollCard from '../PollCard';
import { GridDisplay } from '../common';
import { logout, fetchUser } from '../../actions/AuthActions';

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
  state = {
    polls: [],
  }

  componentWillMount() {
    this.props.fetchUser();
    console.log('Component will mount');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user) {
      const { polls } = nextProps.auth.user;
      this.setState({
        polls,
      });
    }
  }

  handleLogout = () => {
    const { logout, history } = this.props;
    logout(history);
  }

  render() {
    const { history, auth } = this.props;
    // const polls = auth.user.polls || null;
    return (
      <div className="user-dashboard" style={styles.dashboardStyle}>
        <UserNav
          handleLogout={this.handleLogout}
          history={history}
          auth={auth}
        />
        <div className="user-dashboard__main" style={styles.mainStyle}>
          <Header title="Your Dashboard" />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <GridDisplay polls={this.state.polls}>
                <PollCard />
              </GridDisplay>
          )}
          />
          <Route path="/dashboard/create-poll" render={() => <PollCreateForm />} />
          <Route path="/dashboard/poll-view" render={() => <PollView />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logout, fetchUser })(Dashboard);
