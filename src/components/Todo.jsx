import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, updatesearchterm } from "../redux/action";
import MyFilterbutton from "./MyFilterbutton";
import { BsSearch } from "react-icons/bs";
import Todolist from "./Todolist";

const Todo = () => {
  const dispatch = useDispatch();
  const [newtodotext, setNewtodotext] = useState("");
  const [newsearchterm, setNewsearchterm] = useState("");

  const handleaddtodo = (text) => {
    dispatch(addtodo(text));
  }
  const handleaddtodoclick = () => {
    if(newtodotext.trim() !== ""){
      handleaddtodo(newtodotext.trim());
      setNewtodotext("");
    }
  }

  const handlesearchchange = (value) => {
    setNewsearchterm(value);
    dispatch(updatesearchterm(value));
  }

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONAL TODO APP</h2>

      <div className="flex items-center mb-4">
        <input type="text" value={newtodotext} onChange={(e) => {setNewtodotext(e.target.value)}} id="addtodoinput" placeholder="Add Todo" 
        className="flex-grow p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 "/>
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleaddtodoclick}><BsPlus></BsPlus></button>
      </div>

      <div className="flex items-center justify-between">
        <MyFilterbutton></MyFilterbutton>
        <div className="flex items-center mb-4">
          <input type="text" value={newsearchterm} onChange={(e) => {handlesearchchange(e.target.value)}} placeholder="Search" 
          className="flex-grow p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 "/>
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"><BsSearch></BsSearch></button>
        </div>
      </div>
      <Todolist></Todolist>
    </div>
  )
}

export default Todo