import React from "react";
import userStore from "../store/userStore";
import { Route, Navigate, useNavigate } from "react-router-dom";

function HomePage() {
  const { authenticated, gUser, logout } = userStore();
  console.log(authenticated, gUser);
  // const navigate = useNavigate()

  return (
    <>
      <div className="h-[100vh] bg-slate-950 flex justify-center items-center text-white">
        {!authenticated ? (
          <Navigate to="/signin" />
        ) : (
          <>
            <h1>HomePage {gUser.name}</h1>{" "}
            <button
              onClick={logout}
              className="bg-blue-500 m-5 p-2 px-5 rounded-full"
            >
              clearData
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
