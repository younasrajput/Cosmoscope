/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from "react";
import { BlockData, BlockHistoryData } from "../../../types/block.types";
import LatestBlockHeader from "./LatestBlockHeader";
import LatestBlockTableHeader from "./LatestBlockTableHeader";
import LatestBlockTableContent from "./LatestBlockTableContent";

function LatestBlockSection({ data }: { data: BlockData | null }) {
  const [dataList, setDataList] = useState<BlockHistoryData[]>([]);

  const setBlockHistory = async () => {
    const dataDetail = data &&
      data.block.header.height !== dataList[0]?.height && {
        height: data.block.header.height,
        proposer: data.block.header.proposer_address,
        txs: data.block.data.txs.length,
        time: data.block.header.time,
      };

    const newDataList = dataDetail ? [dataDetail, ...dataList] : dataList;

    if (newDataList.length > 25) {
      newDataList.pop();
    }

    newDataList.sort((a, b) => +b.height - +a.height);

    setDataList(newDataList);
  };

  useEffect(() => {
    setBlockHistory();
  }, [data]);

  const memoizedDataList = useMemo(() => dataList, [dataList]);

  return (
    <>
      <section>
        <LatestBlockHeader data={data} />

        <LatestBlockTableHeader />

        {/* table content */}
        <section className="max-h-[31rem] overflow-auto">
          {memoizedDataList.map((block, index) => (
            <LatestBlockTableContent key={index} block={block} />
          ))}
        </section>
      </section>
    </>
  );
}

export default LatestBlockSection;
