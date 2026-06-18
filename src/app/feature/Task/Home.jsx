import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const data = useSelector((state) => state.curd);

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
                  <button className="border-2 bg-green-500 px-5">Edit</button>
                  <button className="border-2 bg-red-500 px-5">Delete</button>
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
