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
import { COLOR_WHITE_GREY } from '../../constants/style';

const styles = {
  containerStyle: {
    backgroundColor: COLOR_WHITE_GREY,
    height: '100vh',
  },
  dashboardStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainStyle: {
    backgroundColor: COLOR_WHITE_GREY,
    flex: 1,
    padding: '2rem 10rem',
    margin: '0 auto',
    width: '100%',
    maxWidth: 1275,
    minWidth: 720,
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

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.user.message) !== JSON.stringify(this.props.user.message)) {
      this.props.fetchUser();
      this.props.pollsFetch();
    }
  }

  handleLogout = () => {
    const { logout, history } = this.props;
    logout(history);
  }

  render() {
    const { containerStyle, dashboardStyle, mainStyle } = styles;
    const {
      history, auth, user, allPolls, location,
    } = this.props;
    return (
      <div className="container" style={containerStyle}>
        <div className="user-dashboard" style={dashboardStyle}>
          <UserNav
            handleLogout={this.handleLogout}
            history={history}
            auth={auth}
          />
          <div className="user-dashboard__main" style={mainStyle}>
            <Header title="Your Dashboard" polls={user.polls} location={location} />
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth, user: state.user, allPolls: state.polls });

export default connect(mapStateToProps, { logout, fetchUser, pollsFetch })(Dashboard);
