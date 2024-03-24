import { useEffect, useState } from "react";
import InfoSection from "./components/InfoSection";
import TransactionsSection from "./components/TransactionsSection";
import { fetchDataCH } from "../../services/fetchData";
import { BlockData } from "../../types/block.types";
import Swal from "sweetalert2";
import LatestBlockSection from "./components/LatestBlockSection";

function HomePage() {
  const [data, setData] = useState<BlockData | null>(null);

  // fetch data
  const fetchLatestBlock = async () => {
    try {
      const latestBlocks: BlockData = await fetchDataCH(
        "base/tendermint/v1beta1/blocks/latest",
      );

      setData(latestBlocks);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLatestBlock();

    const interval = setInterval(fetchLatestBlock, 7_000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen mx-10">
        <InfoSection />

        <>
          <LatestBlockSection data={data} /> <TransactionsSection data={data} />
        </>
      </main>
    </>
  );
}

export default HomePage;
