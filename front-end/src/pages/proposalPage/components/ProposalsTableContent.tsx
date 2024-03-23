import dayDifferenceCounter from "../../../helpers/dayDifferenceCounter";
import proposalStatusSplitter from "../../../helpers/proposalStatusSplitter";
import {
  PrBgStyleGenerator,
  PrTextStyleGenerator,
} from "../../../helpers/proposalStatusStyleGenerator";
import proposalTypeSplitter from "../../../helpers/proposalTypeSplitter";
import { ProposalItem } from "../../../types/proposal.types";

function ProposalsTableContent({ proposal }: { proposal: ProposalItem }) {
  return (
    <>
      <div className="flex text-md border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 my-3 items-center gap-5">
        {/* proposal id */}
        <div className="w-1/12">
          <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-500">
            #{proposal.proposal_id}
          </span>
        </div>

        {/* proposal title */}
        <div className="w-5/12 font-semibold">{proposal.content.title}</div>

        {/* proposal type */}
        <div className="w-2/12 text-sm">
          {proposalTypeSplitter(proposal.content["@type"])}
        </div>

        {/* proposal status */}
        <div className="w-2/12">
          <span
            className={`rounded-full bg-opacity-30 border text-sm text-center font-semibold py-1.5 px-3 ${PrBgStyleGenerator(
              proposal.status,
            )}`}
          >
            <span
              className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent ${PrTextStyleGenerator(
                proposal.status,
              )}`}
            >
              {proposalStatusSplitter(proposal.status)}
            </span>
          </span>
        </div>

        {/* proposal deposit end time*/}
        <div className="w-2/12 italic text-sm">
          {dayDifferenceCounter(proposal.deposit_end_time)}
        </div>
      </div>
    </>
  );
}

export default ProposalsTableContent;
