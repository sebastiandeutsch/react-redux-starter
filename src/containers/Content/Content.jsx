import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import * as Actions from 'actions/Actions';

import Styles from './Content.sass';

/**
 * Displays the content
 */
export class Content extends React.Component {
  render() {
    return (
      <div className={Styles.Content}>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    app: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(Content);
