import React, { Component } from 'react'

export default class HamburgerNav extends Component {
  render() {
    return (
      <button
        className={this.props.navOpen ? 'hamburger-nav open' : 'hamburger-nav closed'}
        onClick={this.props.toggleNavOpen}
      >
        <span />
        <span />
        <span />
        <span />
      </button>
    )
  }
}
