import React, { Fragment } from "react";
import { connect } from "react-redux";

import SearchResult from "components/books/addBook/search/SearchResult";

const AddBookSearchResults = ({ searchResults }) => {
  // debugger;
  return (
    <Fragment>
      {searchResults.map(result => {
        return (
          <SearchResult
            result={result}
            key={result.volumeId}
            id={result.volumeId}
          />
        );
      })}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  searchResults: state.books.searchResults
});

export default connect(mapStateToProps)(AddBookSearchResults);
