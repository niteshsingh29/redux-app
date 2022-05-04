import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/Counter/counter.action";
import { Link } from "react-router-dom";
const Adduser = () => {
  const [state, setState] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <div>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        MOney
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() =>
            dispatch(
              addUser({
                name: name,
                email: email,
                number: number,
              })
            )
          }
        >
          <Link
            to="/userlist"
            style={{ textDecoration: "none", color: "black" }}
          >
            Submit
          </Link>
        </button>
      </div>
    </>
  );
};

export default Adduser;
