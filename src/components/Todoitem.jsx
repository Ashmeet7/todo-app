import { FaCheck, FaCross, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { markcomplete, markincomplete, remove, toggle } from '../redux/action'
const Todoitem = ({todo, index}) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-700">{index+1}.</span>
        <span className={`mr-4 ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
      </div>
      <div className='space-x-3 ml-8'>
        <button onClick={() => dispatch(toggle(index))}  className='mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded'>{todo.completed ? <FaToggleOff></FaToggleOff> : <FaToggleOn></FaToggleOn>}</button>
        <button onClick={() => dispatch(remove(index))}  className='mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded'><FaTrash></FaTrash></button>
        {
          !todo.completed && (
            <button onClick={() => dispatch(markcomplete(index))}  className='mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded'><FaCheck></FaCheck></button>
          )
        }
        {
          todo.completed && (
            <button onClick={() => dispatch(markincomplete(index))}  className='mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded'><FaTimes></FaTimes></button>
          )
        }
      </div>
    </li>
  )
}

export default Todoitem