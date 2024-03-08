import {UsernameInput} from "./UsernameInput"

function App() {
  return <div className="container">
    <UsernameInput />
  </div>
}

export default App
// Using the default syntax here, because this file
// will never have any other function
// so, I want to clearly specify that this will be the only
// function that can be EXPORTED from this file