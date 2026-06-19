import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd } from "./crudSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigate();

  const user = useSelector((state) => state.curd);

  console.log(name);
  console.log(email);
  console.log(user);

  const canSubmit = Boolean(name && email);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const newId = user.length ? user[user.length - 1].id + 1 : 1;

    dispatch(handleAdd({ name, email, id: newId }));
    setName("");
    setEmail("");
    navigation("/");
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="border-2 w-200 h-50 flex flex-col items-center justify-center">
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2"
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2"
        />
        <br />
        <button
          className="bg-gray-800 px-5 py-1"
          onClick={onSubmit}
          disabled={!canSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Create;
