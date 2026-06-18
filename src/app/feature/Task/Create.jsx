import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="border-2 w-200 h-50 flex flex-col items-center justify-center">
        <input type="text" placeholder="name" className="border-2" />
        <br />
        <input type="text" placeholder="email" className="border-2" />
        <br />
        <button className="bg-gray-500 px-5 py-1">submit</button>
      </div>
    </div>
  );
};

export default Create;
