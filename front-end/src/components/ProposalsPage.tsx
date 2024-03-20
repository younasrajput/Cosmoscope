import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Loading from "./Loading";
import { ProposalData } from "../types/proposal.types";
import dayDifferenceCounter from "../helpers/dayDifferenceCounter";
import proposalTypeSplitter from "../helpers/proposalTypeSplitter";
import proposalStatusSplitter from "../helpers/proposalStatusSplitter";
import {
  backgroundStyleGenerator,
  textStyleGenerator,
} from "../helpers/proposalStatusStyleGenerator";

function ProposalsPage() {
  const [data, setData] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const [proposalStatus, setProposalStatus] = useState("2");
  const pageLimit = 20;

  // fetchProposals function
  const fetchProposals = async () => {
    setLoading(true);
    try {
      const proposals: ProposalData = await fetchData(
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
  }, [proposalStatus]);

  return (
    <>
      <main>
        {/* container */}
        <div className="p-5">
          {/* select status container*/}
          <div className="flex gap-5 items-center bg-white bg-opacity-30 rounded-full border border-white py-1 pl-5 pr-1 w-fit">
            <h3>Status:</h3>

            {/* select status */}

            <select
              className="bg-opacity-70 bg-white shadow-md rounded-full py-2 px-5 font-semibold"
              onChange={(e) => setProposalStatus(e.target.value)}
            >
              <option value={"2"}>Voting Period</option>
              <option value={"3"}>Passed</option>
              <option value={"4"}>Rejected</option>
            </select>
          </div>

          {/* header of table */}
          <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 my-5 gap-5">
            <div className="w-1/12">#id</div>
            <div className="w-5/12">title</div>
            <div className="w-2/12">type</div>
            <div className="w-2/12">status</div>
            <div className="w-2/12">voting end time</div>
          </div>

          {/* content of table */}
          {loading ? (
            <Loading />
          ) : (
            data &&
            data.proposals.map((proposal, index) => (
              <div
                key={index}
                className="flex text-md border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 my-3 items-center gap-5"
              >
                <div className="w-1/12 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-rose-400">
                  #{proposal.proposal_id}
                </div>
                <div className="w-5/12 font-semibold">
                  {proposal.content.title}
                </div>
                <div className="w-2/12 text-sm">
                  {proposalTypeSplitter(proposal.content["@type"])}
                </div>
                <div className="w-2/12">
                  <span
                    className={`rounded-full bg-opacity-30 border text-sm text-center font-semibold py-1.5 px-3 ${backgroundStyleGenerator(
                      proposal.status,
                    )}`}
                  >
                    <span
                      className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent ${textStyleGenerator(
                        proposal.status,
                      )}`}
                    >
                      {proposalStatusSplitter(proposal.status)}
                    </span>
                  </span>
                </div>
                <div className="w-2/12 italic text-sm">
                  {dayDifferenceCounter(proposal.deposit_end_time)}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default ProposalsPage;
