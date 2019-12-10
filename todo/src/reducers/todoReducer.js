var moment = require('moment');

export const initialState = {
    todo: [
        {
            item: 'Buy presents',
            completed: false,
            time: '',
            id: 3892987589,
        },
        {
            item: 'Set up the tree',
            time: '',
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
                        if (!item.completed) {
                            return {
                                ...item,
                                completed: !item.completed,
                                time: moment().format('hA')
                            }
                        }
                        else {
                            return {
                            ...item,
                            completed: !item.completed,
                            time: ''
                        };
                        }
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