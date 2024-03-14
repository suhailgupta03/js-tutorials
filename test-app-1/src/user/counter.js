import { useState } from "react";

export function Counter() {
  const [totalClicks, setTotalClicks] = useState(0); // use state returns an array
  // where the first index is the initial state
  // that passed when calling the useState function
  // and the second index is the function that can be
  // used to update the state

    const onButtonClick = () => {
      const updatedClicks = totalClicks + 1;
      setTotalClicks(updatedClicks);
    };

  return (
    <div className="m-2">
      <p>
        You clicked the button
        <span className="bg-danger d-inline-block p-2 rounded">
          {totalClicks}
        </span>
        times
      </p>
      <button
        className="btn btn-primary"
        onClick={onButtonClick}
      >
        Click me
      </button>
    </div>
  );
}
