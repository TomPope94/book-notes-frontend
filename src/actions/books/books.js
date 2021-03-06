import { API } from 'aws-amplify';
import {
  SEARCH_SUCCESS,
  GET_ALL_BOOKS,
  ADD_BOOK,
  GET_BOOK,
  EDIT_BOOK,
  DELETE_BOOK,
  RESET_BOOK,
  EDIT_PLANNED_DATE,
  CHANGE_FILTER,
  RESET_BOOKS,
} from 'actions/types';
import { setAlert } from 'actions/alert';

export const addBook = (formData) => async (dispatch) => {
  const APIBody = {
    title: formData.title,
    author: formData.author,
    numPages: formData.pageCount,
    coverArt: formData.cover,
    categories: formData.categories,
    bookLanguage: formData.language,
    bookState: 'Created',
  };

  try {
    const res = await API.post('prod', '/books', {
      body: APIBody,
    });

    dispatch({
      type: ADD_BOOK,
      payload: res,
    });
  } catch (err) {
    dispatch(setAlert('Unable to add book... please try again', 'negative'));
  }
};

export const getBook = (bookId) => async (dispatch) => {
  try {
    const res = await API.get('prod', `/books/${bookId}`);
    dispatch({
      type: GET_BOOK,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const searchBooks = (title, author) => async (dispatch) => {
  const titleFormat = title.split(' ').join('+');
  const authorFormat = author.split(' ').join('+');

  const searchBody = {
    bookTitle: titleFormat,
    bookAuthor: authorFormat,
  };

  try {
    const res = await API.post('prod', '/books/search', {
      body: searchBody,
    });

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const filterBooks = (books, filter) => async (dispatch) => {
  try {
    const booksArr = [];
    // find how many groups there will be
    let allBooksByFilter = books.map((book) => {
      if (Array.isArray(book[filter])) {
        return book[filter].join(', ');
      } else {
        return book[filter];
      }
    });
    if (filter === 'bookAuthor' || filter === 'categories') {
      // find if one of the elements has a comma
      for (let i = 0; i < allBooksByFilter.length; i++) {
        if (allBooksByFilter[i].indexOf(', ') >= 0) {
          const subArr = allBooksByFilter[i].split(', ');
          allBooksByFilter.splice(i, 1, subArr);
        }
      }
      allBooksByFilter = allBooksByFilter.flat();
    }

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const uniqueGroups = allBooksByFilter.filter(onlyUnique);

    // loop through each one and allocate to the groups
    for (let i = 0; i < uniqueGroups.length; i++) {
      // cater for book[filter] being an array
      const groupBooks = books.filter((book) => {
        if (Array.isArray(book[filter])) {
          return book[filter].indexOf(uniqueGroups[i]) >= 0;
        } else {
          return book[filter] === uniqueGroups[i];
        }
      });
      const grouping = { name: uniqueGroups[i], books: groupBooks };
      booksArr.push(grouping);
    }

    dispatch({
      type: GET_ALL_BOOKS,
      payload: {
        filteredBooks: booksArr,
        rawBooks: books,
      },
    });
  } catch (err) {
    console.error('Something went wrong when filtering books');
    console.error(err);
  }
};

export const listBooks = (filter) => async (dispatch) => {
  try {
    const res = await API.get('prod', '/books');
    await dispatch(filterBooks(res, filter));
  } catch (err) {
    console.error(err);
  }
};

export const resetBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_BOOKS,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  try {
    await API.del('prod', `/books/${bookId}`);

    dispatch({
      type: DELETE_BOOK,
      payload: {
        bookId: bookId,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const editBook = (bookId, newData) => async (dispatch) => {
  try {
    await API.put('prod', `/books/${bookId}`, {
      body: newData,
    });

    dispatch({
      type: EDIT_BOOK,
      payload: newData,
    });
  } catch (err) {
    console.error(err);
  }
};

export const resetBook = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_BOOK,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updatePlannedDate = (bookId, newDate) => async (dispatch) => {
  try {
    await API.put('prod', `/books/planned-date/${bookId}`, {
      body: {
        datePlanned: newDate,
      },
    });

    dispatch({
      type: EDIT_PLANNED_DATE,
      payload: {
        datePlanned: newDate,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeFilter = (newFilter) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_FILTER,
      payload: newFilter,
    });
  } catch (err) {
    console.error(err);
  }
};
