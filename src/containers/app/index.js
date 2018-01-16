import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div styleName='container'>
        <h1>React App</h1>
        <Link to='/'>Home</Link>

        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(App, styles)
