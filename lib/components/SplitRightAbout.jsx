import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2 } from 'gsap'
import { Link } from 'react-router'

export default class SplitRightAbout extends Component {
  constructor() {
    super()
    this.state = {
      mounted: 0,
    }
  }
  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll)
    if (this.state.mounted === 0) {
      this.gsapAnimationSlow()
    }
  }
  gsapAnimationSlow() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four
    const e5 = this.five
    const e6 = this.six
    const e7 = this.seven
    const e8 = this.eight
    const e9 = this.nine
    const e10 = this.ten
    const e11 = this.eleven

    TweenMax.staggerFrom(
      [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11],
      0.7,
      {
        opacity: 0,
        y: 50,
        delay: 0.8,
        ease: Power2.easeOut },
      0.12)
  }
  // handleScroll() {
  //   console.log(window.pageYOffset)
  //   if (window.pageYOffset > 20) {
  //     console.log('Hello')
  //   }
  // }
  render() {
    return (
      <section className="split-right split-right-container">
        <section
          className="split-right-about-me section-spacing"
        >
          <h4 ref={(c) => { this.one = c }}>About Me</h4>
          <p ref={(c) => { this.two = c }}>
          I am a JavaScript developer with strong skills in React with Redux, UX/UI design, and NodeJS with Express. I chose coding because it's an amazing way to help people and bring ideas to life. I work great independently and in pair programming situations, I love Git work flows, and I feel most natural in Test Driven Development/Agile development processes. As a former Peace Corps volunteer to Mongolia, I have a unique perspective on using tech to help others and using it to make education available to all.
          <br />
          <br />
          <span>
          Here are some of my technical skills that don't involve eagles, yurts, or dung-fires:</span></p>
          <ul
            className="skills"
            ref={(c) => { this.three = c }}
          >
            <li><span>HTML5, CSS3/Sass, HTML Canvas, Git</span></li>
            <li><span>JavaScript, jQuery, React with Redux and Router, EmberJS, NodeJS, ExpressJS</span></li>
            <li><span>Testing in Mocha, Chai, Enzyme, Jest, Selenium</span></li>
            <li><span>Fluent in Portuguese, Spanish, Mongolian</span></li>
          </ul>
        </section>
        <hr />
        <section className="split-right-experience section-spacing">
          <h4 ref={(c) => { this.four = c }}>Work</h4>

          <div
            className="work-experience"
            ref={(c) => { this.five = c }}
          >
            <div className="work-description">
              <h5>Front End Developer</h5>
              <p>Turing School of Software and Design</p>
            </div>
            <div className="work-year">
              <h5>2016-2017</h5>
            </div>
          </div>
          <div
            className="work-experience"
            ref={(c) => { this.five = c }}
          >
            <div className="work-description">
              <h5>English Teacher</h5>
              <p>Peace Corps - Mongolia</p>
            </div>
            <div className="work-year">
              <h5>2014-2016</h5>
            </div>
          </div>

          <div
            className="work-experience"
            ref={(c) => { this.six = c }}
          >
            <div className="work-description">
              <h5>Content Editor and Social Media Manager</h5>
              <p>Life After Study Abroad</p>
            </div>
            <div className="work-year">
              <h5>2013-2014</h5>
            </div>
          </div>

          <div
            className="work-experience"
            ref={(c) => { this.seven = c }}
          >
            <div className="work-description">
              <h5>Outreach Coordinator and University Representative</h5>
              <p>GoAbroad.com</p>
            </div>
            <div className="work-year">
              <h5>2012-2014</h5>
            </div>
          </div>
        </section>
        <hr />
        <section className="split-right-education section-spacing">
          <h4 ref={(c) => { this.eight = c }}>Education</h4>
          <div ref={(c) => { this.nine = c }}>
            <h5>Turing School of Software and Design</h5>
            <p>Front-End Engineering</p>
          </div>
          <div ref={(c) => { this.ten = c }}>
            <h5>Colorado State University</h5>
            <p>International Studies and Spanish: Language, Literature, and Culture</p>
            <p><a href="https://drive.google.com/file/d/0BzSq8-J8tFv6LTFOV3VlUXdENWM/view?usp=sharing" target="_blank" rel="noopener noreferrer">view resumé</a></p>
          </div>
        </section>

        <Link
          to="/Work"
        >
          <button
            className="button light-background-button"
            ref={(c) => { this.eleven = c }}
          >view projects
          </button>
        </Link>
      </section>
    )
  }
}
