

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.avatar} alt={user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
