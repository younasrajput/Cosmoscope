import { numberSplitter } from "../../../helpers/numberHelpers";
import { timeDifferenceCounter } from "../../../helpers/dateHelpers";
import { timeFormatter } from "../../../helpers/dateHelpers";
import { BlockHistoryData } from "../../../types/block.types";

function LatestBlockTableContent({ block }: { block: BlockHistoryData }) {
  return (
    <>
      <div className="flex border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 mt-2 gap-5 items-center">
        <div className="w-2/12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-800 font-semibold">
            {numberSplitter(+block.height)}
          </span>
        </div>
        <div className="w-5/12 font-semibold">{block.proposer}</div>
        <div className="w-2/12 font-semibold">{block.txs}</div>
        <div className="w-3/12">
          <p className="font-semibold text-sm">
            {timeDifferenceCounter(block.time)}
          </p>
          <p className="text-xs">{timeFormatter(block.time)}</p>
        </div>
      </div>
    </>
  );
}

export default LatestBlockTableContent;
