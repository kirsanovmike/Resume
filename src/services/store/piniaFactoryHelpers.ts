/* Convert the first character of a string to a lowercase letter
  * @param string {string}
  * @returns {string[undefined}
*/
import {type FetchDataArguments} from "@/interfaces/PiniaIntefaces";

export const titleize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Recursive writing of data to state
  * @param state {Object} - state or its property
  * @param modelArray - array of property names e.g. ["foo", "boo"]
  * aparam payload - data to write
*/
export const setRecursiveData = (state: any, modelArray: string[], payload: any) => {
  if (modelArray.length > 1 && Object.prototype.hasOwnProperty.call(state, modelArray[0])) {
    setRecursiveData(state[modelArray[0]], modelArray.slice(1), payload)
  } else if (modelArray.length === 1) {
    state[modelArray[0]] = payload
  }
}

/* Function for getting a nested property on an object
  * @param {Object} obj
  * @param {Stirng} modelArray
  * @returns {any}.
*/
export const getRecursiveValue = (state: any, modelArray: string[]): any => {
  if (state == null || !Array.isArray(modelArray)) return undefined;
  if (modelArray.length == 0) {
    return state;
  }
  if (!Object.prototype.hasOwnProperty.call(state, modelArray[0])) {
    return undefined;
  }
  if (modelArray.length > 1) {
    return getRecursiveValue(state[modelArray[0]], modelArray.slice(1));
  }
  return state[modelArray[0]];
}

/* Async function for requesting data
  * @param {ctx} obj
  * @returns {any}.
*/
export async function fetchData({method, model, payload}: FetchDataArguments, piniaStore: any) {
  const {stateInfo} = piniaStore.$state
  stateInfo[model].loading = true;
  try {
    const {data, status} = await method(payload);
    piniaStore.$state[model] = data;
    stateInfo[model].responseStatus = status;
  } catch (error) {
    throw error;
  } finally {
    stateInfo[model].loading = false;
  }
}
