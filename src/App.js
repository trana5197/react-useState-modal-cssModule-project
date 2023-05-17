import { useState, Fragment } from "react";
import Form from "./Components/Users/Form";
import NewUser from "./Components/Users/NewUser";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [showList, setShowList] = useState(false);

  const addToListHandler = (userName, userAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });

    setShowList(true);
  };

  return (
    <Fragment>
      <Form onAddUser={addToListHandler} />
      {showList && <NewUser user={userList} />}
    </Fragment>
  );
};

export default App;
