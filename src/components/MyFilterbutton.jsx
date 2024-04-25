import { useDispatch, useSelector } from "react-redux"
import { filtertodos, markallcompleted } from "../redux/action";

const MyFilterbutton = () => {
  
  const dispatch = useDispatch();
  const currentfilter = useSelector((state) => state.filter);

  const handfilter = (filter) => {
    dispatch(filtertodos(filter));
  }
  
  return (
    <div className="flex space-x-4 items-center">
      <select 
      value={currentfilter} 
      onChange={(e) => handfilter(e.target.value)}
      className="text-sm px-2 py-1 border rounded border-gray-300 bg-white focus:outline-none">
        <option value="ALL">ALL</option>
        <option value="COMPLETE">COMPLETE</option>
        <option value="INCOMPLETE">INCOMPLETE</option>
      </select>

      <button onClick={() => dispatch(markallcompleted())} className="text-sm px-2 py-1 rounded bg-violet-500 text-white">Mark All Completed</button>
    </div>
  )
}

export default MyFilterbutton