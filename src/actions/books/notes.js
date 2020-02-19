import { API } from 'aws-amplify';
import { UPDATE_NOTES } from 'actions/types';

export const updateNotes = (
  newNotes,
  notesMetaData,
  bookId
) => async dispatch => {
  const APIBody = {
    bookNotes: {
      notesContent: newNotes,
      notesCreated: notesMetaData.notesCreated,
      notesLastEdited: notesMetaData.notesLastEdited,
      notesNumEdited: notesMetaData.notesNumEdited + 1
    }
  };

  try {
    const res = await API.post('prod', `/notes/${bookId}`, {
      body: APIBody
    });

    debugger;
  } catch (err) {
    console.error(err);
  }
};
