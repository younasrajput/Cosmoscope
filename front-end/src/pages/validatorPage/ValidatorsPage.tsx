/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import PageHeader from "../../components/PageHeader";
import { ValidatorData } from "../../types/validator.types";
import { validatorStatuses } from "../../helpers/statusesData";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import ValidatorsTableHeader from "./components/validatorsTableHeader";
import ValidatorsTableContent from "./components/ValidatorsTableContent";

function ValidatorsPage() {
  const [data, setData] = useState<ValidatorData | null>(null);
  const [loading, setLoading] = useState(false);

  // pagination & data filter
  const [validatorStatus, setValidatorStatus] = useState("BOND_STATUS_BONDED");
  const [pageOffset, setPageOffset] = useState(0);
  const pageLimit = 15;

  // fetchValidators function
  const fetchValidators = async () => {
    setLoading(true);
    try {
      const validators: ValidatorData = await fetchData(
        `cosmos/staking/v1beta1/validators?status=${validatorStatus}&pagination.limit=${pageLimit}&pagination.offset=${pageOffset}&pagination.reverse=true`,
      );
      setData(validators);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Internal server error",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchValidators();
  }, [validatorStatus, pageOffset]);

  return (
    <>
      <main className="py-5">
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
            data.validators.map((validator, index) => (
              <ValidatorsTableContent key={index} {...validator} />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default ValidatorsPage;
