import Card from "./../UI/Card";

import classes from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <Card>
      <ul className={classes.lists}>
        {props.user.map((user) => {
          return (
            <li className={classes.list} key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default NewUser;
