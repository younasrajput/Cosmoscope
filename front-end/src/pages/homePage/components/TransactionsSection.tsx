/* eslint-disable react-hooks/exhaustive-deps */
import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { useEffect, useState } from "react";
import { hashTx } from "../../../utils/hash";
import { TransactionDetail } from "../../../types/transaction.types";
import stringSimplifier from "../../../helpers/stringSimplifier";
import messageExtractor from "../../../helpers/messageExtractor";
import { BlockData } from "../../../types/block.types";
import numberSplitter from "../../../helpers/numberSplitter";

function TransactionsSection({ data }: { data: BlockData }) {
  const txs = data.block.data.txs;

  // decode transactions
  const convertedTxs = txs.map((tx) =>
    Uint8Array.from(atob(tx), (c) => c.charCodeAt(0)),
  );

  const decodedTxs = [] as { hash: string; tx: DecodedTxRaw; height: string }[];

  const decodeTransactions = (txsArray: Uint8Array[]) => {
    txsArray.forEach((tx: Uint8Array) => {
      decodedTxs.push({
        hash: hashTx(tx),
        tx: decodeTxRaw(tx),
        height: data.block.header.height,
      });
    });
  };

  useEffect(() => {
    decodeTransactions(convertedTxs);
  }, [txs]);

  // extract transactions
  const [dataList, setDataList] = useState<TransactionDetail[] | []>([]);

  const setTransactionsHistory = () => {
    const dataDetail =
      decodedTxs &&
      decodedTxs.map((decodedTx) => {
        return {
          height: decodedTx.height,
          hash: decodedTx.hash,
          amount: decodedTx.tx.authInfo.fee?.amount[0].amount,
          messages: decodedTx.tx.body.messages,
          memo: decodedTx.tx.body.memo,
        };
      });

    const newDataList = dataDetail && dataDetail.concat(dataList);

    if (newDataList) {
      setDataList(newDataList);

      // {{IF NEEDED}}
      // const limit = 20;
      // setDataList(newDataList.slice(0, limit));
    }
  };

  useEffect(() => {
    setTransactionsHistory();
  }, [txs]);

  return (
    <>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full mt-10">
        <h1 className="font-tenorSans font-bold text-3xl">Transactions</h1>
      </section>

      <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 mt-5 gap-5 items-center">
        <div className="w-2/12">tx hash</div>
        <div className="w-1/12">height</div>

        <div className="w-2/12">amount</div>
        <div className="w-3/12">messages</div>
        <div className="w-4/12">memo</div>
      </div>

      <section className="max-h-[31rem] overflow-auto mb-16">
        {dataList &&
          dataList.map((data, index) => (
            <div
              key={index}
              className="flex border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 mt-2 gap-5 items-center font-semibold"
            >
              {/* hash */}
              <div className="w-2/12 truncate font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-800 font-semibold">
                  {stringSimplifier(data.hash, 7)}
                </span>
              </div>

              {/* height */}
              <div className="w-1/12">{numberSplitter(+data.height)}</div>

              {/* amount */}
              <div className="w-2/12 font-semibold">
                {Number(data?.amount || 0) / 1_000_000} ATOM
              </div>

              {/* message */}
              <div className="w-3/12 text-sm">
                {messageExtractor(data.messages)}
              </div>

              {/* memo */}
              <div className="w-4/12 truncate hover:text-clip text-sm">
                {data.memo ? (
                  <span>{data.memo}</span>
                ) : (
                  <span className="text-gray-400 italic font-light">
                    transaction's memo
                  </span>
                )}
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

export default TransactionsSection;
