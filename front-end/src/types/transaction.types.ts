export interface TransactionData {
  code?: number;
  tx: {
    body: {
      messages: {
        "@type": string;
        from_address: string;
        to_address: string;
        amount: { denom: string; amount: string }[];
      }[];
      memo: string;
      timeout_height: string;
      extension_options: [];
      non_critical_extension_options: [];
    };
    auth_info: {
      signer_infos: {
        public_key: {
          "@type": string;
          key: string;
        };
        mode_info: {
          single: {
            mode: string;
          };
        };
        sequence: string;
      }[];
      fee: {
        amount: { denom: string; amount: string }[];
        gas_limit: string;
        payer: string;
        granter: string;
      };
    };
    signatures: string[];
  };
  tx_response: {
    height: string;
    txhash: string;
    codespace: string;
    code: number;
    data: string;
    raw_log: string;
    logs: {
      msg_index: number;
      log: string;
      events: {
        type: string;
        attributes: { key: string; value: string }[];
      }[];
    }[];
    info: string;
    gas_wanted: string;
    gas_used: string;
    timestamp: string;
    events: {
      type: string;
      attributes: { key: string; value: string; index?: boolean }[];
    }[];
  };
}

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
