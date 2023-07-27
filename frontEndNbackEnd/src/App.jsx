import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((allUsers) => setUsers(allUsers));
  }, []);

  return (
    users &&
    users.map((user) => (
      <div key={crypto.randomUUID()}>
        <h1>{user.first_name}</h1>
      </div>
    ))
  );
}

export default App;
