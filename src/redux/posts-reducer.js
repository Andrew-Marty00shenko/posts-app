const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [
        { id: 1, title: "Hey" }
    ]
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostElement;
            return {
                ...state,
                posts: [...state.posts, { id: state.posts[state.posts.length - 1] + 1, title: newPost }]
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