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

    if (search.length === 64) {
      navigate(`/txs/${search}`);
    } else if (search.length > 0) {
      navigate(`/blocks/${search}`);
    } else {
      return "";
    }
  };

  return (
    <>
      {" "}
      <form
        className="rounded-full bg-white bg-opacity-50 border-white border flex items-center justify-between gap-5 p-1 w-1/3 max-lg:w-1/2 max-md:w-full ml-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          ref={searchInput}
          placeholder="height/transaction"
          className="bg-transparent focus:border-none focus:outline-none px-5"
        />
        <button
          className="bg-white rounded-full w-7 h-7 shadow-md active:shadow-none"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
