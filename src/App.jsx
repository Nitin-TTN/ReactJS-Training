import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddUser = () => {
    if (userName.trim() !== '') {
      setUserList([...userList, userName]);
      setUserName('');
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add</button>
      </div>
      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h1>Question 2</h1>
      <h2>Form</h2>
      <Form/>
    </div>
  );
};

export default App;
