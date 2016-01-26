import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import Styles from 'stylesheets/components/FlatButton.sass';

/**
 * FlatButton
 */
export default class FlatButton extends React.Component {
  handleOnClick = ::this.handleOnClick;

  handleOnClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <div className={Styles.FlatButton} onClick={this.handleOnClick}>
        {this.props.children}
      </div>
    )
  }
}

FlatButton.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
};
