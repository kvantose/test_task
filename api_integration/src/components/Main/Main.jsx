import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Main() {
  const [users, setUsers] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="main__container">
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li onClick={() => nav(`/user/${user.id}`, { state: user })}>{user.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Main;
