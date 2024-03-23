import messageExtractor from "../../../helpers/messageExtractor";
import numberSplitter from "../../../helpers/numberSplitter";
import stringSimplifier from "../../../helpers/stringSimplifier";
import { TransactionDetail } from "../../../types/transaction.types";

function TransactionTableContent({ data }: { data: TransactionDetail }) {
  return (
    <>
      <div className="flex border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 mt-2 gap-5 items-center font-semibold">
        {/* hash */}
        <div className="w-2/12 font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-800 font-semibold group relative">
            {stringSimplifier(data.hash)}
            <span className="z-10 left-5 top-3 absolute px-5 py-1.5 rounded-full bg-white text-sm text-gray-700 border border-violet-500 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
              {data.hash}
            </span>
          </span>
        </div>

        {/* height */}
        <div className="w-1/12">{numberSplitter(+data.height)}</div>

        {/* amount */}
        <div className="w-2/12 font-semibold">
          {Number(data?.amount || 0) / 1_000_000} ATOM
        </div>

        {/* message */}
        <div className="w-3/12 text-sm">{messageExtractor(data.messages)}</div>

        {/* memo */}
        <div className="w-4/12 text-sm">
          {data.memo ? (
            <span className="group relative ">
              {stringSimplifier(data.memo, 20)}
              <span className="z-10 left-5 top-3 absolute px-5 py-1.5 rounded-2xl bg-white text-sm text-gray-700 border border-violet-500 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {data.memo}
              </span>
            </span>
          ) : (
            <span className="text-gray-400 italic font-light">
              transaction's memo
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default TransactionTableContent;
