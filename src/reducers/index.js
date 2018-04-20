import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import SelectedBookReducer from '../reducers/reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBookReducer
});

export default rootReducer;
