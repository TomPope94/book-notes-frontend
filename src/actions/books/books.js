import { API } from "aws-amplify";
import {
  // SEARCH_SUCCESS,
  // SEARCH_FAIL,
  GET_ALL_BOOKS,
  GET_BOOK,
  ADD_BOOK,
  EDIT_BOOK,
  DELETE_BOOK,
  EDIT_PLANNED_DATE,
  CHANGE_FILTER,
  RESET_BOOKS
} from "actions/types";
import moment from "moment";

export const addBook = formData => async dispatch => {
  const APIBody = {
    title: formData.title,
    author: formData.author,
    numPages: formData.pageCount,
    coverArt: formData.cover,
    categories: formData.categories,
    bookLanguage: formData.language,
    bookState: "Created"
  };

  try {
    await API.post("prod", "/books", {
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
    const res = await API.get("prod", `/books/${bookId}`);
    dispatch({
      type: GET_BOOK,
      payload: res
    });
  } catch (err) {
    console.error(err);
  }
};

export const searchBooks = (title, author) => async dispatch => {
  const titleFormat = title;
  const authorFormat = author;

  const searchBody = {
    bookTitle: titleFormat,
    bookAuthor: authorFormat
  };

  try {
    const res = await API.get("prod", "/books/search", {
      body: searchBody
    });

    debugger;
  } catch (err) {
    debugger;
    console.error(err);
  }
};

export const listBooks = filter => async dispatch => {
  try {
    const res = await API.get("prod", "/books");

    const booksArr = [];

    // find how many groups there will be
    const allBooksByFilter = res.map(book => book[filter]);
    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const uniqueGroups = allBooksByFilter.filter(onlyUnique);

    // loop through each one and allocate to the groups
    for (let i = 0; i < uniqueGroups.length; i++) {
      const groupBooks = res.filter(book => book[filter] === uniqueGroups[i]);
      const grouping = { name: uniqueGroups[i], books: groupBooks };
      booksArr.push(grouping);
    }

    dispatch({
      type: GET_ALL_BOOKS,
      payload: booksArr
    });
  } catch (err) {
    console.error(err);
  }
};

export const resetBooks = () => async dispatch => {
  try {
    dispatch({
      type: RESET_BOOKS
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteBook = bookId => async dispatch => {
  try {
    await API.del("prod", `/books/${bookId}`);
    dispatch({
      type: DELETE_BOOK,
      payload: bookId
    });
  } catch (err) {
    console.error(err);
  }
};

export const editBook = (bookId, newData) => async dispatch => {
  try {
    await API.put("prod", `/books/${bookId}`, {
      body: newData
    });
    dispatch({
      type: EDIT_BOOK,
      payload: newData
    });
  } catch (err) {
    console.error(err);
  }
};

export const updatePlannedDate = (bookId, newDate) => async dispatch => {
  try {
    await API.put("prod", `/books/planned-date/${bookId}`, {
      body: {
        datePlanned: newDate
      }
    });

    dispatch({
      type: EDIT_PLANNED_DATE,
      payload: {
        datePlanned: newDate
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeFilter = newFilter => async dispatch => {
  try {
    dispatch({
      type: CHANGE_FILTER,
      payload: {
        newFilter: newFilter
      }
    });
  } catch (err) {
    console.error(err);
  }
};
