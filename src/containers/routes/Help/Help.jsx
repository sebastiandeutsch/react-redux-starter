import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import Styles from './Help.sass';

/**
 * Layout
 */
export default class Help extends React.Component {
  render() {
    return (
      <div className={Styles.Header}>
        That's a help page with the ID: {this.props.params.id}
      </div>
    )
  }
}
