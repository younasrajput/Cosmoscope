/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlockData } from "../../types/block.types";
import { fetchDataCH } from "../../services/fetchData";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import TransactionsSection from "../homePage/components/TransactionsSection";
import NoTxs from "./components/NoTxs";
import BlockNavigator from "./components/BlockNavigator";
import BlockHeader from "./components/BlockHeader";

function BlockPage() {
  const { height } = useParams<{ height: string }>();

  const [data, setData] = useState<BlockData | null>(null);
  const [loading, setLoading] = useState(false);

  // fetch data
  const fetchBlockByHeight = async () => {
    setLoading(true);
    try {
      const block: BlockData = await fetchDataCH(
        `cosmos/base/tendermint/v1beta1/blocks/${height}`,
      );

      if (block.code === 3 || block.code === 2) {
        throw new Error("Block not found");
      }

      setData(block);
    } catch (error) {
      if (error instanceof Error && error.message === "Block not found") {
        toast.error("Block not found");
      } else {
        toast.error("Internal server error");
      }

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlockByHeight();
  }, [height]);

  return (
    <main className="mx-10">
      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            {/* navigation */}
            <BlockNavigator height={data.block.header.height} />
            {/* block header */}
            <BlockHeader data={data} />
            {/* transactions */}
            {data.block.data.txs.length > 0 ? (
              <TransactionsSection
                data={data}
                txsLimit={data.block.data.txs.length}
              />
            ) : (
              <NoTxs />
            )}
          </>
        )
      )}
    </main>
  );
}

export default BlockPage;
