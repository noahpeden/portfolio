import React, { Component } from 'react'
import HamburgerNav from './HamburgerNav'
import DropDownNav from './DropDownNav'

export default class SplitRightMain extends Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }
  }
  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }
  render() {
    return (
      <section
        className={this.state.navOpen ? 'split-right-nav-open' : 'split-right-closed'}
      >
        <HamburgerNav
          toggleNavOpen={this.toggleNav.bind(this)}
          navOpen={this.state.navOpen}
        />
        {this.state.navOpen ?
          <DropDownNav
            toggleNavClosed={this.toggleNav.bind(this)}
          /> :
          null
        }
      </section>
    )
  }
}
