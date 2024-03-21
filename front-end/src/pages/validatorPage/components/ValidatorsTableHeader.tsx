function ValidatorsTableHeader() {
  return (
    <>
      <div className="flex text-xs font-semibold border border-white bg-white bg-opacity-30 rounded-full px-5 py-2 my-5 gap-5 items-center">
        <div className="w-3/12">validator</div>
        <div className="w-2/12">status</div>
        <div className="w-2/12">commision rate</div>
        <div className="w-3/12">delegator shares</div>
        <div className="w-2/12">jailed status</div>
      </div>
    </>
  );
}

export default ValidatorsTableHeader;
