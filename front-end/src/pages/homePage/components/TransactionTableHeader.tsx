function TransactionTableHeader() {
  return (
    <>
      <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 mt-5 gap-5 items-center">
        <div className="w-2/12 max-lg:w-3/12 max-sm:w-6/12">tx hash</div>
        <div className="w-1/12 max-lg:w-2/12 max-sm:hidden">height</div>

        <div className="w-2/12 max-lg:w-3/12 max-sm:w-2/12">amount</div>
        <div className="w-3/12 max-lg:w-4/12 max-sm:w-5/12">messages</div>
        <div className="w-4/12 max-lg:hidden">memo</div>
      </div>
    </>
  );
}

export default TransactionTableHeader;
