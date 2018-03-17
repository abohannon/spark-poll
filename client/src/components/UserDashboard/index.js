import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserNav from './UserNav';
import Header from './Header';
import PollCreateForm from '../PollCreateForm';
import PollView from '../PollView';
import PollCard from '../PollCard';
import { GridDisplay } from '../common';
import { logout, fetchUser } from '../../actions/AuthActions';
import { pollsFetch } from '../../actions/PollActions';

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
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.fetchUser();
    this.props.pollsFetch();
  }

  handleLogout = () => {
    const { logout, history } = this.props;
    logout(history);
  }

  render() {
    const {
 history, auth, user, allPolls 
} = this.props;
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
            render={() => <GridDisplay polls={user.polls} />
            }
          />
          <Route
            exact
            path="/dashboard/polls-all"
            render={() => <GridDisplay polls={allPolls.data} />
            }
          />
          <Route
            path="/dashboard/create-poll"
            render={() => <PollCreateForm history={history} />
            }
          />
          <Route path="/dashboard/poll-view" render={() => <PollView />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth, user: state.user, allPolls: state.polls });

export default connect(mapStateToProps, { logout, fetchUser, pollsFetch })(Dashboard);
