function LatestBlockTableHeader() {
  return (
    <>
      {/* table header */}
      <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 mt-5 gap-5 items-center">
        <div className="w-2/12 max-sm:w-4/12">height</div>
        <div className="w-5/12 max-sm:hidden">proposer address</div>
        <div className="w-2/12 max-sm:w-3/12">transactions</div>
        <div className="w-3/12 max-sm:w-5/12">time</div>
      </div>
    </>
  );
}

export default LatestBlockTableHeader;
