import React from "react";
import PropTypes from "prop-types";
function Person(props) {
  return (
    <div>
      Person
      <h5>Name:{props.name}</h5>
      <h6>Age:{props.age}</h6>
      <h6>Email:{props.email}</h6>
      <h6>Mobile:{props.mobile}</h6>
      {props.friends.map((friend, key) => {
        return <h1 key={key}>{friend}</h1>;
      })}
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  mobile: PropTypes.number,
  friends: PropTypes.arrayOf(PropTypes.string),
};

export default Person;
