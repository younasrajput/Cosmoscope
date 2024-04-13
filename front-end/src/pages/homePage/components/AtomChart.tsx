import { useEffect, useState } from "react";
import { fetchDataCG } from "../../../services/fetchData";
import {
  ExtractedChartData,
  MarketChartData,
} from "../../../types/chart.types";
import { timeFormatter } from "../../../helpers/dateHelpers";
import Loading from "../../../components/Loading";
import { AreaChart } from "@tremor/react";
import { usdFormatter } from "../../../helpers/numberHelpers";

function AtomChart() {
  const [data, setData] = useState<ExtractedChartData[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchChartData = async () => {
    setLoading(true);
    try {
      const marketChart: MarketChartData = await fetchDataCG(
        "coins/cosmos/market_chart?vs_currency=usd&days=14",
      );

      const chartData: ExtractedChartData[] = marketChart.prices.map(
        (price) => {
          return { date: timeFormatter(price[0], false), price: price[1] };
        },
      );

      setData(chartData);
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInterval = 5 * 60_000; // 5 minutes

  useEffect(() => {
    fetchChartData();

    const interval = setInterval(fetchChartData, fetchInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <Loading mt={0} />
      ) : (
        data && (
          <AreaChart
            className="h-full w-full text-xs bg-white bg-opacity-50 border border-white p-5 rounded-3xl shadow-md max-lg:h-72"
            data={data}
            index="date"
            categories={["price"]}
            colors={["violet-800"]}
            valueFormatter={usdFormatter}
            yAxisWidth={60}
            showAnimation={true}
            minValue={9}
            maxValue={15}
          />
        )
      )}
    </>
  );
}

export default AtomChart;
