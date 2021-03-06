import { combineReducers } from 'redux'

// like vuex state
const stateTree = {
  stateName: 'defalut value'
}

// like vuex mutation
function stateName(state = stateTree.stateName, action) {
  if (action.type === 'type template') {
    return action.value;
  }
  return state;
}

const reducer = combineReducers({
  stateName,
})

export default reducer