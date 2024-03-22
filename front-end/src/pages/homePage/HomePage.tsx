import { useEffect, useState } from "react";
import { fetchDataCH } from "../../services/fetchData";
import Loading from "../../components/Loading";
import { BlockData } from "../../types/block.types";
import InfoSection from "./components/InfoSection";
import Swal from "sweetalert2";

function HomePage() {
  const [data, setData] = useState<BlockData | null>(null);
  const [loading, setLoading] = useState(false);

  // fetch data
  const fetchLatestBlock = async () => {
    setLoading(true);
    try {
      const latestBlocks: BlockData = await fetchDataCH(
        "base/tendermint/v1beta1/blocks/latest",
      );
      console.log(latestBlocks, "ini blocks");
      setData(latestBlocks);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchLatestBlock();
  }, []);

  return (
    <>
      <main className="min-h-screen">
        <InfoSection />
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* <p>{JSON.stringify(data)}</p> */}
            <h1 className="">home page here!</h1>
          </>
        )}
      </main>
    </>
  );
}

export default HomePage;
