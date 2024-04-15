import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { copyToClipboard } from "../../../utils/copyToClipboard";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  timeDifferenceCounter,
  timeFormatter,
} from "../../../helpers/dateHelpers";
import { numberSplitter } from "../../../helpers/numberHelpers";
import { Link } from "react-router-dom";
import { TransactionData } from "../../../types/transaction.types";

function TransactionInfo({ data }: { data: TransactionData | null }) {
  return (
    <>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full my-5 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <div className="flex items-center gap-2">
          <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
            Transaction Info
          </h1>
          {/* tx status */}
          <span
            className={`rounded-full bg-opacity-30 border text-center font-semibold py-1.5 px-3 ${
              data?.tx_response.code === 0
                ? "bg-green-400 border-green-400"
                : "bg-red-400 border-red-400"
            }`}
          >
            <span
              className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent text-xs max-md:text-[10px] ${
                data?.tx_response.code === 0 ? "to-green-600" : "to-red-600"
              }`}
            >
              {data?.tx_response.code === 0 ? "success" : "failed"}
            </span>
          </span>
        </div>

        {/* tx infos */}
        <div className="mt-5 text-md">
          {/* tx hash */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">
              transaction hash
              {data && (
                <span
                  className="md:hidden text-gray-500"
                  onClick={() => copyToClipboard(data.tx_response.txhash)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCopy} size="sm" />
                </span>
              )}
            </p>
            {data && (
              <>
                <span className="font-semibold max-md:truncate">
                  {data.tx_response.txhash}
                </span>
                <span
                  className="ml-1 hover:cursor-pointer text-gray-500 "
                  onClick={() => copyToClipboard(data.tx_response.txhash)}
                >
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="sm"
                    className="max-md:hidden"
                  />
                </span>
              </>
            )}
          </div>

          {/* tx time */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">transaction time</p>
            <p className="font-semibold">
              {data ? timeDifferenceCounter(data?.tx_response.timestamp) : ""}{" "}
              <span>
                ({data ? timeFormatter(data?.tx_response.timestamp) : ""})
              </span>
            </p>
          </div>

          {/* tx height */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">block height</p>
            <p className="font-semibold">
              <Link
                to={`/blocks/${data?.tx_response.height}`}
                className="bg-gradient-to-r from-gray-700 to-violet-600 text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-150 ease-in-out"
              >
                {numberSplitter((data && +data?.tx_response.height) || 0)}
              </Link>
            </p>
          </div>

          {/* gas used/wanted */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">gas used/wanted</p>
            <p className="font-semibold">
              {data ? numberSplitter(+data.tx_response.gas_used) : 0} /{" "}
              {data ? numberSplitter(+data.tx_response.gas_wanted) : 0}
            </p>
          </div>

          {/* tx fee */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">fee</p>
            <p className="font-semibold">
              {Number(data?.tx.auth_info.fee.amount[0].amount || 0) / 1_000_000}{" "}
              ATOM
            </p>
          </div>

          {/* tx memo */}
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">memo</p>
            <p className="font-semibold">{data?.tx.body.memo || "-"}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TransactionInfo;
