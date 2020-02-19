import { API } from 'aws-amplify';
import { UPDATE_NOTES } from 'actions/types';

export const updateNotes = (notesObj, bookId) => async dispatch => {
  const APIBody = {
    bookNotes: {
      ...notesObj
    }
  };

  try {
    const res = await API.put('prod', `/books/notes/${bookId}`, {
      body: APIBody
    });

    debugger;
  } catch (err) {
    console.error(err);
  }
};
