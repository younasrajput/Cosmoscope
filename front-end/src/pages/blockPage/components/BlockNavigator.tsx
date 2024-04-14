import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberSplitter } from "../../../helpers/numberHelpers";
import { Link } from "react-router-dom";

function BlockNavigator({ height }: { height: string }) {
  return (
    <>
      <div className="flex">
        <div className="flex p-1 rounded-full bg-white bg-opacity-30 border border-white ml-auto">
          <Link
            to={`/blocks/${+height - 1}`}
            className="rounded-full py-2 pl-5 pr-7 font-semibold hover:bg-white hover:shadow-md active:shadow-none transition-all ease-in-out duration-150 group"
          >
            <div className="flex items-center gap-5">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="xl"
                className="group-disabled:text-gray-400"
              />{" "}
              <span className="flex-col flex text-right">
                <span className="text-[10px] font-thin">prev block</span>
                <span>{numberSplitter(+height - 1)}</span>
              </span>
            </div>
          </Link>
          <Link
            to={`/blocks/${+height + 1}`}
            className="rounded-full py-2 pr-5 pl-7 font-semibold hover:bg-white hover:shadow-md active:shadow-none transition-all ease-in-out duration-150 group"
          >
            <div className="flex items-center gap-5">
              <span className="flex-col flex text-left">
                <span className="text-[10px] font-thin">next block</span>
                <span>{numberSplitter(+height + 1)}</span>
              </span>{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                size="xl"
                className="group-disabled:text-gray-400"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlockNavigator;
