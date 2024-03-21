/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import Loading from "../../components/Loading";
import { ProposalData } from "../../types/proposal.types";
import ProposalsTableHeader from "./components/ProposalsTableHeader";
import ProposalsTableContent from "./components/ProposalsTableContent";
import Swal from "sweetalert2";
import PageHeader from "../../components/PageHeader";
import { proposalStatuses } from "../../helpers/statusesData";

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
      setData(proposals);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
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
      <main className="py-5">
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
              <ProposalsTableContent key={index} {...proposal} />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default ProposalsPage;
