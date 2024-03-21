export default function validatorStatusSplitter(status: string): string {
  switch (status) {
    case "BOND_STATUS_BONDED":
      return "Bonded";
    case "BOND_STATUS_UNBONDED":
      return "Unbonded";
    case "BOND_STATUS_UNBONDING":
      return "Unbonding";
    default:
      return "Unknown Status";
  }
}
