import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLOR_WHITE, COLOR_PINK, COLOR_GREY_DARK } from '../../constants/style';

const styles = props => ({
  navLinkContainerStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    color: !props.inverted ? COLOR_WHITE : COLOR_GREY_DARK,
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navListItemStyle: {
    listStyleType: 'none',
    marginRight: '6rem',
    textTransform: 'uppercase',
    opacity: '.6',
    transition: 'all .2s',
  },
  navLinkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  },
  hoverStyle: {
    opacity: 1,
    transform: 'translateY(-2px)',
  },
});

class Nav extends Component {
  static propTypes = {
    type: PropTypes.array.isRequired,
  }

  state = {
    hover: false,
    index: '',
  }

  onMouseOver = (index) => {
    this.setState({
      hover: true,
      index,
    });
  }

  onMouseLeave = () => {
    this.setState({
      hover: false,
      index: '',
    });
  }

  hoverState = (index) => {
    const { navListItemStyle, hoverStyle } = styles(this.props);
    return (
      this.state.hover && this.state.index === index
        ? { ...navListItemStyle, ...hoverStyle }
        : navListItemStyle
    );
  }
  focusState = (item) => {
    const { navLinkStyle } = styles(this.props);
    return (
      item.focus
        ? { ...navLinkStyle, color: COLOR_PINK }
        : navLinkStyle
    );
  }

  renderNavLinks() {
    return this.props.type.map((item, index) => (
      <li
        style={this.hoverState(index)}
        key={item.label}
        onMouseEnter={() => this.onMouseOver(index)}
        onMouseLeave={() => this.onMouseLeave(index)}
      >
        <Link
          to={item.path}
          style={this.focusState(item)}
        >
          {item.label}
        </Link>
      </li>
    ));
  }

  render() {
    const { navLinkContainerStyle, navListStyle } = styles(this.props);
    return (
      <div className="nav__links" style={navLinkContainerStyle}>
        <ul style={navListStyle}>
          {this.renderNavLinks()}
        </ul>
      </div>
    );
  }
}

export { Nav };
