import validatorDelegatorShareFormatter from "../../../helpers/validatorDelegatorShareFormatter";
import validatorDelegatorShareSimplifier from "../../../helpers/validatorDelegatorShareSimplifier";
import validatorStatusSplitter from "../../../helpers/validatorStatusSplitter";
import {
  VlBgStyleGenerator,
  VlTextStyleGenerator,
} from "../../../helpers/validatorStatusStyleGenerator";
import { ValidatorItem } from "../../../types/validator.types";

function ValidatorsTableContent(validator: ValidatorItem) {
  return (
    <>
      <div className="flex text-md border border-white bg-white bg-opacity-50 rounded-3xl px-5 py-2 my-3 items-center gap-5 h-16">
        {/* validator name */}
        <div className="w-3/12">
          <p className="font-semibold ">{validator.description.moniker}</p>
          <a
            className="font-light text-xs text-transparent bg-gradient-to-r from-gray-600 to-violet-500 bg-clip-text hover:text-gray-700 transition-all ease-in-out duration-150"
            href={validator.description.website}
            target="_blank"
            rel="noreferrer"
          >
            {validator.description.website}
          </a>
        </div>

        {/* validator status */}
        <div className="w-2/12">
          <span
            className={`rounded-full bg-opacity-30 border text-sm text-center font-semibold py-1.5 px-3 ${VlBgStyleGenerator(
              validator.status,
            )}`}
          >
            <span
              className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent ${VlTextStyleGenerator(
                validator.status,
              )}`}
            >
              {validatorStatusSplitter(validator.status)}
            </span>
          </span>
        </div>

        {/* validator commission rate */}
        <div className="w-2/12">
          <span className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-500">
            {Math.floor(+validator.commission.commission_rates.rate * 100)}%
          </span>
        </div>

        {/* validator delegator share */}
        <div className="w-3/12">
          <p className="font-semibold">
            {validatorDelegatorShareSimplifier(+validator.delegator_shares)}
          </p>
          <p className="text-xs">
            <span>
              {validatorDelegatorShareFormatter(+validator.delegator_shares)[0]}
            </span>
            <span className="font-light text-gray-500">
              {validatorDelegatorShareFormatter(+validator.delegator_shares)[1]}
            </span>
          </p>
        </div>

        {/* validator jail status */}
        <div className="w-2/12">
          <span
            className={`rounded-full bg-opacity-30 border text-sm text-center font-semibold py-1.5 px-3 ${
              validator.jailed
                ? "bg-red-400 border-red-400"
                : "bg-green-400 border-green-400"
            }`}
          >
            <span
              className={`bg-gradient-to-r from-gray-800 bg-clip-text text-transparent ${
                validator.jailed ? "to-red-600" : "to-green-600"
              }`}
            >
              {validator.jailed ? "Jailed" : "Not Jailed"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default ValidatorsTableContent;
