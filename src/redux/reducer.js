import { ADD_TODO, FILTER_TODO, MARKALL_COMPLETED, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actiontype";

const initialstate = {
  todos: [],
  filter: "ALL",
  searchterm: ""
}
const todoreducer = (state=initialstate, action) => {
  switch(action.type){
    case ADD_TODO:
      return {
        todos: [...state.todos,{text: action.payload.text, completed: false}],
        filter: state.filter,
        searchterm: state.searchterm
      }
      case TOGGLE_TODO:
        return {
          todos: state.todos.map((todo,index) =>
            index === action.payload.id ? {...todo, completed:!todo.completed} : todo 
          ),
          filter: state.filter,
          searchterm: state.searchterm
        }

      case REMOVE_TODO:
        return {
          todos: state.todos.filter((todo,index) => 
            index !== action.payload.id 
          ),
          filter: state.filter,
          searchterm: state.searchterm
        }

      case MARK_COMPLETE:
        return {
          todos: state.todos.map((todo,index) => 
            index === action.payload.id ? {...todo,completed:true} : todo
          ),
          filter: state.filter,
          searchterm: state.searchterm
        }

      case MARK_INCOMPLETE:
        return {
          todos: state.todos.map((todo,index) => 
            index === action.payload.id ? {...todo,completed:false} : todo
          ),
          filter: state.filter,
          searchterm: state.searchterm
        }

      case FILTER_TODO:
        return {
          todos: state.todos,
          filter: action.payload.filter,
          searchterm: state.searchterm
        } 

      case MARKALL_COMPLETED:
        return {
          todos: state.todos.map((todo) => ({...todo,completed:true})),
          filter: state.filter,
          searchterm: state.searchterm
        }

      case UPDATE_SEARCH_TERM:
        return {
          todos: state.todos,
          filter: state.filter,
          searchterm: action.payload.searchterm,
        }

      default:
        return state;
  } 
}

export default todoreducer;