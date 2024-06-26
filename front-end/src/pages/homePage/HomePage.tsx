import { useEffect, useState } from "react";
import InfoSection from "./components/InfoSection";
import TransactionsSection from "./components/TransactionsSection";
import { fetchDataCH } from "../../services/fetchData";
import { BlockData } from "../../types/block.types";
import LatestBlockSection from "./components/LatestBlockSection";
import toast from "react-hot-toast";

function HomePage() {
  const [data, setData] = useState<BlockData | null>(null);

  const fetchInterval = 5_000; // 5 seconds

  useEffect(() => {
    // fetch data
    const fetchLatestBlock = async () => {
      try {
        const latestBlocks: BlockData = await fetchDataCH(
          "cosmos/base/tendermint/v1beta1/blocks/latest",
        );

        setData(latestBlocks);
      } catch (error) {
        toast.error("Internal server error");
        console.log(error);
      }
    };

    fetchLatestBlock();

    const interval = setInterval(fetchLatestBlock, fetchInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen mx-10">
        <InfoSection />

        <LatestBlockSection data={data} />
        <TransactionsSection data={data} />
      </main>
    </>
  );
}

export default HomePage;
