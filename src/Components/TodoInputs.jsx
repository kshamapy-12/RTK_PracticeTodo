import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearAll } from "../features/todoSlice";

const TodoInputs = () => {
    const [task, setTask] = useState('')
  
    const dispatch = useDispatch();
const handleAddTodo = () => {
    if(!task.trim()) return;
    dispatch(addTodo(task));
    setTask('');
}
  return (
    <div className='flex justify-between items-center gap-5 bg-slate-100 p-6 w-full border border-slate-300 rounded-lg'>
      <input 
      value={task} 
      onChange={(e) => setTask(e.target.value)}
      className='border-2 border-slate-300 px-3 py-2 text-xl rounded-lg text-slate-500 outline-0' type="text" placeholder='Enter the Task here...'/>
      <button 
      onClick={handleAddTodo}
      className='px-6 py-2 bg-slate-500 rounded-lg text-xl text-white active:scale-95'>Add</button>
      <button 
      onClick={() => dispatch(clearAll())}
      className='px-6 py-2 bg-slate-500 rounded-lg text-xl text-white active:scale-95'>Clear All</button>
    </div>
  )
}

export default TodoInputs
