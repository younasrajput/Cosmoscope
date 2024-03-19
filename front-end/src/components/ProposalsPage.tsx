import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Loading from "./Loading";

function ProposalsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const proposalStatus = 2;
  const pageLimit = 10;

  // fetchProposals function
  const fetchProposals = async () => {
    setLoading(true);
    try {
      const proposals = await fetchData(
        `cosmos/gov/v1beta1/proposals?proposal_status=${proposalStatus}&pagination.limit=${pageLimit}&pagination.reverse=true`,
      );

      console.log(proposals, "ini proposals");
      setData(proposals);
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
    fetchProposals();
  }, []);
  return (
    <>
      <main>
        {loading ? <Loading /> : <p>{JSON.stringify(data)}</p>}
        <p>proposals page</p>
      </main>
    </>
  );
}

export default ProposalsPage;
