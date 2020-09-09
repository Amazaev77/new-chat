export function loadChat(id, myId) {
  return dispatch => {
    dispatch({type: 'chat/load/start'});
    dispatch({ type: 'set_opened_id', payload: id });
    
    fetch(`http://151.248.117.7:8001/api/messages/${myId}/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'chat/load/success',
          payload: json
        })
      })
  }
}
export function showSearchInput() {
  return { type: "search/show" };
}
export function setSearchLine(value) {
  return { 
    type: 'search/line',
    payload: value
  };
}
export function clearInput() {
  return { type: 'input/clear' };
}
export function sendMessage(value) {
  return {
    type: 'message/send',
    payload: value
  };
}
export function showBar() {
  return {
    type: 'bar/show'
  }
}