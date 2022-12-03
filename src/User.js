import React from "react";

function User(props) {
  return (
    props.user.display && (
      <h1>
        {props.user.name} {props.user.age}
      </h1>
    )
  );
}

export default User;
