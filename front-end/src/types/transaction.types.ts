export interface TransactionDetail {
  height: string;
  hash: string;
  amount: string | undefined;
  messages: TransactionMessage[];
  memo: string;
}

export interface TransactionMessage {
  typeUrl: string;
  value: Uint8Array;
}
