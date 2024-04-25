import { ADD_TODO, FILTER_TODO, MARKALL_COMPLETED, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actiontype";

export const addtodo = (text) => ({
  type: ADD_TODO,
  payload: {text}
});

export const toggle = (id) => ({
  type: TOGGLE_TODO,
  payload: {id}
});

export const remove = (id) => ({
  type: REMOVE_TODO,
  payload: {id}
});

export const markincomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: {id}
});

export const markcomplete = (id) => ({
  type: MARK_COMPLETE,
  payload: {id}
});

export const filtertodos = (filter) => ({
  type: FILTER_TODO,
  payload: {filter}
});

export const markallcompleted = () => ({
  type: MARKALL_COMPLETED
}); 

export const updatesearchterm = (searchterm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: {searchterm}
})