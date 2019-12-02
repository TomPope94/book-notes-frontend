import React from "react";
import { connect } from "react-redux";

const BookDetails = ({ selectedBook }) => {
  const titleText = selectedBook ? selectedBook.bookTitle : "No book selected";

  return <h1>{titleText}</h1>;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps)(BookDetails);
