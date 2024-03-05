import {
  ToDoText
} from "./todo-text"

function loadTodoListFromServer() {
  return [
    "Have breakfast at 9:00 AM",
    "Leave for office by 10:00 AM",
    "Have lunch at 2:00 PM",
    "Start back by 6:00 PM",
    "Have dinner by 9:00 PM",
    "Sleep by 11:00 PM"
  ]
}
// The above syntax IMPORTS the functions EXPORTED inside "my-paragraph.js"
function MyToDoApp() {
  const data = loadTodoListFromServer();
  const todoList = [];
  for(let i=0;i<data.length;i++) {
    todoList.push(<ToDoText text={data[i]} />)
  }
  // todoList is a list of all the todo-components
  return (
    <div className="container bg-black">
      {todoList}
      <br />
      <br />
      <ToDoText text={data[0]} />
      <ToDoText text={data[1]} />
    </div>
  )
}

export default MyToDoApp
// Using the default syntax here, because this file
// will never have any other function
// so, I want to clearly specify that this will be the only
// function that can be EXPORTED from this file