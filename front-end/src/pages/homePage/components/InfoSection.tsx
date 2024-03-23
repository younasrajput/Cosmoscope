import AtomInfo from "./AtomInfo";
import CosmosInfo from "./CosmosInfo";

function InfoSection() {
  return (
    <>
      <section className="bg-white bg-opacity-50 border border-white rounded-3xl py-5 px-10 grid grid-cols-2 gap-20">
        <CosmosInfo />
        <AtomInfo />
      </section>
    </>
  );
}

export default InfoSection;
