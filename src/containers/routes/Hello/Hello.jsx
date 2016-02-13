import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import FlatButton from 'components/FlatButton';
import * as Actions from 'actions/Actions';

import Styles from './Hello.sass';

/**
 * Layout
 */
export class Hello extends React.Component {
  handleChangeSomethingClick = ::this.handleChangeSomethingClick;
  handleChangeSomethingElseClick = ::this.handleChangeSomethingElseClick;
  handleChangeSomethingAsyncClick = ::this.handleChangeSomethingAsyncClick;

  handleChangeSomethingClick(event) {
    this.props.actions.changeSomething("something");
  }

  handleChangeSomethingElseClick(event) {
    this.props.actions.changeSomething("something else");
  }

  handleChangeSomethingAsyncClick(event) {
    this.props.actions.changeSomethingAsync("something async");
  }

  render() {
    return (
      <div className={Styles.Header}>
        <h2>
          Hello World!
        </h2>

        <FlatButton onClick={this.handleChangeSomethingClick}>
          Do somehting!
        </FlatButton>

        <FlatButton onClick={this.handleChangeSomethingElseClick}>
          Do somehting else!
        </FlatButton>

        <FlatButton onClick={this.handleChangeSomethingAsyncClick}>
          Do somehting async!
        </FlatButton>
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
)(Hello);
