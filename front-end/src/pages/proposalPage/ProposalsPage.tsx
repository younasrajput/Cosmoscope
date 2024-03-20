import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import Loading from "../../components/Loading";
import { ProposalData } from "../../types/proposal.types";
import ProposalsHeader from "./components/ProposalsHeader";
import ProposalsTableHeader from "./components/ProposalsTableHeader";
import ProposalsTableContent from "./components/ProposalsTableContent";

function ProposalsPage() {
  const [data, setData] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const [proposalStatus, setProposalStatus] = useState("2");
  const [pageOffset, setPageOffset] = useState(0);
  const pageLimit = 15;

  // fetchProposals function
  const fetchProposals = async () => {
    setLoading(true);
    try {
      const proposals: ProposalData = await fetchData(
        `cosmos/gov/v1beta1/proposals?proposal_status=${proposalStatus}&pagination.limit=${pageLimit}&pagination.offset=${pageOffset}&pagination.reverse=true`,
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
  }, [proposalStatus, pageOffset]);

  return (
    <>
      <main className="py-5">
        <ProposalsHeader
          setProposalStatus={setProposalStatus}
          proposalStatus={proposalStatus}
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
          pageLimit={pageLimit}
          data={data}
        />

        <ProposalsTableHeader />

        {/* content of table */}
        {loading ? (
          <Loading />
        ) : (
          data &&
          data.proposals.map((proposal, index) => (
            <ProposalsTableContent key={index} {...proposal} />
          ))
        )}
      </main>
    </>
  );
}

export default ProposalsPage;
