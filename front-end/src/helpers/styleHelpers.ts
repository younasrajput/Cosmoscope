export function VlBgStyleGenerator(status: string): string {
  switch (status) {
    case "BOND_STATUS_BONDED":
      return "bg-green-400 border-green-400";
    case "BOND_STATUS_UNBONDED":
      return "bg-red-400 border-red-400";
    case "BOND_STATUS_UNBONDING":
      return "bg-blue-400 border-blue-400";
    default:
      return "#000000";
  }
}

export function VlTextStyleGenerator(status: string): string {
  switch (status) {
    case "BOND_STATUS_BONDED":
      return "to-green-600";
    case "BOND_STATUS_UNBONDED":
      return "to-red-600";
    case "BOND_STATUS_UNBONDING":
      return "to-blue-600 animate-pulse";
    default:
      return "#FFFFFF";
  }
}

export function PrBgStyleGenerator(status: string): string {
  switch (status) {
    case "PROPOSAL_STATUS_PASSED":
      return "bg-green-400 border-green-400";
    case "PROPOSAL_STATUS_REJECTED":
      return "bg-red-400 border-red-400";
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return "bg-blue-400 border-blue-400";
    default:
      return "#000000";
  }
}

export function PrTextStyleGenerator(status: string): string {
  switch (status) {
    case "PROPOSAL_STATUS_PASSED":
      return "to-green-600";
    case "PROPOSAL_STATUS_REJECTED":
      return "to-red-600";
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return "to-blue-600 animate-pulse";
    default:
      return "#FFFFFF";
  }
}
