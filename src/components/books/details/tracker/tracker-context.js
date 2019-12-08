import React from 'react';

export const TrackerContext = React.createContext({
  showForm: false,
  dateSelected: '',
  numPages: 0,
  changeState: () => {}
});
