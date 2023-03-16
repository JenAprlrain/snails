import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Attribute { 'key' : string, 'value' : string }
export type ClaimResult = { 'Ok' : Array<TokenInfoExt> } |
  { 'Err' : string };
export type Errors = { 'Unauthorized' : null } |
  { 'TokenNotExist' : null } |
  { 'InvalidOperator' : null };
export type HeaderField = [string, string];
export type Location = { 'Web' : string } |
  { 'AssetCanister' : [Principal, Uint8Array | number[]] } |
  { 'IPFS' : string } |
  { 'InCanister' : Uint8Array | number[] };
export interface Metadata {
  'owner' : Principal,
  'desc' : string,
  'logo' : string,
  'name' : string,
  'totalSupply' : bigint,
  'cycles' : bigint,
  'symbol' : string,
}
export type MintResult = { 'Ok' : [bigint, bigint] } |
  { 'Err' : Errors };
export interface NFToken {
  'addMinter' : ActorMethod<[string], undefined>,
  'addWhiteList' : ActorMethod<[string], undefined>,
  'approve' : ActorMethod<[bigint, Principal], TxReceipt>,
  'balanceOf' : ActorMethod<[Principal], bigint>,
  'batchMint' : ActorMethod<
    [Principal, Array<[] | [TokenMetadata]>],
    MintResult
  >,
  'batchTransferFrom' : ActorMethod<
    [Principal, Principal, Array<bigint>],
    TxReceipt
  >,
  'burn' : ActorMethod<[bigint], TxReceipt>,
  'cancelOrder' : ActorMethod<[], Result_1>,
  'checkEligible' : ActorMethod<[], boolean>,
  'claim' : ActorMethod<[], ClaimResult>,
  'claimPaidNFT' : ActorMethod<[], ClaimResult>,
  'createOrder' : ActorMethod<[string, bigint], Result_1>,
  'desc' : ActorMethod<[], string>,
  'drop' : ActorMethod<[Principal, Array<bigint>], Result_1>,
  'getAllTokens' : ActorMethod<[], Array<TokenInfoExt>>,
  'getMetadata' : ActorMethod<[], Metadata>,
  'getOperator' : ActorMethod<[bigint], Result__1>,
  'getOrder' : ActorMethod<[], [] | [Order]>,
  'getSalePrice' : ActorMethod<[], bigint>,
  'getTokenInfo' : ActorMethod<[bigint], Result__1_2>,
  'getTransaction' : ActorMethod<[bigint], TxRecord>,
  'getTransactions' : ActorMethod<[bigint, bigint], Array<TxRecord>>,
  'getUserInfo' : ActorMethod<[Principal], Result__1_1>,
  'getUserTokens' : ActorMethod<[Principal], Array<TokenInfoExt>>,
  'getUserTransactionAmount' : ActorMethod<[Principal], bigint>,
  'getUserTransactions' : ActorMethod<
    [Principal, bigint, bigint],
    Array<TxRecord>
  >,
  'historySize' : ActorMethod<[], bigint>,
  'http_request' : ActorMethod<[Request], Response>,
  'isApprovedForAll' : ActorMethod<[Principal, Principal], boolean>,
  'logo' : ActorMethod<[], string>,
  'mint' : ActorMethod<[Principal, [] | [TokenMetadata]], MintResult>,
  'mintAll' : ActorMethod<[], undefined>,
  'name' : ActorMethod<[], string>,
  'ownerOf' : ActorMethod<[bigint], Result__1>,
  'payOrder' : ActorMethod<[], Result>,
  'setApprovalForAll' : ActorMethod<[Principal, boolean], TxReceipt>,
  'setMetadata' : ActorMethod<[string, string, string, string], undefined>,
  'setOwner' : ActorMethod<[Principal], Principal>,
  'setSalePrice' : ActorMethod<[bigint], undefined>,
  'setTokenMetadata' : ActorMethod<[bigint, TokenMetadata], TxReceipt>,
  'symbol' : ActorMethod<[], string>,
  'totalSupply' : ActorMethod<[], bigint>,
  'transfer' : ActorMethod<[Principal, bigint], TxReceipt>,
  'transferFrom' : ActorMethod<[Principal, Principal, bigint], TxReceipt>,
}
export type Operation = { 'transferFrom' : null } |
  { 'burn' : null } |
  { 'approveAll' : null } |
  { 'mint' : [] | [TokenMetadata__1] } |
  { 'approve' : null } |
  { 'setMetadata' : null } |
  { 'transfer' : null } |
  { 'revokeAll' : null };
export interface Order {
  'status' : { 'new' : null } |
    { 'canceled' : null } |
    { 'paid' : null } |
    { 'delivered' : null },
  'item' : string,
  'count' : bigint,
  'subaccount' : string,
  'ordertime' : bigint,
  'buyer' : Principal,
  'price' : bigint,
  'amount' : bigint,
}
export type Record = { 'metadata' : [] | [TokenMetadata__1] } |
  { 'user' : Principal };
export interface Request {
  'url' : string,
  'method' : string,
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
}
export interface Response {
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export type Result__1 = { 'ok' : Principal } |
  { 'err' : Errors };
export type Result__1_1 = { 'ok' : UserInfoExt } |
  { 'err' : Errors };
export type Result__1_2 = { 'ok' : TokenInfoExt } |
  { 'err' : Errors };
export type StreamingCallback = ActorMethod<
  [StreamingCallbackToken],
  StreamingCallbackResponse
>;
export interface StreamingCallbackResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Uint8Array | number[],
}
export interface StreamingCallbackToken {
  'key' : string,
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }
  };
export type Time = bigint;
export interface TokenInfoExt {
  'owner' : Principal,
  'metadata' : [] | [TokenMetadata__1],
  'operator' : [] | [Principal],
  'timestamp' : Time,
  'index' : bigint,
}
export interface TokenMetadata {
  'filetype' : string,
  'attributes' : Array<Attribute>,
  'location' : Location,
}
export interface TokenMetadata__1 {
  'filetype' : string,
  'attributes' : Array<Attribute>,
  'location' : Location,
}
export type TxReceipt = { 'Ok' : bigint } |
  { 'Err' : Errors };
export interface TxRecord {
  'op' : Operation,
  'to' : Record,
  'tokenIndex' : [] | [bigint],
  'from' : Record,
  'timestamp' : Time,
  'caller' : Principal,
  'index' : bigint,
}
export interface UserInfoExt {
  'allowedTokens' : Array<bigint>,
  'tokens' : Array<bigint>,
  'operators' : Array<Principal>,
  'allowedBy' : Array<Principal>,
}
export interface _SERVICE extends NFToken {}
