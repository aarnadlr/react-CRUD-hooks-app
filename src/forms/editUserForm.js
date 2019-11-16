import React, { useEffect, useState} from 'react';

const EditUserForm = ({handleEditSubmit, userGettingEdited}) => {

	const [user, setUser] = useState(userGettingEdited)

	// 1. Fill up the input state with values
	// To use ONE handleChange to change multiple input values, you need to use ONE useState to hold multiple input vlaues,
	const handleInputChange = (e)=>{
		setUser({
			...user,
			[e.target.name]:e.target.value
		});
	};

	useEffect(()=>{
		setUser(userGettingEdited)
	},[userGettingEdited]);

function _handleEditSubmit(userObj, e) {
		e.preventDefault();
		// Pass up to App component
		handleEditSubmit(userObj);
	};

  return (
													// Pass up to handler the
    <form onSubmit={(e)=>{_handleEditSubmit( user, e)}}
		>
      <label>Name!!</label>
      <input onChange={(e)=>handleInputChange(e)} type="text" name="name" value={user.name} />

      <label>Username!!</label>
      <input onChange={(e)=>handleInputChange(e)} type="text" name="username" value={user.username} />

      <button type="submit">Submit Edit of new user</button>
    </form>
  );
};

export default EditUserForm;
