import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { BlockData } from "../types/block.types";

function HomePage() {
  const [block, setBlock] = useState<BlockData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLatestBlock = async () => {
    setLoading(true);
    try {
      const data: BlockData = await fetchData("blocks/latest");
      setBlock(data);
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
        });
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
      <main className="min-h-screen bg-yellow-200">
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>{JSON.stringify(block)}</p>
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
