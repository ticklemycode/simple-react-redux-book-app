import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item" 
          key={book.title}>{book.title}</li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BooksList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of the reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote  BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
export default connect(mapStateToProps, mapDispatchToProps)(BookList);