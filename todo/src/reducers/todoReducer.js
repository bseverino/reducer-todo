export const initialState = {
    todo: [
        {
            item: 'Buy presents',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Set up the tree',
            completed: false,
            id: 3892992830
        }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        item: action.payload,
                        completed: false,
                        id: new Date()
                    }
                ]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            };
        default:
            return state;
    }
};