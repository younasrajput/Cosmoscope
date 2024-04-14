import { TransactionData } from "../../../types/transaction.types";
import MessageData from "./MessageData";

function MessageSection({ data }: { data: TransactionData | null }) {
  return (
    <>
      <section className="bg-white bg-opacity-50 px-10 py-5 rounded-3xl border border-white w-full mt-10 max-sm:px-5 max-md:py-7 max-sm:py-5">
        <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
          Messages
        </h1>
      </section>

      <section>
        {data &&
          data.tx.body.messages.map((message, index) => (
            <MessageData message={message} key={index} index={index} />
          ))}
      </section>
    </>
  );
}

export default MessageSection;
