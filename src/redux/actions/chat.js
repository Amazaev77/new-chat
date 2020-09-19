import nodeChat from "../../utils/nodeChat";

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
        nodeChat();
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
export function writeMessage(value) {
  return {
    type: 'message/write',
    payload: value
  };
}
export function showBar() {
  return {
    type: 'bar/show'
  }
}
export function  sendMessage(myId, contactId, content) {
  return dispatch => {
    dispatch({type: 'message/send/start'});

    fetch('http://151.248.117.7:8001/api/messages', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: 'text'
      })
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'message/send/success',
          payload: json
        })
      })
  }
}