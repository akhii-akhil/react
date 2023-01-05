import React from "react";

export default function App() {
  const current = new Date();
  var seconds = `${current.getSeconds()}`;
  var minutes = `${current.getMinutes()}`;
  var hours = `${ current.getHours() }`;
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <label>{date}</label>
    </div>
  );
}