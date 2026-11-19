import React from 'react'
import { removeTodo, toggleTodo } from "../features/todoSlice";
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
   

  return (
   <div className='w-full'>
{todos.map((todo) => {
return  <div key={todo.id} className='grid grid-cols-4 justify-around items-center gap-5 border-b border-t py-6 border-slate-200'>
      <div className='bg-slate-500 px-4 py-1.5 text-lg font-medium text-white w-10 h-10 rounded-lg'>{todo.id}</div>
      <div className={todo.done ? `text-lg font-medium text-slate-300 line-through` : `text-lg font-medium text-slate-500`}>{todo.task}</div>
      <button 
      onClick={() => dispatch(toggleTodo(todo.id))}
      className='px-3 py-2 w-40 bg-slate-500 rounded-lg text-xl text-white active:scale-95'>Completed</button>
      <button
      onClick={() => dispatch(removeTodo(todo.id))} 
      className='px-3 py-2 w-40 bg-slate-500 rounded-lg text-xl text-white active:scale-95'>Delete</button>
    </div>
})}    
     </div>
  )
}

export default TodoList
