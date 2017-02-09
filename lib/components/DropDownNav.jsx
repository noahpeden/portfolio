import React, { Component } from 'react'
import { Link } from 'react-router'
import { TweenMax, staggerFrom, Power2 } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimationBackground()
    this.gsapAnimationIn()
  }
  gsapAnimationIn() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four
    const e5 = this.five

    TweenMax.staggerFrom(
      [e1, e2, e3, e4, e5],
      0.7,
      {
        opacity: 0,
        y: 50,
        delay: 0.75,
        ease: Power2.easeOut },
      0.12)
  }
  gsapAnimationBackground() {
    const e = this.background

    TweenMax.to(
      e,
      1,
      {
        height: '100vh',
        ease: Power2.easeIn },
    )
  }
  render() {
    return (
      <nav
        className="split-right split-right-nav"
        ref={(c) => { this.background = c }}
      >
        <ul className="full-screen-nav">
          <li
            className="about-link menu-item"
            ref={(c) => { this.one = c }}
          >
            <Link
              to="/About"
              onClick={this.props.toggleNavClosed}
              activeClassName="active"
            >About</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          >
            <Link
              to="/Work"
              onClick={this.props.toggleNavClosed}
              activeClassName="active"
            >Work</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          >
            <Link
              to="/Contact"
              onClick={this.props.toggleNavClosed}
              activeClassName="active"
            >Contact</Link>
          </li>
          <div
            className="split-left-social nav-social"
            ref={(c) => { this.five = c }}
          >
            <a
              href="https://twitter.com/noahpeden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../lib/images/twitter.svg"
                className="social-icon"
                alt="twitter"
              />
            </a>
            <a
              href="https://github.com/noahpeden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../lib/images/gitHub.svg"
                className="social-icon"
                alt="git hub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/noah-peden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../lib/images/linkedin.svg"
                className="social-icon"
                alt="linkedin"
              />
            </a>
          </div>
        </ul>
      </nav>
    )
  }
}
