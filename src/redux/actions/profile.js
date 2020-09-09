export function loadProfile() {
  return dispatch => {
    dispatch({ type: 'profile/load/start' });
    
    fetch('http://151.248.117.7:8001/api/profile')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'profile/load/success',
          payload: json
        })
      })
  }
}