import { API } from 'aws-amplify';
import { GET_DAILY_TRACKING, ADD_DAILY_TRACKING } from 'actions/types';
import moment from 'moment';

export const getDailyTracking = bookId => async dispatch => {
  try {
    const res = await API.get('prod', `/books/progress/track/${bookId}`);

    let cleanResult;
    if (res.length > 0) {
      cleanResult = res.map(day => {
        return {
          numPages: day.metaData.numPages,
          date: day.observedDate
        };
      });
    } else {
      cleanResult = res;
    }

    dispatch({
      type: GET_DAILY_TRACKING,
      payload: cleanResult
    });
  } catch (err) {
    debugger;
  }
};

export const addTracking = (bookId, formData) => async dispatch => {
  const formattedDate = moment(formData.date, 'YYYY-MM-DD').format('YYYYMMDD');

  const numPages = parseInt(formData.numPages);

  const APIBody = {
    date: formattedDate,
    numPages: numPages,
    observable: 'reading'
  };
  try {
    const res = await API.post('prod', `/books/progress/track/${bookId}`, {
      body: APIBody
    });
    // debugger;
    const cleanResult = {
      numPages: res.data.metaData.numPages,
      date: res.data.observedDate
    };

    dispatch({
      type: ADD_DAILY_TRACKING,
      payload: cleanResult
    });
  } catch (err) {
    console.error(err);
  }
};
