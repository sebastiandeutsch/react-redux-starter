import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import Styles from 'stylesheets/containers/Layout.sass';

import Sidebar from 'containers/Sidebar';
import Content from 'containers/Content';
import DevTools from 'containers/DevTools';

import * as Actions from 'actions/Actions';

/**
 * Layout
 */
export class Layout extends React.Component {
  render() {
    return (
      <div className={Styles.Layout}>
        <Sidebar />
        <Content>
          {this.props.children}
        </Content>
        <DevTools />
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
)(Layout);
