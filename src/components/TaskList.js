import './styles/TaskList.scss'
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import firebase from "./../firebase";


const TaskList = (props) => {
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch()
  const count = useSelector(state => state.count )

  
  useEffect(() => {
    console.log(count);

    let todoRef = firebase.database().ref('todoList');
    todoRef.on('value', async (data) => {
      const todos = data.val();
      const todoList = [];
      for (let key in todos) {
        todoList.push({ key, ...todos[key] });
      }
      todoList.sort((a, b) => a.isDone ? 1 : -1);
      setTodoList(todoList);
    }, [])
  }, [])

  const updateList = (todo) => {
    let todoRef = firebase.database().ref('todoList').child(`${todo.key}`);
    todoRef.update({
      isDone: !todo.isDone,
    });
    console.log('UPDATE', todo);
  }

  return (
    <ul className="TaskList">
      {todoList.map((todo, i) => {
        return <Task todo={todo} key={todo.id} 
                    updateList={updateList} 
                    toggleForm={props.toggleForm}/>
      })}
    </ul>
  )
}

export default TaskList