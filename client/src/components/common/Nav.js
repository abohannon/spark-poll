import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { COLOR_WHITE, COLOR_PINK, COLOR_GREY_DARK } from '../../constants/style';

const styles = ({ invert }) => ({
  navLinkContainerStyle: {
    display: 'flex',
    flex: 2,
    justifyContent: 'flex-start',
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    color: invert ? COLOR_GREY_DARK : COLOR_WHITE,
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
});

class Nav extends Component {
  state = {
    hover: false,
    index: '',
   }

  onMouseOver = (index) => {
    this.setState({
      hover: true,
      index
    })
  }

  onMouseLeave = (index) => {
    this.setState({
      hover: false,
      index: '',
    })
  }

  renderNavLinks({ type, invert }, state) {
    return type.map((item, index) => {
      const { navListItemStyle, navLinkStyle } = styles({ invert }, state);
      return (
        <li
          style={
            this.state.hover && this.state.index === index
              ? { ...navListItemStyle, opacity: 1, transform: 'translateY(-2px)' }
              :  navListItemStyle
          }
          key={item.label}
          onMouseEnter={() => this.onMouseOver(index)}
          onMouseLeave={() => this.onMouseLeave(index)}
        >
          <Link
            to={item.path}
            style={
              item.focus
                ? { ...navLinkStyle, color: COLOR_PINK }
                : navLinkStyle
            }
          >
            {item.label}
          </Link>
        </li>
      );
    });
  }

  render() {
    const { navLinkContainerStyle, navListStyle } = styles(this.props);
    return (
      <div className="nav__links" style={navLinkContainerStyle}>
        <ul style={navListStyle}>
          {this.renderNavLinks(this.props, this.state)}
        </ul>
      </div>
    );
  }
}

export { Nav };
