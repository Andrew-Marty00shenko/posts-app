const ADD_POST = 'ADD_POST'

let initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostElement;
            return {
                ...state,
                posts: newPost
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const addPost = (newPostElement) => ({ type: ADD_POST, newPostElement });




export default postsReducer