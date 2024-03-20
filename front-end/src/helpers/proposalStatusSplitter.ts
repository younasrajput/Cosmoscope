export default function proposalStatusSplitter(status: string): string {
  switch (status) {
    case "PROPOSAL_STATUS_PASSED":
      return "Passed";
    case "PROPOSAL_STATUS_REJECTED":
      return "Rejected";
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return "Voting Period";
    default:
      return "Unknown Status";
  }
}
