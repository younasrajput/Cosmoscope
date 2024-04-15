import { messageExtractor } from "../../../helpers/stringHelpers";
import { numberSplitter } from "../../../helpers/numberHelpers";
import { stringSimplifier } from "../../../helpers/stringHelpers";
import { TransactionDetail } from "../../../types/transaction.types";
import Tooltip from "../../../components/Tooltip";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import TxsMessage from "./TxsMessage";

function TransactionTableContent({ data }: { data: TransactionDetail }) {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const messages = messageExtractor(data.messages);

  return (
    <>
      <div className="flex border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 mt-2 gap-5 items-center font-semibold">
        {/* hash */}
        <div className="w-2/12 font-semibold max-lg:w-3/12 max-sm:w-6/12">
          <p className="text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-gray-700 to-violet-600 font-semibold group relative">
            <Link to={`/txs/${data.hash}`}>
              {isMobile && stringSimplifier(data.hash, 4)}
              {isTablet && stringSimplifier(data.hash, 5)}
              {isDesktop && stringSimplifier(data.hash, 7)}
            </Link>
            <Tooltip text={data.hash} />
          </p>
        </div>

        {/* height */}
        <div className="w-1/12 max-lg:w-2/12 max-sm:hidden">
          <Link to={`/blocks/${data.height}`}>
            <span className="bg-gradient-to-r hover:bg-gradient-to-l from-gray-700 to-violet-600 text-transparent bg-clip-text transition-all ease-in-out duration-150">
              {numberSplitter(+data.height)}
            </span>
          </Link>
        </div>

        {/* amount */}
        <div className="w-2/12 font-semibold max-lg:w-3/12 max-sm:text-[10px] max-sm:w-3/12">
          {Number(data?.amount || 0) / 1_000_000} ATOM
        </div>

        {/* message */}
        <div className="w-3/12 text-sm max-md:text-[10px] max-lg:w-4/12 max-sm:w-5/12 max-sm:text-[10px] max-sm:font-regular">
          <TxsMessage text={messages[0]} />{" "}
          {messages.length > 1 && (
            <TxsMessage text={`+${messages.length - 1}`} />
          )}
        </div>

        {/* memo */}
        <div className="w-4/12 text-sm max-lg:hidden">
          {data.memo ? (
            <span className="group relative">
              {isTablet && stringSimplifier(data.memo, 7)}
              {isDesktop && stringSimplifier(data.memo, 15)}
              <Tooltip text={data.memo} />
            </span>
          ) : (
            <span className="text-gray-400 italic font-light text-xs">
              transaction's memo
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default TransactionTableContent;
