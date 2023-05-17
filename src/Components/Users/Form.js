import { useState } from "react";
import Button from "./../UI/Button";

import classes from "./Form.module.css";
import Card from "./../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a name and age >= 1",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter an age >= 1",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const closeErrorModalHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={closeErrorModalHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <div className={classes["input-box"]}>
            <label className={classes.label}>Username</label>
            <input
              className={classes.input}
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={classes["input-box"]}>
            <label className={classes.label}>Age (Years)</label>
            <input
              className={classes.input}
              value={enteredAge}
              onChange={ageHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
