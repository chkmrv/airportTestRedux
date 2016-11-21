import * as types from '../constants/ActionTypes';

import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  air: {},
  currentItem: "Все" 
};

// common
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', false);
xhr.send();
if (xhr.status != 200) {
  console.log( xhr.status);
} else {
  initialState.air = JSON.parse(xhr.responseText);
}

export default function choose(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_CARRIER:
      return {
        ...state,
        currentItem: action.payload
      }

    default:
      return state;
  }
}
