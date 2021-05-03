import React from "react";

function Person({ son }) {
  return (
    <div>
      <h2>I am {son.name},my age is {son.age}.I am good at {son.skill}</h2>
    </div>
  );
}

export default Person;
