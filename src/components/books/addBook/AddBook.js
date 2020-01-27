import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

import {
  BOOKS_HOME,
  BOOKS_ADD,
  BOOKS_MANUAL,
  BOOKS_SEARCH
} from "constants/routes";

import Breadcrumb from "components/nav/Breadcrumb";
import SearchBooksImage from "components/elements/images/SearchBooksImage";
import ManualEntryImage from "components/elements/images/ManualEntryImage";
import ManualIMG from "components/elements/images/add_book_assets_manual_entry.png";

const styles = {
  contentContainer: {
    height: "95%",
    color: "#0e3f4a",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column"
  },
  addBookChoices: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50
  },
  image: {
    cursor: "pointer",
    width: "35%",
    borderRadius: 15,
    boxShadow: "0 2px 5px #8a8fad",
    transform: "scale(1,1)"
  },
  title: {
    fontSize: "3rem",
    fontWeight: 200
  },
  underline: {
    width: "100%",
    height: 2,
    background: "linear-gradient(to right, #222641, transparent)"
  }
};

const AddBook = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [manualHover, setManualHover] = useState(false);
  const history = useHistory();

  const animateHover = (direction, target) => {
    const animateDirection = direction ? "normal" : "reverse";

    anime({
      targets: `.${target}`,
      duration: 150,
      easing: "linear",
      scaleX: [1, 1.05],
      scaleY: [1, 1.05],
      direction: animateDirection
    });
  };

  const handleSearchHover = () => {
    animateHover(!searchHover, "searchButton");
    setSearchHover(!searchHover);
  };

  const handleManualHover = () => {
    animateHover(!manualHover, "manualButton");
    setManualHover(!manualHover);
  };

  return (
    <Fragment>
      <div style={styles.contentContainer}>
        <Breadcrumb routes={{ BOOKS_HOME, BOOKS_ADD }} />
        <h1 style={styles.title}>Add Book.</h1>
        <span style={styles.underline} />
        <div style={styles.addBookChoices}>
          <SearchBooksImage
            style={styles.image}
            onClick={() => history.push(BOOKS_SEARCH.route)}
            className="searchButton"
            onMouseOver={() => handleSearchHover()}
            onMouseOut={() => handleSearchHover()}
          />

          <ManualEntryImage
            style={styles.image}
            onClick={() => history.push(BOOKS_MANUAL.route)}
            className="manualButton"
            onMouseOver={() => handleManualHover()}
            onMouseOut={() => handleManualHover()}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
