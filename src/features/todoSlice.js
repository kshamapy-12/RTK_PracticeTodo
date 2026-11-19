import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
              const id = state.length ? Math.max(...state.map((t) => t.id)) + 1 : 1;
            state.push({id: id, task: action.payload, done: false});
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if(todo){
                todo.done = !todo.done;
            }
        }, 
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        }, 
        clearAll: () => {
            return [];
        }
    }
});

export const { addTodo, toggleTodo, removeTodo, clearAll } = todoSlice.actions;
export default todoSlice.reducer;