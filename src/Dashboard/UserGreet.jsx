import React from "react";

function UserGreet(props) {
  return (
    <div>
      <h3 className="text-center">Welcome Back {props.name}</h3>
      <ul>
        {props.fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
      <ul>
        {props.addresses.map((address) => (
          <>
            <li>
              {address.city} - {address.state}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default UserGreet;
