import { UsernameInput } from "./UsernameInput";
import { LoadComments } from "./load-comments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/load-comments" Component={LoadComments} />
        <Route path="/password-validator" Component={UsernameInput} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// Using the default syntax here, because this file
// will never have any other function
// so, I want to clearly specify that this will be the only
// function that can be EXPORTED from this file
