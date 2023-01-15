import useForm from "../hooks/useForm";
import Joi from "joi-browser";
const schema = {
  name: Joi.string().min(2).max(20).required().label("Fullname"),
  username: Joi.string().min(1).max(20).required().label("Username"),
};

const UserForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    id: null,
    name: "",
    username: "",
  };
  const { values, renderInput, renderButton, handelSubmit } = useForm(
    initialState,
    data,
    setData,
    selectedItem,
    schema
  );

  return (
    <form onSubmit={handelSubmit}>
      {renderInput("fullname", "name", values.name)}
      {renderInput("username", "username", values.username)}
      {renderButton("submit")}
    </form>
  );
};

export default UserForm;
