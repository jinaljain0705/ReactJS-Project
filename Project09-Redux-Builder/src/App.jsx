import React from 'react'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'

function App() {

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Smart Task Manager</h1>
        <TaskList />
        <TaskForm />
      </div>
    </>
  );
}

export default App;
