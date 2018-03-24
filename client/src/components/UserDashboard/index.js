import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Radium from 'radium';
import PropTypes from 'prop-types';
import UserNav from './UserNav';
import Header from './Header';
import PollCreateForm from '../PollCreateForm';
import { GridDisplay, Loader } from '../common';
import { logout, fetchUser } from '../../actions/AuthActions';
import { pollsFetch } from '../../actions/PollActions';
import { COLOR_WHITE_GREY, COLOR_WHITE, COLOR_WHITE_GREY_DARK } from '../../constants/style';

const styles = {
  containerStyle: {
    backgroundColor: COLOR_WHITE_GREY,
    height: '100vh',
  },
  dashboardStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE_GREY,
  },
  mainStyle: {
    flex: 1,
    margin: '5rem auto',
    padding: '0 4rem',
    maxWidth: '115rem',
    '@media screen and (max-width: 575px)': {
      padding: 0,
    },
  },
  emptyStyle: {
    fontSize: '3rem',
    color: COLOR_WHITE_GREY_DARK,
    textShadow: `0px 2px ${COLOR_WHITE}`,
    textAlign: 'center',
    lineHeight: 1.2,
    marginTop: '8rem',
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
    const {
      containerStyle, dashboardStyle, mainStyle, emptyStyle,
    } = styles;

    const {
      history, auth, user, polls, location,
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
              render={() => {
                if (auth.loading || polls.loading || user.loading) {
                  return <Loader />;
                }
                if (user.polls.length < 1) {
                  return (
                    <div style={emptyStyle}>No polls yet? No problem.<br />Click + New Poll at the top to get started!</div>
                  );
                }
                return <GridDisplay polls={user.polls} />;
              }
            }
            />
            <Route
              exact
              path="/dashboard/polls-all"
              render={() => <GridDisplay polls={polls.all} />
            }
            />
            <Route
              path="/dashboard/create-poll"
              render={() => <PollCreateForm history={history} />
            }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth, user: state.user, polls: state.polls });

Dashboard = Radium(Dashboard);

export default connect(mapStateToProps, { logout, fetchUser, pollsFetch })(Dashboard);
