// JSX is HTML inside a Javscript file / function
// React will ensure that this does not give an error
// and will also ensure that this gets converted to regular HTML
export function EmployeeDetails(props) {
    // props will be an object that will have all
    // the values / properties passed
    const {name, age, city} = props;
    return (
        <div>
            <p>Employee Name: <b>{name}</b></p>
            <p>Employee Age: <b>{age}</b></p>
            <p>Employee City: <b>{city}</b></p> 
        </div>
    )
}

export function MyOtherCustomParagraph() {
    return <h2>
        Hello, this is my custom paragraph. This is also 
        an example of JSX
    </h2>   
}

// The above export statements EXPORT the functions to 
// other files so that they can be used from 
// somewhere else