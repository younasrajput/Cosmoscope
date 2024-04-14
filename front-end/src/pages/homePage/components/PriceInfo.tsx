import { useEffect, useState } from "react";
import { fetchDataCG } from "../../../services/fetchData";
import { AtomData } from "../../../types/atom.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { timeDifferenceCounter } from "../../../helpers/dateHelpers";
import { numberSplitter } from "../../../helpers/numberHelpers";

function PriceInfo() {
  const [data, setData] = useState<AtomData | null>(null);

  const fetchAtomInfo = async () => {
    try {
      const atomInfo = await fetchDataCG(
        "coins/markets?vs_currency=usd&ids=cosmos&price_change_percentage=24h&locale=en",
      );
      setData(atomInfo[0] as AtomData);
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
      console.log(error);
    }
  };

  const fetchInterval = 5 * 60_000; // 5 minutes

  // useEffect(() => {
  //   fetchAtomInfo();

  //   const interval = setInterval(fetchAtomInfo, fetchInterval);

  //   return () => clearInterval(interval);
  // }, [fetchInterval]);

  return (
    <>
      {/* atom */}
      <div className="flex items-center justify-between">
        <p className="font-tenorSans text-lg flex gap-2 items-center">
          {/* TODO : import image instead of code */}
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <circle cx="16" cy="16" fill="#2e3148" r="16" />
              <g fill="#fff" transform="translate(6 5)">
                <path d="m10.02.53c-1.295 0-2.345 4.697-2.345 10.49s1.05 10.49 2.345 10.49c1.294 0 2.344-4.697 2.344-10.49s-1.05-10.49-2.344-10.49zm.162 20.387c-.148.198-.297.05-.297.05-.596-.692-.894-1.975-.894-1.975-1.043-3.357-.795-10.564-.795-10.564.49-5.721 1.382-7.073 1.685-7.373a.185.185 0 0 1 .238-.019c.44.313.81 1.617.81 1.617 1.09 4.048.991 7.848.991 7.848.099 3.308-.546 7.01-.546 7.01-.497 2.814-1.192 3.406-1.192 3.406z" />
                <path d="m19.118 5.8c-.645-1.124-5.24.303-10.267 3.186s-8.573 6.13-7.93 7.254c.645 1.124 5.241-.303 10.268-3.186s8.574-6.131 7.93-7.254zm-17.603 10.285c-.246-.03-.19-.234-.19-.234.302-.86 1.266-1.758 1.266-1.758 2.393-2.575 8.769-5.946 8.769-5.946 5.206-2.422 6.823-2.32 7.233-2.208a.185.185 0 0 1 .135.198c-.05.537-1 1.507-1 1.507-2.966 2.961-6.312 4.768-6.312 4.768-2.82 1.732-6.353 3.013-6.353 3.013-2.688.968-3.548.66-3.548.66z" />
                <path d="m19.095 16.277c.65-1.12-2.887-4.383-7.898-7.288-5.01-2.904-9.604-4.348-10.253-3.226-.65 1.123 2.888 4.383 7.9 7.288 5.013 2.904 9.602 4.348 10.251 3.226zm-17.72-10.081c-.097-.228.106-.283.106-.283.897-.17 2.157.217 2.157.217 3.427.78 9.538 4.608 9.538 4.608 4.705 3.292 5.427 4.743 5.535 5.154a.185.185 0 0 1 -.103.215c-.49.225-1.805-.11-1.805-.11-4.05-1.086-7.289-3.075-7.289-3.075-2.91-1.57-5.788-3.985-5.788-3.985-2.187-1.842-2.35-2.74-2.35-2.74l-.002-.001z" />
                <circle cx="9.995" cy="10.995" r="1.234" />
                <circle cx="15.055" cy="6.256" r="1" />
                <circle cx="3.306" cy="8.774" r="1" />
                <circle cx="8.539" cy="17.856" r="1" />
              </g>
            </g>
          </svg>
          <span className="max-md:text-xs">ATOM/USD</span>
        </p>
        {/* TODO : import image instead of text */}
        <p className="text-xs text-gray-500 text-right max-sm:w-full max-sm:text-[10px]">
          Powered by CoinGecko
        </p>
      </div>

      {/* price start */}
      <div className="flex gap-3 items-center">
        <span className="font-semibold text-4xl max-md:text-3xl max-sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-900">
          ${data?.current_price || 0}
        </span>

        {data && (
          <span
            className={`rounded-full bg-opacity-30 border text-sm text-center font-semibold py-1.5 px-3 ${
              data.price_change_percentage_24h < 0
                ? "bg-red-400 border-red-400"
                : "bg-green-400 border-green-400"
            } `}
          >
            <FontAwesomeIcon
              icon={
                data.price_change_percentage_24h < 0 ? faCaretDown : faCaretUp
              }
              className="mr-1"
              size="xs"
            />
            <span
              className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent text-xs ${
                data.price_change_percentage_24h < 0
                  ? "to-red-600"
                  : "to-green-600"
              }`}
            >
              {Math.abs(data.price_change_percentage_24h).toFixed(2)}%
            </span>
          </span>
        )}
      </div>
      {/* price end */}

      <p className="text-xs italic text-gray-500 max-sm:text-[10px]">
        last updated {timeDifferenceCounter(data?.last_updated || "")}
      </p>

      {/* info */}
      <div className="mt-3">
        {/* market cap */}
        <p className="max-2xl:flex max-2xl:justify-between max-2xl:items-center max-md:my-2">
          Market Cap:{" "}
          <span className="font-semibold text-lg max-md:text-md max-sm:text-sm">
            ${numberSplitter(data?.market_cap || 0)}
          </span>
        </p>

        {/* fully dilluted valuation */}
        <p className="max-2xl:flex max-2xl:justify-between max-2xl:items-center max-md:my-2">
          Fully Dilluted Valuation:{" "}
          <span className="font-semibold text-lg max-md:text-md max-sm:text-sm">
            ${numberSplitter(data?.fully_diluted_valuation || 0)}
          </span>
        </p>

        {/* circulating supply */}
        <p className="max-2xl:flex max-2xl:justify-between max-2xl:items-center max-md:my-2">
          Circulating Supply:{" "}
          <span className="font-semibold text-lg  max-md:text-md max-sm:text-sm">
            {numberSplitter(data?.circulating_supply || 0)}
          </span>
        </p>
      </div>
    </>
  );
}

export default PriceInfo;
