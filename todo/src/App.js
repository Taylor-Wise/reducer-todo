import React, { useState, useReducer } from "react";
import ToDo from "./Components/ToDo";
import ToDoForm from "./Components/ToDoForm";
import "./App.css";
import { reducer, initialState } from "./Reducers/reducer";

function App() {
  const [newTask, setNewTask] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleComplete = (clickId) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: clickId });
    console.log("Success");
  };

  const clearComplete = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETE" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTask });
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="App">
      <div className="AppHeader">Create Your To Do List!</div>
      <ToDoForm
        clearComplete={clearComplete}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ToDo state={state} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
