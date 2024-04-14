import { BlockData } from "../../../types/block.types";
import { toHex } from "@cosmjs/encoding";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { numberSplitter } from "../../../helpers/numberHelpers";
import { copyToClipboard } from "../../../utils/copyToClipboard";
import { stringToUint8Array } from "../../../utils/stringToUint8Array";
import {
  timeDifferenceCounter,
  timeFormatter,
} from "../../../helpers/dateHelpers";

function BlockHeader({ data }: { data: BlockData }) {
  // making block hash
  const hash = data && data.block.header.app_hash;
  const convertedHash = hash && stringToUint8Array(hash);
  const blockHash = convertedHash && toHex(convertedHash).toUpperCase();

  return (
    <>
      {/* block header */}
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full my-5 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
          Block: {numberSplitter(+data.block.header.height)}{" "}
        </h1>

        <div className="mt-5 text-md">
          {/* block hash */}
          <div className="flex gap-10  my-1">
            <p className="w-1/6">block hash</p>
            <p className="font-semibold">
              {blockHash}
              <span
                className="ml-1 hover:cursor-pointer text-gray-500"
                onClick={() => copyToClipboard(blockHash)}
              >
                <FontAwesomeIcon icon={faCopy} size="sm" />
              </span>
            </p>
          </div>

          {/* block time */}
          <div className="flex gap-10 my-1">
            <p className="w-1/6">block time</p>
            <p className="font-semibold">
              {timeDifferenceCounter(data.block.header.time)}{" "}
              <span>({timeFormatter(data.block.header.time)})</span>
            </p>
          </div>

          {/* chain id */}
          <div className="flex gap-10 my-1">
            <p className="w-1/6">chain id</p>
            <p className="font-semibold">{data.block.header.chain_id}</p>
          </div>

          {/* number of transactions */}
          <div className="flex gap-10  my-1">
            <p className="w-1/6">number of tx</p>
            <p className="font-semibold">{data.block.data.txs.length}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockHeader;
