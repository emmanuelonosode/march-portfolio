import React, { useState } from "react";
import Input from "./input";
import Button from "./Button.jsx";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import userStore from "../store/userStore.js";
const ServiceCard = () => {
  const { authenticated, gUser, login } = userStore();

  console.log(authenticated, gUser);

  const [type, setType] = useState("signin");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function submitHandle(event) {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/signin",
      formData
    );

    console.log(response.data.user);
    if (response.status === 200) {
      login(response.data);
      navigate("/");
    }
  }

  return (
    <>
      <div className="h-[100vh] bg-slate-950 flex justify-center items-center">
        <form
          onSubmit={submitHandle}
          className="shadow-slate-900 text-white shadow-lg p-5 px-8 w-[400px] bg-[#101010] "
        >
          <h1 className="text-3xl">Welcome</h1>
          {type === "signin" ? (
            <Input
              value={formData.name}
              onChange={handleChange}
              id="name"
              label="name"
              type="text"
              placeHolder="name"
            />
          ) : (
            ""
          )}
          <Input
            value={formData.email}
            onChange={handleChange}
            id="email"
            label="email"
            type="text"
            placeHolder="email"
          />
          <Input
            value={formData.password}
            onChange={handleChange}
            id="password"
            label="password"
            type="password"
            placeHolder="password"
          />

          <Button kind="primary" className="w-full" label="submit" />
          {type === "signin" ? (
            <>
              <p>already have an account? </p>{" "}
              <small onClick={() => setType("signup")}>login</small>
            </>
          ) : (
            <>
              <p>new here</p>{" "}
              <small onClick={() => setType("signin")} href="signin">
                signup
              </small>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ServiceCard;
