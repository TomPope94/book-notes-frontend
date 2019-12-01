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
    const res = await API.get('books', '/books/search', {
      body: body
    });

    debugger;
  } catch (err) {
    debugger;
    console.error(err);
  }
};
