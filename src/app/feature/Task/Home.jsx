import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleDelete } from "./crudSlice";

const Home = () => {
  const navigation = useNavigate();
  const data = useSelector((state) => state.curd);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <div>
      <div>
        <button className="border my-5" onClick={() => navigation("/create")}>
          Create
        </button>
      </div>
      <table className="border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Name</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="border-2 bg-green-500 px-5"
                    onClick={() => navigation(`/edit/${item.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="border-2 bg-red-500 px-5"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
