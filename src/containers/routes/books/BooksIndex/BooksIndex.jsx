import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import * as Actions from 'actions/Actions';

export class BooksIndex extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <h2>All books</h2>
        <ol>
          {this.props.books.map((book, key) =>
            <li key={key}>
              {book.title}
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    books: state.books.collection
  }),
  (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(BooksIndex);
