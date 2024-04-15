import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataCH } from "../../services/fetchData";
import toast from "react-hot-toast";
import { TransactionData } from "../../types/transaction.types";
import Loading from "../../components/Loading";

import TransactionInfo from "./components/TransactionInfo";
import MessageSection from "./components/MessageSection";

function TransactionPage() {
  const { hash } = useParams<{ hash: string }>();

  const [data, setData] = useState<TransactionData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch data
    const fetchTransaction = async () => {
      setLoading(true);
      try {
        const transaction: TransactionData = await fetchDataCH(
          `cosmos/tx/v1beta1/txs/${hash}`,
        );

        if (transaction.code === 3 || transaction.code === 2) {
          throw new Error("Transaction not found");
        }

        setData(transaction);
      } catch (error) {
        if (
          error instanceof Error &&
          error.message === "Transaction not found"
        ) {
          toast.error("Transaction not found");
        } else {
          toast.error("Internal server error");
        }

        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [hash]);

  return (
    <main className="mx-10">
      {loading ? (
        <Loading />
      ) : (
        <>
          <TransactionInfo data={data} />

          <MessageSection data={data} />
        </>
      )}
    </main>
  );
}

export default TransactionPage;
