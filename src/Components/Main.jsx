
import Header from "./Header/Header";
import 'semantic-ui-css/semantic.min.css'
import Tasks from "./Tasks/Tasks";
import AddTask from "./Tasks/AddTask";
import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";



function App() {
  const [showTasks, setShowTasks] = useState(true)
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasksFromServer = async () => {
      const res = await fetchTasks()
      setTasks(res)
    }
    getTasksFromServer()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json()
    return data;

  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    return data;

  }


  const DeleteTasks = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })

    const remainingTasks = tasks.filter((el) => el.id !== id)
    setTasks(remainingTasks)
  }

  const updateTask = async (id) => {
    const TaskToToggle = await fetchTask(id);
    const updatedTask = { ...TaskToToggle, done: !TaskToToggle.done }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })
  }


  const toggleDone = async (id) => {
    updateTask(id)
    
    //updateTask(id,updatedTask)

    const updatedTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task)
    setTasks(updatedTasks)

  }

  const insertTask = (task) => {
    setTasks([...tasks, task])
    //console.log("hello")
    // e.preventDefault();
  }


  
  return (

    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowTasks(!showTasks)} showTasks={showTasks} />
      {showTasks && <AddTask AddCard={insertTask} />}

      {tasks.length > 0 ? <Tasks Tasks={tasks} onToggle={toggleDone} onDelete={DeleteTasks} /> : <h3>No Tasks For Now !</h3>}
      <Footer/>
    </div>
  );
}



export default App;
