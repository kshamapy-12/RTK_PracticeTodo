
import './App.css'
import TodoInputs from './Components/TodoInputs'
import TodoList from './Components/TodoList'

function App() {
 

  return (
  <div className='flex flex-col justify-center items-start gap-5 min-h-screen max-w-[90%] mx-auto'>
    <TodoInputs />
    <TodoList />
  </div>
  )
}

export default App
