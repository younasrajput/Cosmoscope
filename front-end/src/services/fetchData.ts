// FETCH DATA FROM COSMOS HUB API
export const fetchDataCH = async (endpoint: string) => {
  try {
    // const apiKey = import.meta.env.VITE_ALL_THAT_NODE_API_KEY;

    const response = await fetch(
      `https://cosmoshub.api.kjnodes.com/cosmos/${endpoint}`,
    );

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

// const response = await fetch(
//  `https://cosmos-mainnet-archive.allthatnode.com:1317/${endpoint}`,
//   { headers: { "x-allthatnode-api-key": apiKey } },
// );

// FETCH DATA FROM COIN GECKO API
export const fetchDataCG = async (endpoint: string) => {
  try {
    const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

    const response = await fetch(
      `https://api.coingecko.com/api/v3/${endpoint}`,
      { headers: { "x-cg-demo-api-key": apiKey } },
    );

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
