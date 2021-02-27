import React from 'react'

const Task = (props) => {

    const editTask = () => {
        props.toggleForm(props.todo.id)
    }
    const handleChange = () => {
        props.updateList(props.todo)
    }
    const { title, isDone, id} = props.todo
    return (
        <li className={"Task " + (isDone ? 'done': '')}>
          <div className="check">
            <input type="checkbox" defaultChecked={isDone} onChange={handleChange} id={id}/>
            <label htmlFor={id}>
              <span></span>
            </label>
          </div>
          <p className="title">{title}</p>
  
          <div className="options">
            <button className="btn" 
                onClick={editTask}>EDIT</button>   
          </div>
        </li>
    )
}

export default Task