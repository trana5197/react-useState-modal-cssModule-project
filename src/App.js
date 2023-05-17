import { useState } from "react";
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
    <div>
      <Form onAddUser={addToListHandler} />
      {showList && <NewUser user={userList} />}
    </div>
  );
};

export default App;
