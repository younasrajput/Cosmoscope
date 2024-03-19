export const fetchData = async (endpoint: string) => {
  try {
    const apiKey = import.meta.env.VITE_ALL_THAT_NODE_API_KEY;

    const response = await fetch(
      `https://cosmos-mainnet-archive.allthatnode.com:1317/${endpoint}`,
      { headers: { "x-allthatnode-api-key": apiKey } },
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
