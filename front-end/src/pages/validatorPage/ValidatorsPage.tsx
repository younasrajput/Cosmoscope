import { useEffect, useState } from "react";
import { fetchDataCH } from "../../services/fetchData";
import PageHeader from "../../components/PageHeader";
import { ValidatorData } from "../../types/validator.types";
import { validatorStatuses } from "../../datas/statusesData";
import Loading from "../../components/Loading";
import ValidatorsTableContent from "./components/ValidatorsTableContent";
import ValidatorsTableHeader from "./components/ValidatorsTableHeader";
import toast from "react-hot-toast";

function ValidatorsPage() {
  const [data, setData] = useState<ValidatorData | null>(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const [validatorStatus, setValidatorStatus] = useState("BOND_STATUS_BONDED");
  const [pageOffset, setPageOffset] = useState(0);
  const pageLimit = 15;

  useEffect(() => {
    // fetch data
    const fetchValidators = async () => {
      setLoading(true);
      try {
        const validators: ValidatorData = await fetchDataCH(
          `cosmos/staking/v1beta1/validators?status=${validatorStatus}&pagination.limit=${pageLimit}&pagination.offset=${pageOffset}&pagination.reverse=true`,
        );
        setData(validators);
      } catch (error) {
        toast.error("Internal server error");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchValidators();
  }, [validatorStatus, pageOffset]);

  return (
    <>
      <main className="py-5 mx-10">
        <PageHeader<ValidatorData>
          setPageStatus={setValidatorStatus}
          pageStatus={validatorStatus}
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
          pageLimit={pageLimit}
          data={data}
          statuses={validatorStatuses}
        />

        {/* table */}
        <section>
          <ValidatorsTableHeader />
          {loading ? (
            <Loading />
          ) : (
            data &&
            data.validators.map((validator) => (
              <ValidatorsTableContent
                key={validator.description.moniker}
                validator={validator}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default ValidatorsPage;
