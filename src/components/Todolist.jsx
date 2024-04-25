import { useSelector } from "react-redux"
import Todoitem from "./Todoitem";

const Todolist = () => {
  const filtertodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchterm = state.searchterm.toLowerCase();

    return todos.filter((todo) => {
      const matchfilter = (filter === "COMPLETE" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || filter === "ALL";
      const matchsearch = todo.text.toLowerCase().includes(searchterm);
      return matchfilter&&matchsearch;
    })
  })
  console.log(filtertodos);
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
        {
          filtertodos.map((todo, index) => (
            <Todoitem key={index} todo={todo} index={index}></Todoitem>
          ))
        }
    </ul>
  )
}

export default Todolist