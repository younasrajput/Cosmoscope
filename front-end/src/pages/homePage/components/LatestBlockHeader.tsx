import { numberSplitter } from "../../../helpers/numberHelpers";
import { timeDifferenceCounter } from "../../../helpers/dateHelpers";
import { BlockData } from "../../../types/block.types";

function LatestBlockHeader({ data }: { data: BlockData | null }) {
  return (
    <>
      <div className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full mt-10 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl font-bold">
          Latest Block
        </h1>

        {/* height */}
        <div className="flex mt-1 justify-between">
          <p>
            Height:{" "}
            <span className="font-semibold text-md text-transparent bg-gradient-to-r from-gray-700 to-violet-700 bg-clip-text">
              {data && numberSplitter(+data?.block.header.height)}
            </span>
          </p>

          {/* blocktime */}
          <p className="max-sm:hidden">
            Block Time:{" "}
            <span className="font-semibold text-md text-transparent bg-gradient-to-r from-gray-700 to-violet-700 bg-clip-text">
              {data && timeDifferenceCounter(data?.block.header.time)}
            </span>
          </p>

          {/* chain id */}
          <p>
            Chain ID:{" "}
            <span className="font-semibold text-md text-transparent bg-gradient-to-r from-gray-700 to-violet-700 bg-clip-text">
              {data && data?.block.header.chain_id}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LatestBlockHeader;
