import React, { useState } from "react";
import Input from "./input";
import Button from "./Button.jsx";
import axios from "axios";
const ServiceCard = () => {
  const [type, setType] = useState("signin");

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

    console.log(response.data);
  }

  return (
    <>
      <form
        onSubmit={submitHandle}
        className=" p-5 px-8 mx-auto max-w-[450px] bg-[#101010] "
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

        <Button
        
          kind="primary"
          className="w-full"
          label="submit"
        />
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
    </>
  );
};

export default ServiceCard;
