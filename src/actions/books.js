import { API } from 'aws-amplify';
import { SEARCH_SUCCESS, SEARCH_FAIL } from 'actions/types';

export const searchBooks = (title, author) => async dispatch => {
  const titleFormat = title;
  const authorFormat = author;

  const searchBody = {
    bookTitle: titleFormat,
    bookAuthor: authorFormat
  };

  const body = JSON.stringify(searchBody);

  try {
    const res = await API.get('prod', '/books/search', {
      body:
        '{"bookTitle":"design+of+everyday+things", "bookAuthor":"don+norman"}'
    });

    debugger;
  } catch (err) {
    debugger;
    console.error(err);
  }
};

export const listBooks = () => async dispatch => {
  try {
    const res = await API.get('prod', '/books');
    debugger;
  } catch (err) {
    debugger;
  }
};
