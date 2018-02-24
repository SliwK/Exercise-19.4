import * from './actions'

const initialState = {
    comments: [],
    users: []
};


export function comments(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case THUMB_UP:
            return Object.assign({}, state,  {
                comments: state.comments.find(comment => comment.id === action.id).votes += action.votes
            });
        case THUMB_DOWN:
            return Object.assign({}, state,  {
                comments: state.comments.find(comment => comment.id === action.id).votes -= action.votes
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.find(comment => comment.id === action.id).text = action.text
            });
        default:
            return state;
    }
}
