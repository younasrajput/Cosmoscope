import { ProposalsHeaderProps } from "../../../types/proposal.types";
import ProposalsPagination from "./ProposalsPagination";
import ProposalsStatus from "./ProposalsStatus";

function ProposalsHeader({
  setProposalStatus,
  proposalStatus,
  pageOffset,
  setPageOffset,
  pageLimit,
  data,
}: ProposalsHeaderProps) {
  return (
    <>
      <div className="flex justify-between">
        <ProposalsStatus
          proposalStatus={proposalStatus}
          setProposalStatus={setProposalStatus}
        />

        <ProposalsPagination
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
          pageLimit={pageLimit}
          data={data}
        />
      </div>
    </>
  );
}

export default ProposalsHeader;
