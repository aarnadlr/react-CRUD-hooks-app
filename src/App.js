import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/addUserForm';
import EditUserForm from './forms/editUserForm';

function App() {
  const initialUsersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ];

  const [users, setUsers] = useState(initialUsersData);

  // EDITING 1: Whether to swap in the EDIT FORM onto the page!
  const [isEditing, setIsEditing] = useState(false);

  // EDITING 2: Separate state to store the data the user is typing into the EDIT inputs
  // This data needs to get passed down to the EDIT FORM to be DISPLAYED inside the Edit input fields
  const [userGettingEdited, setUserGettingEdited] = useState({});


  // EDITING 3: This handler is called by the EDIT Button in the UserTable
  // When the user clicks EDIT:
  const handleEditButton = userObj => {
    // Display the EDIT form
    setIsEditing(true);
    // Receive that particular user whose object is to be edited.
    // Pass the user data into local state, so you can then DISPLAY the data in the editable input fields
    setUserGettingEdited({
      id: userObj.id,
      name: userObj.name,
      username: userObj.username
    });
  };

  // EDITING 4: Submit edited user object.
  // This handler is passed down into, and called by, the EDIT FORM component.
  //
  const handleEditSubmit = (updatedUser) => {
    // Swap back in the regular AddUser form
    setIsEditing(false);
    // Set the primary user state with new updated user data, as provided by user.
    // Map over the users array of user objects.
    // If the ID of any of the current userObjects is the same ID as the just-updated user,
    // add the UPDATED USER to the users array. Else, add the user as before.
    setUsers(users.map(userObj => (userObj.id === updatedUser.id ? updatedUser : userObj)));
  };

  const addUser = inputValue => {
    // Change the id value (curr null) to +1 of the current state length
    inputValue.id = users.length + 1;

    setUsers([...users, inputValue]);
  };

  const handleDeleteClick = id => {
    setUsers(users.filter(userObj => userObj.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD app</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h2>{isEditing ? 'Edit' : 'Add'} User</h2>

          {
            !isEditing
            ?

            <AddUserForm
              addUser={addUser}
              isEditing={isEditing}
              users={users}
            />

          :

            <EditUserForm
              handleEditSubmit={handleEditSubmit}
              userGettingEdited={userGettingEdited}
            />
          }
        </div>

        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable
            users={users}
            handleDeleteClick={handleDeleteClick}
            handleEditButton={handleEditButton}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
