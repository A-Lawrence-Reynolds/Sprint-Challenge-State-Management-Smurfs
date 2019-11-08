import React from "react";

const DisplaySmurfs = state => {
  return (
    <div>
      {state.data.map(item => (
        <div key={date.now()}>
          <h1>{state.name}</h1>
          <h2>{state.age}</h2>
          <h3>{state.height}</h3>
        </div>
      ))}
    </div>
  );
};
export default DisplaySmurfs;
