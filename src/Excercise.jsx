import React from "react";

function Excercise() {
  return (
    <div>
      Excercise
      <Job salary={25000} position="Node Js Developer" company="ioss" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3>Salary : {props.salary}</h3>
      <h3>Position : {props.position}</h3>
      <h3>Company : {props.company}</h3>
    </div>
  );
};

export default Excercise;
