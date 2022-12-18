import React from "react";
export default function Search() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="search"
            autoComplete="off"
            placeholder="Search a city..."
            id="cityInput"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
