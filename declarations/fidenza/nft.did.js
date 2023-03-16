export const idlFactory = ({ IDL }) => {
  const Errors = IDL.Variant({
    'Unauthorized' : IDL.Null,
    'TokenNotExist' : IDL.Null,
    'InvalidOperator' : IDL.Null,
  });
  const TxReceipt = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : Errors });
  const Attribute = IDL.Record({ 'key' : IDL.Text, 'value' : IDL.Text });
  const Location = IDL.Variant({
    'Web' : IDL.Text,
    'AssetCanister' : IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Nat8)),
    'IPFS' : IDL.Text,
    'InCanister' : IDL.Vec(IDL.Nat8),
  });
  const TokenMetadata = IDL.Record({
    'filetype' : IDL.Text,
    'attributes' : IDL.Vec(Attribute),
    'location' : Location,
  });
  const MintResult = IDL.Variant({
    'Ok' : IDL.Tuple(IDL.Nat, IDL.Nat),
    'Err' : Errors,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const TokenMetadata__1 = IDL.Record({
    'filetype' : IDL.Text,
    'attributes' : IDL.Vec(Attribute),
    'location' : Location,
  });
  const Time = IDL.Int;
  const TokenInfoExt = IDL.Record({
    'owner' : IDL.Principal,
    'metadata' : IDL.Opt(TokenMetadata__1),
    'operator' : IDL.Opt(IDL.Principal),
    'timestamp' : Time,
    'index' : IDL.Nat,
  });
  const ClaimResult = IDL.Variant({
    'Ok' : IDL.Vec(TokenInfoExt),
    'Err' : IDL.Text,
  });
  const Metadata = IDL.Record({
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'totalSupply' : IDL.Nat,
    'cycles' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const Result__1 = IDL.Variant({ 'ok' : IDL.Principal, 'err' : Errors });
  const Order = IDL.Record({
    'status' : IDL.Variant({
      'new' : IDL.Null,
      'canceled' : IDL.Null,
      'paid' : IDL.Null,
      'delivered' : IDL.Null,
    }),
    'item' : IDL.Text,
    'count' : IDL.Nat64,
    'subaccount' : IDL.Text,
    'ordertime' : IDL.Int,
    'buyer' : IDL.Principal,
    'price' : IDL.Nat64,
    'amount' : IDL.Nat64,
  });
  const Result__1_2 = IDL.Variant({ 'ok' : TokenInfoExt, 'err' : Errors });
  const Operation = IDL.Variant({
    'transferFrom' : IDL.Null,
    'burn' : IDL.Null,
    'approveAll' : IDL.Null,
    'mint' : IDL.Opt(TokenMetadata__1),
    'approve' : IDL.Null,
    'setMetadata' : IDL.Null,
    'transfer' : IDL.Null,
    'revokeAll' : IDL.Null,
  });
  const Record = IDL.Variant({
    'metadata' : IDL.Opt(TokenMetadata__1),
    'user' : IDL.Principal,
  });
  const TxRecord = IDL.Record({
    'op' : Operation,
    'to' : Record,
    'tokenIndex' : IDL.Opt(IDL.Nat),
    'from' : Record,
    'timestamp' : Time,
    'caller' : IDL.Principal,
    'index' : IDL.Nat,
  });
  const UserInfoExt = IDL.Record({
    'allowedTokens' : IDL.Vec(IDL.Nat),
    'tokens' : IDL.Vec(IDL.Nat),
    'operators' : IDL.Vec(IDL.Principal),
    'allowedBy' : IDL.Vec(IDL.Principal),
  });
  const Result__1_1 = IDL.Variant({ 'ok' : UserInfoExt, 'err' : Errors });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const Request = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingCallback = IDL.Func(
      [StreamingCallbackToken],
      [StreamingCallbackResponse],
      ['query'],
    );
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }),
  });
  const Response = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat64, 'err' : IDL.Text });
  const NFToken = IDL.Service({
    'addMinter' : IDL.Func([IDL.Text], [], []),
    'addWhiteList' : IDL.Func([IDL.Text], [], []),
    'approve' : IDL.Func([IDL.Nat, IDL.Principal], [TxReceipt], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'batchMint' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Opt(TokenMetadata))],
        [MintResult],
        [],
      ),
    'batchTransferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Vec(IDL.Nat)],
        [TxReceipt],
        [],
      ),
    'burn' : IDL.Func([IDL.Nat], [TxReceipt], []),
    'cancelOrder' : IDL.Func([], [Result_1], []),
    'checkEligible' : IDL.Func([], [IDL.Bool], ['query']),
    'claim' : IDL.Func([], [ClaimResult], []),
    'claimPaidNFT' : IDL.Func([], [ClaimResult], []),
    'createOrder' : IDL.Func([IDL.Text, IDL.Nat64], [Result_1], []),
    'desc' : IDL.Func([], [IDL.Text], ['query']),
    'drop' : IDL.Func([IDL.Principal, IDL.Vec(IDL.Nat)], [Result_1], []),
    'getAllTokens' : IDL.Func([], [IDL.Vec(TokenInfoExt)], ['query']),
    'getMetadata' : IDL.Func([], [Metadata], ['query']),
    'getOperator' : IDL.Func([IDL.Nat], [Result__1], ['query']),
    'getOrder' : IDL.Func([], [IDL.Opt(Order)], ['query']),
    'getSalePrice' : IDL.Func([], [IDL.Nat64], ['query']),
    'getTokenInfo' : IDL.Func([IDL.Nat], [Result__1_2], ['query']),
    'getTransaction' : IDL.Func([IDL.Nat], [TxRecord], ['query']),
    'getTransactions' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(TxRecord)],
        ['query'],
      ),
    'getUserInfo' : IDL.Func([IDL.Principal], [Result__1_1], ['query']),
    'getUserTokens' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(TokenInfoExt)],
        ['query'],
      ),
    'getUserTransactionAmount' : IDL.Func(
        [IDL.Principal],
        [IDL.Nat],
        ['query'],
      ),
    'getUserTransactions' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Nat],
        [IDL.Vec(TxRecord)],
        ['query'],
      ),
    'historySize' : IDL.Func([], [IDL.Nat], ['query']),
    'http_request' : IDL.Func([Request], [Response], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'logo' : IDL.Func([], [IDL.Text], ['query']),
    'mint' : IDL.Func(
        [IDL.Principal, IDL.Opt(TokenMetadata)],
        [MintResult],
        [],
      ),
    'mintAll' : IDL.Func([], [], []),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'ownerOf' : IDL.Func([IDL.Nat], [Result__1], ['query']),
    'payOrder' : IDL.Func([], [Result], []),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [TxReceipt], []),
    'setMetadata' : IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text], [], []),
    'setOwner' : IDL.Func([IDL.Principal], [IDL.Principal], []),
    'setSalePrice' : IDL.Func([IDL.Nat64], [], []),
    'setTokenMetadata' : IDL.Func([IDL.Nat, TokenMetadata], [TxReceipt], []),
    'symbol' : IDL.Func([], [IDL.Text], ['query']),
    'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [TxReceipt], []),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [TxReceipt],
        [],
      ),
  });
  return NFToken;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Principal];
};
