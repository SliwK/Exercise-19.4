import uuid from "uuid";

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP = "THUMB_UP";
export const THUMB_DOWN = "THUMB_DOWN";

//tworzenie komentarza,
function addComment(text) {
  return {
      type: ADD_COMMENT,
      text: text,
      id: uuid.v4()
  }
}

//edycja komentarza,
function editComment(id, newText) {
  return {
      type: EDIT_COMMENT,
      id: id,
      text: newText,
  }
}
//usuwanie komentarza,
function removeComment(id) {
  return {
      type:REMOVE_COMMENT,
      id
  }
}
//ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza
//kciuk w górę
function thumbUp() {
  return {
      type: THUMB_UP,
      id: id,
      value: 1
  }
}

//kciuk w dół
function thumbDown() {
  return {
      type: THUMB_DOWN,
      id: id,
      value: -1
  }
}
