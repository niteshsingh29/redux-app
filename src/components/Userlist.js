import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Link } from 'react-router-dom';
import { editUser } from "../redux/Counter/counter.action";
const Userlist = () => {
  const myReduxstate = useSelector((state) => state.crudReducer);
  console.log("myReduxstate", myReduxstate);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        {myReduxstate.user.map((user, index) => {
          return (
            <>
              <div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.number}</div>
                <button
                  value={index}
                  onClick={(e) =>
                    dispatch(
                      editUser({
                        index: e.target.value,
                      })
                    )
                  }
                >
                  <Link to="/editUser">Edit Now !</Link>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Userlist;
