import * as types from '../constants/ActionTypes';

export function chooseCarrier(carrier) {
  return {
    type: types.CHOOSE_CARRIER,
    payload: carrier
  };
}