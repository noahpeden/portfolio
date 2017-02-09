import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2 } from 'gsap'
import { Link } from 'react-router'
import Projects from '../projects/projects.js'

export default class ProjectsFullPage extends Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
  }
  componentDidMount() {
    this.gsapAnimationProjectCopy()
    this.gsapAnimationProject()
  }
  gsapAnimationProject() {
    const e0 = this.zero

    TweenMax.fromTo(
      e0, 0.5,
      {
        opacity: 0,
        ease: Power2.easeIn,
        x: -300,
      },
      {
        opacity: 1,
        ease: Power2.easeIn,
        delay: 0.2,
        x: 0,
      },
    )
  }
  gsapAnimationProjectCopy() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four
    const e5 = this.five

    TweenMax.staggerFromTo(
      [e1, e2, e3, e4, e5],
      0.5,
      {
        opacity: 0,
        y: 50,
        ease: Power2.easeOut },
      {
        opacity: 1,
        y: 0,
        delay: 0.7,
        ease: Power2.easeOut },
      0.12)
  }
  handlePaginationClickNext(e) {
    e.preventDefault()
    this.setState({ index: this.state.index + 1 })
    this.gsapAnimationProjectCopy()
    this.gsapAnimationProject()
    window.scrollTo(0, 0)
  }
  handlePaginationClickPrevious(e) {
    e.preventDefault()
    this.setState({ index: this.state.index - 1 })
    this.gsapAnimationProjectCopy()
    this.gsapAnimationProject()
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <article>
        <section
          className="split-left-container split-left-projects"
          id={Projects[this.state.index].id}
        >
          <div>
            <img
              src={Projects[this.state.index].image1}
              ref={(c) => { this.zero = c }}
            />
          </div>
        </section>

        <section className="split-right split-right-container split-right-projects">
          <section className="split-right-project-copy" id={Projects[this.state.index].id2}>
            <h4 ref={(c) => { this.one = c }}>{Projects[this.state.index].title}</h4>
            <p ref={(c) => { this.two = c }}>{Projects[this.state.index].description}</p>
            <p ref={(c) => { this.three = c }}>
              <a
                href={Projects[this.state.index].github}
                target="_blank"
                rel="noopener noreferrer"
              >view on GitHub</a>
            </p>
            <h6 ref={(c) => { this.four = c }}>Skills used: {Projects[this.state.index].skills}</h6>
            <a
              ref={(c) => { this.five = c }}
              href={Projects[this.state.index].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="button light-background-button"
              >view</button>
            </a>
            <div className="project-nav">
              <button
                onClick={this.handlePaginationClickPrevious.bind(this)}
                className={this.state.index === 0 ? 'project-nav-previous-none' : 'project-nav-previous'}
              >
                <div
                  className="arrow previous-arrow"
                />
                <p>&larr; {this.state.index === 0 ? '' : Projects[this.state.index - 1].title}</p>
              </button>
              <button
                onClick={this.handlePaginationClickNext.bind(this)}
                className={this.state.index === 5 ? 'project-nav-next-none' : 'project-nav-next'}
              >
                <p>{this.state.index === 5 ? '' : Projects[this.state.index + 1].title} &rarr;</p>
                <div
                  className="arrow next-arrow"
                />
              </button>
            </div>
          </section>
        </section>

      </article>
    )
  }
}
