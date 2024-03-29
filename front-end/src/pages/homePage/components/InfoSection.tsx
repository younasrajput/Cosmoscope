import { memo } from "react";
import AtomChart from "./AtomChart";
import AtomInfo from "./AtomInfo";

const InfoSection = memo(() => {
  return (
    <>
      <section className="bg-white bg-opacity-50 border border-white rounded-3xl py-5 px-10 grid grid-cols-2 gap-20 max-lg:flex-col max-lg:flex max-md:py-7 max-sm:px-5 max-lg:gap-5 max-sm:py-5">
        <AtomInfo />
        <AtomChart />
      </section>
    </>
  );
});

export default InfoSection;
