import { createStore } from "redux"
import allReducers from "./allreducers/index"


const store = createStore(
  allReducers,
  {}
)
export default store


