import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";

function ValidatorsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetchValidators function
  const fetchValidators = async () => {
    setLoading(true);
    try {
      const validators = await fetchData("validatorsets/latest");
      console.log(validators, "ini validators");
      setData(validators);
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
    fetchValidators();
  }, []);

  return (
    <>
      <main>
        {loading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}
        <p>validator di sini</p>
      </main>
    </>
  );
}

export default ValidatorsPage;
