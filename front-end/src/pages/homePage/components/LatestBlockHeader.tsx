import { numberSplitter } from "../../../helpers/numberHelpers";
import { timeDifferenceCounter } from "../../../helpers/dateHelpers";
import { BlockData } from "../../../types/block.types";

function LatestBlockHeader({ data }: { data: BlockData }) {
  return (
    <>
      <div className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full mt-10">
        <h1 className="font-tenorSans text-3xl font-bold">Latest Block</h1>

        <div className="flex mt-1 justify-between">
          <p>
            Height:{" "}
            <span className="font-semibold text-lg">
              {numberSplitter(+data?.block.header.height)}
            </span>
          </p>
          <p>
            Block Time:{" "}
            <span className="font-semibold text-lg">
              {timeDifferenceCounter(data?.block.header.time)}
            </span>
          </p>
          <p>
            Chain ID:{" "}
            <span className="font-semibold text-lg">
              {data?.block.header.chain_id}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LatestBlockHeader;
