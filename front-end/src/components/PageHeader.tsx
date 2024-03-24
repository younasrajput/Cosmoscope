/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProposalData } from "../types/proposal.types";
import { ValidatorData } from "../types/validator.types";
import ProposalsPagination from "./PagePagination";
import PageStatus from "./PageStatus";

export interface PageHeaderProps<T> {
  setPageStatus: (status: string) => void;
  pageStatus: string;
  pageOffset: number;
  setPageOffset: (offset: number) => void;
  pageLimit: number;
  data: T | null;
  statuses: Status[];
}

export interface Status {
  value: string;
  label: string;
}

function PageHeader<T>({
  setPageStatus,
  pageStatus,
  pageOffset,
  setPageOffset,
  pageLimit,
  data,
  statuses,
}: PageHeaderProps<T>) {
  let itemCount = 0;

  const isProposalData = (data: any): data is ProposalData => {
    return data && "proposals" in data;
  };

  const isValidatorData = (data: any): data is ValidatorData => {
    return data && "validators" in data;
  };

  if (data) {
    if (isProposalData(data)) {
      itemCount = data.proposals.length;
    } else if (isValidatorData(data)) {
      itemCount = data.validators.length;
    }
  }

  return (
    <>
      <section className="flex justify-between">
        <PageStatus
          pageStatus={pageStatus}
          setPageOffset={setPageOffset}
          setPageStatus={setPageStatus}
          statuses={statuses}
        />

        <ProposalsPagination
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
          pageLimit={pageLimit}
          data={data}
          itemCount={itemCount}
        />
      </section>
    </>
  );
}

export default PageHeader;
