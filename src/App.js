import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const taskData = (props) => {
  const taskCompleteButtonClick = () => {
    const updatedTask = {
      id: props.id,
      title: props.title,
      isComplete: props.isComplete,
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdate(updatedTask);
  };

  const taskStatus = props.isComplete ? 'true' : 'false';

  return (
    <div>
      <ul>
        <li classTitle={taskStatus}>Task: {props.title}</li>
        {/* <li>title: {props.title}</li>  */}
      </ul>
      <button onClick={taskCompleteButtonClick}>
        Toggle if {props.id} is true or false
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

export default App;
