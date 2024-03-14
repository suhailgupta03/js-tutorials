import { useEffect, useState } from "react";

export function Counter() {
  const [totalClicks, setTotalClicks] = useState(0); // use state returns an array
  // where the first index is the initial state
  // that passed when calling the useState function
  // and the second index is the function that can be
  // used to update the state
  const [comments, setComments] = useState([]);

  const onButtonClick = () => {
    const updatedClicks = totalClicks + 1;
    setTotalClicks(updatedClicks);
  };

  useEffect(() => {
    // exactly same as componentDidMount
    console.log("My component was rendered");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((r) => r.json())
      .then((d) => {
        setComments(d); // updating the state
        // once we have the data from the server
      });
  });

  return (
    <div className="m-2">
      {/* <p>
        You clicked the button
        <span className="bg-danger d-inline-block p-2 rounded">
          {totalClicks}
        </span>
        times
      </p>
      <button className="btn btn-primary" onClick={onButtonClick}>
        Click me
      </button> */}

      {comments.length > 0
        ? comments.map((comment) => <p>{comment.body}</p>)
        : "Loading.."}
    </div>
  );
}
