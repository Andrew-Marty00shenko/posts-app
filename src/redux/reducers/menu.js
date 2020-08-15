const ADD_FOLDER = 'ADD_FOLDER';
const REMOVE_FOLDER = 'REMOVE_FOLDER';

let initialState = {
    items: [
        { id: 1, name: "Books", color: 'purple' },
        { id: 2, name: "Studying", color: 'blue' },
        { id: 3, name: "Music", color: 'black' },
        { id: 4, name: "Games", color: 'orange' },
    ],
    colors: [
        { id: 1, name: "black" },
        { id: 2, name: "purple" },
        { id: 3, name: "orange" },
        { id: 4, name: "gray" },
        { id: 5, name: "blue" },
        { id: 6, name: "pink" },
        { id: 7, name: "green" },
        { id: 8, name: "cyan" },
    ]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLDER: {
            let newFolder = {
                id: Math.floor(Math.random() * 1000),
                name: action.value,
                color: action.color
            }
            return {
                ...state,
                items: [...state.items, newFolder]
            }
        }
        case REMOVE_FOLDER: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }
        }
        default: {
            return state;
        }
    }
}

export const addFolder = (value, color) => ({ type: ADD_FOLDER, value, color });
export const removeFolder = (id) => ({ type: REMOVE_FOLDER, id });

export default menuReducer;