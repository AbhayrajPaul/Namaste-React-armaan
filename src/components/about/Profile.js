import { useState } from "react";

const Profile = (props) => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2 className="text-4xl font-bold">
        Profile Functional Component {props.name}{" "}
      </h2>
      <h2>count : {count}</h2>
      <button onClick={() => setCount(100)}>Update Count</button>
    </>
  );
};

export default Profile;
