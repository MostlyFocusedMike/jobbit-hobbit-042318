// import hobbits from '../data/hobsWithJobs'
import { SELECT_HOBBIT, UPDATE_HOBBIT, LOAD_HOBBITS } from '../actions/types'

export default function hobbitReducer(
  state = {
    hobbits: [],
    selectedHobbit: {},
    loading: false
    },
  action
) {
  switch (action.type) {
    case SELECT_HOBBIT:
    // console.log('hitting the reducer for selecting a hobbit')
      return {
        ...state,
        selectedHobbit: action.payload.hobbit
      }

    case 'LOADING':
    console.log('loading')
    return {
      ...state,
      loading: true
    }

    case LOAD_HOBBITS:
      return {
        ...state,
        hobbits: action.payload.hobbits
      }
    case UPDATE_HOBBIT:
      console.log('payload', action.payload)
      return state
    default:
      return state;
  }
}
