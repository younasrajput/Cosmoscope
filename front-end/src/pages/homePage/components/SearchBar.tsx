import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const searchInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = searchInput.current?.value || "";

    navigate(`/blocks/${search}`);
  };

  return (
    <>
      {" "}
      <form
        className="rounded-full bg-white bg-opacity-50 border-white border flex items-center justify-between gap-5 p-1"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          ref={searchInput}
          placeholder="find block by height..."
          className="bg-transparent focus:border-none focus:outline-none px-5"
        />
        <button
          className="bg-white rounded-full w-10 h-10 shadow-md"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
