function ProposalsTableHeader() {
  return (
    <>
      <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 my-5 gap-5 items-center">
        <div className="w-1/12">#id</div>
        <div className="w-5/12">title</div>
        <div className="w-2/12">type</div>
        <div className="w-2/12 max-md:hidden">status</div>
        <div className="w-2/12">voting end time</div>
      </div>
    </>
  );
}

export default ProposalsTableHeader;
