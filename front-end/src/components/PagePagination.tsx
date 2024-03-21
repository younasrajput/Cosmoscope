import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PagePaginationProps<T> {
  pageOffset: number;
  setPageOffset: (offset: number) => void;
  pageLimit: number;
  data: T | null;
  itemCount: number;
}

function PagePagination<T>({
  pageOffset,
  setPageOffset,
  pageLimit,
  data,
  itemCount,
}: PagePaginationProps<T>) {
  return (
    <>
      {/* pagination container */}
      <div className="flex p-1 rounded-full bg-white bg-opacity-30 border border-white">
        <button
          className={`rounded-full py-2 px-5 font-semibold ${
            pageOffset === 0
              ? "pointer-events-none"
              : "hover:bg-white hover:shadow-md"
          } transition-all ease-in-out duration-150 group`}
          onClick={() => setPageOffset(pageOffset - pageLimit)}
          disabled={pageOffset === 0}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="group-disabled:text-gray-400"
          />
        </button>
        <button
          className={`rounded-full py-2 px-5 font-semibold ${
            data !== null && itemCount < pageLimit
              ? "pointer-events-none"
              : "hover:bg-white hover:shadow-md"
          } transition-all ease-in-out duration-150 group`}
          onClick={() => setPageOffset(pageOffset + pageLimit)}
          disabled={
            data !== null && data !== undefined && itemCount < pageLimit
          }
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="group-disabled:text-gray-400"
          />
        </button>
      </div>
    </>
  );
}

export default PagePagination;
