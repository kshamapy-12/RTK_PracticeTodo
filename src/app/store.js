import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const loadTodos = () => {
   try {
     const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
   }
   catch{
    return [];
   }
}

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }, 
    preloadedState: {
        todos: loadTodos(),
    }
})

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState().todos))
});