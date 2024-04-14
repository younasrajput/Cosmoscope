/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataCH } from "../../services/fetchData";
import toast from "react-hot-toast";
import { TransactionData } from "../../types/transaction.types";

function TransactionPage() {
  const { hash } = useParams<{ hash: string }>();

  const [data, setData] = useState<TransactionData | null>(null);
  const [loading, setLoading] = useState(false);

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
      if (error instanceof Error && error.message === "Transaction not found") {
        toast.error("Transaction not found");
      } else {
        toast.error("Internal server error");
      }

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [hash]);

  return (
    <main className="mx-10">
      <p>ini transaction page {hash}</p>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full my-5 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
          Transaction Info
        </h1>
      </section>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}

export default TransactionPage;
