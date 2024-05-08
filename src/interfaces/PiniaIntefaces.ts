export interface keyTitledKey {
  key: string,
  titledKeyLoading: string,
  titledKeyStatus: string,
}

export interface FetchDataArguments {
  method: (payload: any) => any,
  model: string,
  payload: any
}
