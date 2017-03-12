import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2 } from 'gsap'

export default class SplitRightAbout extends Component {
  constructor() {
    super()
    this.state = {
      mounted: 0,
    }
  }
  componentDidMount() {
    this.gsapAnimation()
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two

    TweenMax.staggerFrom(
      [e1, e2],
      0.7,
      {
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: Power2.easeOut },
      0.12)
  }
  render() {
    return (
      <section className="split-right split-right-container">
        <section className="split-right-contact-me">
          <h4 ref={(c) => { this.one = c }}>Contact Noah</h4>
          <p ref={(c) => { this.two = c }}>I am always looking for new opportunities to work and grow with awesome people and organizations. Email me at <span className="contact-p"><a href="mailto:noahpeden@gmail.com">noahpeden@gmail.com</a></span> if you’re interested in working together.</p>
        </section>
      </section>
    )
  }
}
