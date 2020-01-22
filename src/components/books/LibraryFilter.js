import React, { useState } from "react";
import { connect } from "react-redux";
import anime from "animejs";

import { changeFilter, resetBooks, listBooks } from "actions/books/books";

const styles = {
  filterContainer: {
    position: "fixed",
    right: 20,
    top: "10vh",
    background: "#fff",
    boxShadow: "0 1px 5px rgba(1,1,1,0.2)",
    padding: 15,
    borderRadius: 10,
    zIndex: 5,
    transform: "translateX(85%)",
    transformOrigin: "right",
    display: "flex"
  },
  filterTitle: {
    margin: 0,
    marginBottom: "1rem"
  },
  radioButton: {
    cursor: "pointer",
    marginRight: 10,
    marginLeft: 10
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    width: "25%"
  },
  filterForm: {
    display: "flex"
  }
};

const LibraryFilter = ({ changeFilter, resetBooks, listBooks, filter }) => {
  const [filterExpand, setFilterExpand] = useState(false);
  const [radio, setRadio] = useState(filter);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleChange = async newState => {
    await setRadio(newState);

    changeFilter(newState);
    resetBooks();
    await delay(500);
    listBooks(newState);
  };

  const animation = direction => {
    const animateDirection = direction ? "normal" : "reverse";

    anime({
      targets: ".filterContainer",
      duration: 300,
      easing: "linear",
      translateX: ["85%", 0],
      direction: animateDirection
    });
  };

  const handleClick = () => {
    animation(!filterExpand);

    setFilterExpand(!filterExpand);
  };

  return (
    <div style={styles.filterContainer} className="filterContainer">
      <div style={styles.arrow} onClick={() => handleClick()}>
        {filterExpand ? "Close" : "Open"}
      </div>
      <div>
        <h3 style={styles.filterTitle}>Group By:</h3>
        <form style={styles.filterForm}>
          <label style={styles.radioButton}>
            <input
              type="radio"
              name="bookFilter"
              value="bookState"
              checked={radio === "bookState"}
              onChange={() => handleChange("bookState")}
            />
            Status
          </label>
          <label style={styles.radioButton}>
            <input
              type="radio"
              name="bookFilter"
              value="categories"
              checked={radio === "categories"}
              onChange={() => handleChange("categories")}
            />
            Category
          </label>
          <label style={styles.radioButton}>
            <input
              type="radio"
              name="bookFilter"
              value="bookAuthor"
              checked={radio === "bookAuthor"}
              onChange={() => handleChange("bookAuthor")}
            />
            Author
          </label>
          <label style={styles.radioButton}>
            <input
              type="radio"
              name="bookFilter"
              value="bookLanguage"
              checked={radio === "bookLanguage"}
              onChange={() => handleChange("bookLanguage")}
            />
            Language
          </label>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.books.filter
});

export default connect(mapStateToProps, {
  changeFilter,
  resetBooks,
  listBooks
})(LibraryFilter);
