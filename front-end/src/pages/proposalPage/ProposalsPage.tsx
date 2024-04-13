/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchDataCH } from "../../services/fetchData";
import Loading from "../../components/Loading";
import { ProposalData } from "../../types/proposal.types";
import ProposalsTableHeader from "./components/ProposalsTableHeader";
import ProposalsTableContent from "./components/ProposalsTableContent";
import PageHeader from "../../components/PageHeader";
import { proposalStatuses } from "../../datas/statusesData";
import toast from "react-hot-toast";

function ProposalsPage() {
  const [data, setData] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const [proposalStatus, setProposalStatus] = useState("2");
  const [pageOffset, setPageOffset] = useState(0);
  const pageLimit = 15;

  // fetch data
  const fetchProposals = async () => {
    setLoading(true);
    try {
      const proposals: ProposalData = await fetchDataCH(
        `cosmos/gov/v1beta1/proposals?proposal_status=${proposalStatus}&pagination.limit=${pageLimit}&pagination.offset=${pageOffset}&pagination.reverse=true`,
      );
      setData(proposals);
    } catch (error) {
      toast.error("Internal server error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, [proposalStatus, pageOffset]);

  return (
    <>
      <main className="py-5 mx-10">
        <PageHeader<ProposalData>
          setPageStatus={setProposalStatus}
          pageStatus={proposalStatus}
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
          pageLimit={pageLimit}
          data={data}
          statuses={proposalStatuses}
        />

        {/* table */}
        <section>
          <ProposalsTableHeader />

          {/* content of table */}
          {loading ? (
            <Loading />
          ) : (
            data &&
            data.proposals.map((proposal, index) => (
              <ProposalsTableContent key={index} proposal={proposal} />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default ProposalsPage;
