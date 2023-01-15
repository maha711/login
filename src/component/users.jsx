import useFetch from "../hooks/useFetch";
import Table from "./common/table";
import Spinner from "./common/spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from "./userForm";
import { useState } from "react";

const Users = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: users, setData: setUsers } = useFetch("/users");
  const colums = [
    { lable: "id", path: "id" },
    { lable: "name", path: "name" },
    { lable: "username", path: "username" },
    {
      lable: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger me-2"
            onClick={() => handelDelet(item)}
          >
            delet
          </button>

          <button
            type="button"
            onClick={() => setSelectedItem(item)}
            className="btn btn-warning me-2"
          >
            edit
          </button>

          <Link to={`/users/${item.id}`} className="btn btn-primary">
            view
          </Link>
        </>
      ),
    },
  ];
  const handelDelet = (item) => {
    const newData = users.filter((i) => i.id !== item.id);
    setUsers(newData);
    toast.warning("users is delet", { theme: "colored" });
  };

  return (
    <>
      <div className="row m-2">
        <div className="col-8">
          <h1>users page</h1>
          {users ? <Table data={users} colums={colums} /> : <Spinner />}
        </div>
        <div className="col-4 ">
          <UserForm
            data={users}
            setData={setUsers}
            selectedItem={selectedItem}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
