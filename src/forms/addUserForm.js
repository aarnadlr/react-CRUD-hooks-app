import React, { useState } from 'react';

const AddUserForm = ({ addUser, users }) => {
  const [inputValue, setInputValue] = useState({
    //MAP the state shape to the event properties: e.target.name, e.target.value
    id: null,
    name: '',
    username: ''
  });

  const [doesUserAlreadyExist, setDoesUserAlreadyExist] = useState(false);

  // 1. Fill up the input state with values
  // To use ONE handleChange to change multiple input values, you need to use ONE useState to hold multiple input vlaues,
  const handleInputChange = e => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
  };

  // 2. Pass all the values (values object) into a
  const handleFormSubmit = e => {
    e.preventDefault();

    //minor input validation: Do nothing if either field is blank
    if (!inputValue.name || !inputValue.username) return;


		//CHECK IF USERNAME ALREADY EXISTS
		// "if the same inputValue.name is found as a name in the existing state userObjects..."
		if(users.find(userObj=>userObj.name === inputValue.name)){
			// alert('ALREADY EXISTS!')
			setDoesUserAlreadyExist(true);
		}else{
			// alert('ALL GOOD :)!')
			addUser(inputValue)
		}

  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name!</label>
      <input
        onChange={e => handleInputChange(e)}
        type="text"
        name="name"
        value={inputValue.name}
      />

      <label>Username!</label>
      <input
        onChange={e => handleInputChange(e)}
        type="text"
        name="username"
        value={inputValue.username}
      />

      <button type="submit">Add new user</button>
      {doesUserAlreadyExist && (
        <h5>Sorry, user already exists! Try another one</h5>
      )}
    </form>
  );
};

export default AddUserForm;
