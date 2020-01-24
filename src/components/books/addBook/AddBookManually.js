import React from "react";

import Breadcrumb from "components/nav/Breadcrumb";
import AddBookDetails from "components/books/addBook/AddBookDetails";

import { BOOKS_HOME, BOOKS_ADD, BOOKS_MANUAL } from "constants/routes";

const AddBookManually = () => {
  return (
    <div>
      <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD, BOOKS_MANUAL }} />
      <h1>For manual entry...</h1>
      <AddBookDetails />
    </div>
  );
};

export default AddBookManually;
