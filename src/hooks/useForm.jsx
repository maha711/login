import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

const useForm = (initialState, data, setData, selectedItem, schema) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedItem) setValues(selectedItem);
  }, [selectedItem]);

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const inputSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, inputSchema);
    return error ? error.details[0].message : null;
  };

  const handelInput = (e) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(e.target);
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
    setErrors(newErrors);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      toast.error("All Fields Required ", { theme: "colored" });
      return;
    }
    if (values.id) {
      //edit
      const index = data.findIndex((d) => d.id === values.id);
      const newData = [...data];
      newData[index] = values;
      setData(newData);
      toast.success("user is updata", { theme: "colored" });
    } else {
      //add
      const newValues = { ...values };
      const id = data[data.length - 1].id + 1 || 1;
      newValues.id = id;
      setData([newValues, ...data]);
      toast.success("user is add", { theme: "colored" });
    }
    setValues(initialState);
  };

  const renderInput = (label, name, value, type = "text") => {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className={
            errors[name]
              ? "form-control is-invalid"
              : (value === "" && "form-control") || "form-control is-valid"
          }
          id={name}
          name={name}
          value={value}
          onChange={handelInput}
        />
        <div className="valid-feedback">Looks good!</div>
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          {errors[name] && errors[name]}
        </div>
      </div>
    );
  };
  const renderButton = (label) => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={Object.keys(errors).length > 0}
      >
        {label}
      </button>
    );
  };

  return { values, handelInput, handelSubmit, renderInput, renderButton };
};

export default useForm;
