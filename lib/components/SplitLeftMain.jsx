import React, { Component } from 'react'
import { Link } from 'react-router'
import { TweenMax, staggerFrom, Power2 } from 'gsap'

export default class SplitLeftMain extends Component {
  componentDidMount() {
    this.gsapAnimation()
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom([e1, e2, e3, e4], 0.7, { opacity: 0, y: 50, delay: 0.5, ease: Power2.easeOut }, 0.12)
  }
  render() {
    return (
      <section className="split-item split-left-container">
        <div className="split-left-text-block">
          <h1
            className="split-left-text"
            ref={(c) => { this.one = c }}
          >Noah Peden
          </h1>
          <h3
            className="split-left-text"
            ref={(c) => { this.two = c }}
          >Front End Web Developer
          </h3>
          <div ref={(c) => { this.three = c }} className="button-container">
            <Link
              to="/Contact"
            >
              <button
                className="button"
              >Contact Noah
              </button>
            </Link>
            <Link
              to="/Work"
            >
              <button
                className="button"
              >View Projects
              </button>
            </Link>
          </div>
          <div
            className="split-left-social"
            ref={(c) => { this.four = c }}
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
              href="https://www.linkedin.com/in/noahpeden"
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
        </div>
      </section>
    )
  }
}
