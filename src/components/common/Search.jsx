import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="col-sm-6 mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control mb-3"
          type="search"
          role="searchbox"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Students"
        ></input>
      </form>
    </div>
  );
};

export default Search;
