import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlockData } from "../../types/block.types";
import { fetchDataCH } from "../../services/fetchData";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import { hashTx } from "../../utils/hash";
import { toHex } from "@cosmjs/encoding";

function BlockPage() {
  const { height } = useParams<{ height: string }>();

  const [data, setData] = useState<BlockData | null>(null);
  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState<string>("");

  // decode transactions
  const convertedHash =
    hash && Uint8Array.from(atob(hash), (c) => c.charCodeAt(0));

  const decodedHash = convertedHash && toHex(convertedHash);

  // fetch data
  const fetchBlockByHeight = async () => {
    setLoading(true);
    try {
      const block: BlockData = await fetchDataCH(
        `cosmos/base/tendermint/v1beta1/blocks/${height}`,
      );

      setData(block);
      setHash(block.block_id.hash);
    } catch (error) {
      toast.error("Internal server error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlockByHeight();
  }, []);

  return (
    <>
      <p>{height}</p>
      <p>{decodedHash} ini hashnya</p>
      {loading ? <Loading /> : data && <p>{JSON.stringify(data)}</p>}
    </>
  );
}

export default BlockPage;
