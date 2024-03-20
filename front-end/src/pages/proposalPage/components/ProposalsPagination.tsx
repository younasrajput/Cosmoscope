import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProposalsPaginationProps } from "../../../types/proposal.types";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function ProposalsPagination({
  pageOffset,
  setPageOffset,
  pageLimit,
  data,
}: ProposalsPaginationProps) {
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
            data !== null && data.proposals.length < pageLimit
              ? "pointer-events-none"
              : "hover:bg-white hover:shadow-md"
          } transition-all ease-in-out duration-150 group`}
          onClick={() => setPageOffset(pageOffset + pageLimit)}
          disabled={data !== null && data.proposals.length < pageLimit}
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

export default ProposalsPagination;
