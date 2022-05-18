
import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([])
  

  const addUSerHandler = (uName,uAge) => {
 
    setUserList (prevUserList => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  const deleteFunctionHandler = (id) => {
		const filteredList = userList.filter((el) => {
			if (el.id !== id) {
				return [id]
			}
		})
		console.log(filteredList)
		setUserList(filteredList)
	}

  return (
    <div className="App">
      <AddUser onAddUser={addUSerHandler}/>
      <UsersList users={userList} onDelete={deleteFunctionHandler}/>
    </div>
  );
}

export default App;


