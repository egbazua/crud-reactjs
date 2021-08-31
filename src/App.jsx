import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [task, setTask] = useState('');
  const [taskForm, setTaskForm] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState('');

  const addTask = (e) => {
    e.preventDefault();

    if(!task.trim()){
      return console.log("empty element")
    }

    console.log(task);

    setTaskForm([
      ...taskForm,
      {id: nanoid(), taskName: task}
    ])

    setTask('');
  }

  const deleteTask = (id) => {
    console.log(id);

    const filterArray = taskForm.filter(item => item.id !== id);
    setTaskForm(filterArray);
  }

  const taskEditMode = (item) => {
    console.log(item);

    setEditMode(true);
    setTask(item.taskName);
    setId(item.id)
  }

  const editTask = (e) => {
    e.preventDefault();

    if(!task.trim()){
      return console.log("empty element")
    }

    const editedArray = taskForm.map((item) => (item.id === id ? { id, taskName: task} : item))

     setTaskForm(editedArray);
     setEditMode(false);
     setTask('');
     setId('');
  }

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center"> CRUD - REACTJS</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center"> Task List </h4>
            <ul className="list-group">
              {
                taskForm.map(item => (
                  <li className="list-group-item mt-1" key={item.id}>
                    <span className="lead"> {item.taskName} </span>
                    <button className="btn btn-danger btn-sm float-end mx-2" onClick={() => deleteTask(item.id)} >Delete</button>
                    <button className="btn btn-warning btn-sm float-end" onClick={() => taskEditMode(item)}>Edit</button>
                </li>
                ))
              }
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">
              {
                editMode ? 'Edit Task' : 'Add Task'
              }
            </h4>
            <form onSubmit={editMode ? editTask : addTask}>
              <input type="text" onChange={ e => setTask(e.target.value) } value={task} className="form-control mb-2" placeholder="Enter Task"/>
              {
                editMode ? (
                  <button className="btn w-100 btn-warning" type="submit">Edit</button>    
                ) : (<button className="btn btn-dark w-100" type="submit">Add</button>)
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;