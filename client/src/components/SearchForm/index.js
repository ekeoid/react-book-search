import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book-input">Book Search</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book-input"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a book to search..."
          id="breed"
        />
        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))} 
        </datalist>*/}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;