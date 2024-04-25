import { createStore } from "redux";
import todoreducer from "./reducer";

const store = createStore(todoreducer);

export default store;