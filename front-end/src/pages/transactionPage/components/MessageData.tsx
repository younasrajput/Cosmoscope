import { messageFormatter } from "../../../helpers/stringHelpers";
import { MessageType } from "../../../types/transaction.types";

function MessageData({
  message,
  index,
}: {
  message: MessageType;
  index: number;
}) {
  return (
    <>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full my-5 max-sm:px-5 max-md:py-7 max-sm:py-5">
        {/* message type */}

        <h2 className="text-lg">
          <span>{index + 1}. </span>
          <span className="bg-gradient-to-r from-gray-700 to-violet-600 bg-clip-text text-transparent">
            {messageFormatter(message["@type"])}
          </span>
        </h2>
        <hr className="border-violet-300 my-3" />

        {/* tx amount */}
        {message && message.amount && (
          <div className="flex my-1 max-md:flex-col max-md:my-3">
            <p className="w-1/6 mr-10 max-md:w-full">amount</p>
            <p className="font-semibold">
              {Number(message.amount.amount) / 1_000_000 || 0} ATOM
            </p>
          </div>
        )}

        {/* data inside */}
        {Object.keys(message)
          .filter((key) => key !== "@type" && key !== "amount")
          .map((key) => (
            <div className="flex my-1 max-md:flex-col max-md:my-3" key={key}>
              <p className="w-1/6 mr-10 max-md:w-full">
                {key.split("_").join(" ")}
              </p>
              <p className="font-semibold truncate">
                {String(message[key as keyof MessageType])}
              </p>
            </div>
          ))}
      </section>
    </>
  );
}

export default MessageData;
