import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SplitLeftMain from './SplitLeftMain'
import SplitRightMain from './SplitRightMain'

export default class Application extends Component {
  render() {
    return (
      <article className="split-container">
        <SplitLeftMain />
        <SplitRightMain />
        {this.props.children}
      </article>
    )
  }
}
