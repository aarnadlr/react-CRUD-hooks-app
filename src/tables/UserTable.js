import React, {useEffect} from 'react';

const UserTable = ({ users, handleDeleteClick, handleEditButton }) => {

  useEffect(()=>{
    console.log("users from USERTABLE:", users)
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        {users.users ? (
          users.users.map(userObj => (
            // Every user gets a ROW: name, username, edit btn, del btn
            <tr key={userObj.id}>
              <td>{userObj.name}</td>
              <td>{userObj.username}</td>
              <td>

                <button
                  onClick={()=>handleEditButton(userObj)}
                  className={'button muted-button'}
                >
                  Edit
                </button>

                <button
                  onClick={()=>handleDeleteClick(userObj.id)}
                  className={'button muted-button'}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
