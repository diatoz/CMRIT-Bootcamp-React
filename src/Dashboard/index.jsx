import React from "react";
import UserGreet from "./UserGreet";

function Fruits() {
  //This is done using Props

  return (
    <UserGreet
      name={"Raushan"}
      fruits={["Banana", "Mango", "Apple", "Orange"]}
      addresses={[
        { city: "Bangalore", state: "Karnataka" },
        { city: "Pune", state: "Maharashtra" },
      ]}
    />
  );
}

export default Fruits;
