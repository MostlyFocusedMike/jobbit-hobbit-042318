import { SELECT_HOBBIT, UPDATE_HOBBIT, LOAD_HOBBITS } from './types'

export const selectHobbit = (hobbit) => {
  console.log(hobbit)
  return {
    type: SELECT_HOBBIT,
    payload: {
      hobbit
  }
}
}

export const getHobbits = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/hobbits')
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: LOAD_HOBBITS,
        payload: {
          hobbits: result
        }
      })
    })
  }

}


export const updateHobbit = (hobbit) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    const options = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbit)
    }
    fetch(`http://localhost:3000/hobbits/${hobbit.id}`, options)
      .then(resp => resp.json())
      .then(result => {
        dispatch({
          type: UPDATE_HOBBIT,
          payload: result
        })
      })
  }


}
