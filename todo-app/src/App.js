import {
  EmployeeDetails
} from "./my-paragraph"

// The above syntax IMPORTS the functions EXPORTED inside "my-paragraph.js"

function MyToDoApp() {
  return (
    <div>
      <EmployeeDetails city="delhi" name="arjun" age="20" /> 
      {
        /**
         * The above is a way to call a function that returns HTML
         * The above syntax is again JSX and this means
         * that we want to RENDER HTML (a.k.a JSX) being 
         * returned from MyCustomParagraph (component / function)
         */
      }
      <br />
     <EmployeeDetails name="raj" city="nagpur" age="23" />
    </div>
  )
}

export default MyToDoApp
// Using the default syntax here, because this file
// will never have any other function
// so, I want to clearly specify that this will be the only
// function that can be EXPORTED from this file