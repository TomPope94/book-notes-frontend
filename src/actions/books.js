import { API } from 'aws-amplify';
import {
  // SEARCH_SUCCESS,
  // SEARCH_FAIL,
  GET_ALL_BOOKS,
  GET_BOOK,
  ADD_BOOK,
  // EDIT_BOOK,
  DELETE_BOOK
} from 'actions/types';

export const addBook = formData => async dispatch => {
  const APIBody = {
    title: formData.title,
    author: formData.author,
    numPages: formData.pageCount,
    coverArt: formData.cover,
    categories: formData.categories,
    bookLanguage: formData.language
  };

  try {
    await API.post('prod', '/books', {
      body: APIBody
    });

    dispatch({
      type: ADD_BOOK,
      payload: APIBody
    });
  } catch (err) {
    console.error(err);
  }
};

export const getBook = bookId => async dispatch => {
  try {
    const res = await API.get('prod', `/books/${bookId}`);
    dispatch({
      type: GET_BOOK,
      payload: res
    });
  } catch (err) {
    console.error(err);
  }
};

// export const searchBooks = (title, author) => async dispatch => {
//   const titleFormat = title;
//   const authorFormat = author;

//   const searchBody = {
//     bookTitle: titleFormat,
//     bookAuthor: authorFormat
//   };

//   try {
//     const res = await API.get("prod", "/books/search", {
//       body: searchBody
//     });

//     debugger;
//   } catch (err) {
//     debugger;
//     console.error(err);
//   }
// };

export const listBooks = () => async dispatch => {
  try {
    const res = await API.get('prod', '/books');

    dispatch({
      type: GET_ALL_BOOKS,
      payload: res
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteBook = bookId => async dispatch => {
  try {
    await API.del('prod', `/books/${bookId}`);
    dispatch({
      type: DELETE_BOOK,
      payload: bookId
    });
  } catch (err) {
    console.error(err);
  }
};
