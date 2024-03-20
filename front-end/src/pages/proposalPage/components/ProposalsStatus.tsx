import { ProposalsStatusProps } from "../../../types/proposal.types";

function ProposalsStatus({
  proposalStatus,
  setProposalStatus,
}: ProposalsStatusProps) {
  return (
    <>
      <div className="flex gap-5 items-center bg-white bg-opacity-30 rounded-full border border-white py-1 pl-5 pr-1 w-fit">
        <h3>Status:</h3>

        {/* select status */}
        <select
          className="bg-opacity-70 bg-white shadow-md rounded-full py-2 px-5 font-semibold"
          onChange={(e) => setProposalStatus(e.target.value)}
          defaultValue={proposalStatus}
        >
          <option value={"2"}>Voting Period</option>
          <option value={"3"}>Passed</option>
          <option value={"4"}>Rejected</option>
        </select>
      </div>
    </>
  );
}

export default ProposalsStatus;
