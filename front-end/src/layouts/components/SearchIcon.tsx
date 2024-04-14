import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchIcon() {
  return (
    <>
      <div className="rounded-full bg-white bg-opacity-50 border-white border gap-5 p-1 justify-end">
        <button
          className="bg-white rounded-full w-10 h-10 shadow-md"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
}

export default SearchIcon;
