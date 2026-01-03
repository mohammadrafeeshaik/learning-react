import { useState } from "react";

const User = (props) => {
  const { name, role } = props;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Description: {role}</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
    </div>
  );
};

export default User;
