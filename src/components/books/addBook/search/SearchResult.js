import React from "react";

const SearchResult = ({ result, ...props }) => {
  const styles = {
    resultContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: 50,
      boxShadow: "0 1px 2px grey",
      padding: 30,
      borderRadius: 15,
      height: 300
    },
    topDetails: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "30%",
      marginRight: 20,
      height: "100%"
    },
    imageContainer: {
      width: "10%",
      marginRight: 20,
      minWidth: 200
    },
    subDetails: {
      mariginRight: 20,
      width: "30%"
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      width: "30%",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }
  };
  const {
    title,
    image,
    pageCount,
    authors,
    categories,
    published,
    language
  } = result;

  const imagesAvailable = image ? Object.keys(image) : null;
  const numImages = image ? imagesAvailable.length : null;
  return (
    <div style={styles.resultContainer}>
      {image ? (
        <img
          style={styles.imageContainer}
          src={image[imagesAvailable[numImages - 1]]}
        />
      ) : (
        <div style={styles.imageContainer}>No Image Available...</div>
      )}
      <div style={styles.topDetails}>
        <h3>Title: {title}</h3>
        <h3>Author(s): {authors ? authors.join(", ") : "NA"}</h3>
      </div>
      <div style={styles.subDetails}>
        <ul>
          <li>Published: {published}</li>
          <li>Page count: {pageCount}</li>
          <li>Categories: {categories ? categories.join(", ") : "NA"}</li>
          <li>Language: {language}</li>
        </ul>
      </div>
      <div style={styles.buttonsContainer}>
        <button>Add to Libary</button>
        <button>Edit and Add</button>
      </div>
    </div>
  );
};

export default SearchResult;
