/* eslint-disable react-hooks/exhaustive-deps */
import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { useEffect, useMemo, useState } from "react";
import { hashTx } from "../../../utils/hash";
import { TransactionDetail } from "../../../types/transaction.types";
import { BlockData } from "../../../types/block.types";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableContent from "./TransactionTableContent";

function TransactionsSection({
  data,
  txsLimit,
}: {
  data: BlockData | null;
  txsLimit?: number;
}) {
  const txs = data && data.block.data.txs;
  // decode transactions
  const convertedTxs =
    txs && txs.map((tx) => Uint8Array.from(atob(tx), (c) => c.charCodeAt(0)));

  const decodedTxs = [] as {
    hash: string;
    tx: DecodedTxRaw;
    height: string;
  }[];

  useEffect(() => {
    const decodeTransactions = (txsArray: Uint8Array[]) => {
      if (data) {
        txsArray.forEach((tx: Uint8Array) => {
          decodedTxs.push({
            hash: hashTx(tx),
            tx: decodeTxRaw(tx),
            height: data.block.header.height,
          });
        });
      }
    };

    if (convertedTxs) {
      decodeTransactions(convertedTxs);
    }
  }, [data, txs, txsLimit]);

  // extract transactions into list
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

    const isNotFromTheSameHeight: boolean =
      dataDetail[0]?.height != dataList[0]?.height;

    const newDataList =
      dataDetail.length > 0 && isNotFromTheSameHeight
        ? [...dataDetail, ...dataList]
        : dataList;

    if (newDataList) {
      newDataList.sort((a, b) => +b.height - +a.height);
      setDataList(newDataList);

      const limit = txsLimit || 40;
      setDataList(newDataList.slice(0, limit));
    }
  };

  useEffect(() => {
    setTransactionsHistory();
  }, [txs]);

  const memoizedDataList = useMemo(() => dataList, [dataList]);

  return (
    <>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full mt-10 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
          Transactions
        </h1>
      </section>

      <TransactionTableHeader />

      <section className="max-h-[31rem] overflow-auto mb-10">
        {memoizedDataList.map((data) => (
          <TransactionTableContent key={data.hash} data={data} />
        ))}
      </section>
    </>
  );
}

export default TransactionsSection;
