import { Status } from "./PageHeader";

interface PageStatusProps {
  pageStatus: string;
  setPageStatus: (status: string) => void;
  setPageOffset: (offset: number) => void;
  statuses: Status[];
}

function PageStatus({
  pageStatus,
  setPageStatus,
  statuses,
  setPageOffset,
}: PageStatusProps) {
  return (
    <>
      <div className="flex gap-5 items-center bg-white bg-opacity-30 rounded-full border border-white py-1 pl-5 pr-1 w-fit">
        <h3>Status:</h3>

        {/* select status */}
        <select
          className="bg-opacity-70 bg-white shadow-md rounded-full py-2 px-5 font-semibold"
          onChange={(e) => {
            setPageStatus(e.target.value);
            setPageOffset(0);
          }}
          defaultValue={pageStatus}
        >
          {statuses.map((status, index) => {
            return (
              <option key={index} value={status.value}>
                {status.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default PageStatus;
