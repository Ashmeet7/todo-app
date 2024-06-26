import { useDispatch, useSelector } from "react-redux"
import { filtertodos, markallcompleted } from "../redux/action";

const MyFilterbutton = () => {
  
  const dispatch = useDispatch();
  const currentfilter = useSelector((state) => state.filter);

  const handfilter = (filter) => {
    dispatch(filtertodos(filter));
  }
  
  return (
    <div className="flex lg:items-center sm:flex-row flex-col">
      <select 
      value={currentfilter} 
      onChange={(e) => handfilter(e.target.value)}
      className="text-sm px-2 py-2 border rounded border-gray-300 bg-white focus:outline-none">
        <option value="ALL">ALL</option>
        <option value="COMPLETE">COMPLETE</option>
        <option value="INCOMPLETE">INCOMPLETE</option>
      </select>

      <button onClick={() => dispatch(markallcompleted())} className="text-sm ml-3 px-2 py-2 rounded bg-violet-500 text-white">Mark All Completed</button>
    </div>
  )
}

export default MyFilterbutton