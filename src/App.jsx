import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [task, setTask] = useState('');
  const [taskForm, setTaskForm] = useState([]);

  const addTask = (e) => {
    e.preventDefault;

    if(!task.trim()){
      return console.log("empty element")
    }

    console.log(task);

    setTastkForm([
      ...taskForm,
      {id: nanoid.generate(10), taskName: task}
    ])

    setTask('');
  }

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center"> CRUD - REACTJS</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center"> Taks List </h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="lead"> Task Name </span>
                <button className="btn btn-danger btn-sm float-end mx-2">Delete</button>
                <button className="btn btn-warning btn-sm float-end">Edit</button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center"> Form </h4>
            <form onSubmit={addTask}>
              <input type="text" onChange={ e => setTask(e.target.value) } value={task} className="form-control mb-2" placeholder="Enter Task"/>
              <button className="btn btn-dark w-100" type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;