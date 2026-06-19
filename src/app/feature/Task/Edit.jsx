import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleUpdate } from "./crudSlice";
import { Navigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const users = useSelector((state) => state.curd);
  const dispatch = useDispatch();

  const user = users.find((user) => user.id === Number(id));

  const [editName, setEditName] = useState(user?.name || "");
  const [editEmail, setEditEmail] = useState(user?.email || "");

  const onEdit = () => {
    dispatch(
      handleUpdate({ id: Number(id), name: editName, email: editEmail }),
      navigation("/"),
    );
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="border-2 w-200 h-50 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Edit name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="border-2"
        />
        <br />
        <input
          type="text"
          placeholder="Edit email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
          className="border-2"
        />
        <br />
        <button className="bg-gray-800 px-5 py-1" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edit;
