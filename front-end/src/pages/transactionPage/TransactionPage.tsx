/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDataCH } from "../../services/fetchData";
import toast from "react-hot-toast";
import { TransactionData } from "../../types/transaction.types";
import Loading from "../../components/Loading";
import {
  timeDifferenceCounter,
  timeFormatter,
} from "../../helpers/dateHelpers";
import { numberSplitter } from "../../helpers/numberHelpers";

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
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full my-5 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
          Transaction Info
        </h1>

        <div className="mt-5 text-md">
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">transaction hash</p>
            <p className="font-semibold">{hash}</p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">transaction time</p>
            <p className="font-semibold">
              {timeDifferenceCounter(
                (data && data?.tx_response.timestamp) || "",
              )}{" "}
              <span>
                ({timeFormatter((data && data?.tx_response.timestamp) || "")})
              </span>
            </p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">block height</p>
            <p className="font-semibold">
              <Link
                to={`/blocks/${data?.tx_response.height}`}
                className="hover:bg-gradient-to-r hover:from-gray-700 hover:to-violet-700 hover:text-transparent hover:bg-clip-text"
              >
                {numberSplitter((data && +data?.tx_response.height) || 0)}
              </Link>
            </p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">gas used/wanted</p>
            <p className="font-semibold">data di sini</p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">gas price</p>
            <p className="font-semibold">data di sini</p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">fee</p>
            <p className="font-semibold">data di sini</p>
          </div>

          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">memo</p>
            <p className="font-semibold">{data?.tx.body.memo || "-"}</p>
          </div>
        </div>
      </section>

      {loading && <Loading />}
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}

export default TransactionPage;
