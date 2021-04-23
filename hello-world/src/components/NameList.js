import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Bruce", age: 23, skill: "React" },
    { id: 2, name: "Clark", age: 24, skill: "Vue" },
    { id: 3, name: "Diana", age: 21, skill: "Angular" },
  ];
  const personList = persons.map((person) => (
    <Person Key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
