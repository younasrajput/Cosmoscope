import { TransactionMessage } from "../types/transaction.types";

// export default function messageExtractor(
//   messagesArray: TransactionMessage[],
// ): string {
//   const dividedMessages = messagesArray.map((message) => {
//     const splittedMessage = message.typeUrl.split(".");
//     const finalMessage = splittedMessage[splittedMessage.length - 1].replace(
//       "Msg",
//       "",
//     );
//     return finalMessage;
//   });

//   return dividedMessages.join(", ");
// }

export default function messageExtractor(
  messagesArray: TransactionMessage[],
): string {
  return messagesArray.reduce((acc, message) => {
    const splittedMessage = message.typeUrl.split(".");
    const finalMessage = splittedMessage[splittedMessage.length - 1].replace(
      "Msg",
      "",
    );

    if (acc.includes(finalMessage)) return acc;

    return acc ? [acc, finalMessage].join(", ") : finalMessage;
  }, "");
}
