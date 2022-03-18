import React, { useContext } from "react";
import AuthContext from "../hooks/authContext";
import { logOut } from "../utils/functions";

const Feed = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="container">
      <div className="h1 py-5">I am the personal and secure page !!</div>
      <div className="my-4">
        <div className="container py-5">
          <h2>
            Logged as : <span className="text-danger">{auth.data?.email}</span>
          </h2>
        </div>
        <button className="btn btn-danger" onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Feed;
