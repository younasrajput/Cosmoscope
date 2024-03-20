import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Loading from "../components/Loading";
import { BlockData } from "../types/block.types";

function HomePage() {
  const [data, setData] = useState<BlockData | null>(null);
  const [loading, setLoading] = useState(false);

  // fetchLatestBlock function
  const fetchLatestBlock = async () => {
    setLoading(true);
    try {
      const latestBlocks: BlockData = await fetchData("blocks/latest");
      setData(latestBlocks);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBlock();
  }, []);

  return (
    <>
      <main className="min-h-screen">
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>{JSON.stringify(data?.block.data.txs)}</p>
            <h1 className="min-h-screen">home page here!</h1>
            <h1 className="min-h-screen">home page here!</h1>
            <h1 className="min-h-screen">home page here!</h1>
          </>
        )}
      </main>
    </>
  );
}

export default HomePage;
