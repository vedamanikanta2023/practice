import { useEffect, useState } from "react";

export function Sample() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterdUsers] = useState([]);
  const [searchString, setSearchString] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      // handleFilterUsers()
    } catch (e) {
      console.error("catch bloack", e);
    }
  };

  const handleFilterUsers = () => {
    const filtered = users.filter((user) =>
      JSON.stringify(user).toLowerCase().includes(searchString.toLocaleLowerCase())
    );
    setFilterdUsers(!!searchString ? filtered : users);
  };

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    handleFilterUsers();
  }, [searchString, users]);

  return (
    <>
      <input id="searchinput"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      {searchString && (
        <p>
          Results with <strong>{searchString}</strong>{" "}
        </p>
      )}
      <table  style={{marginTop:10}}>
        <tbody>
          <tr>
            <th style={{ textAlign: "start" }}>email</th>
            <th style={{ textAlign: "start" }}>name</th>
            <th style={{ textAlign: "start" }}>website</th>
          </tr>
          {filteredUsers.map((user, ind) => (
            <tr key={JSON.stringify(user)}>
              <td style={{ textAlign: "start" }}>{user.email}</td>
              <td style={{ textAlign: "start" }}>{user.name}</td>
              <td style={{ textAlign: "start" }}>
                <a href={"https://" + String(user.website)} target="_blank">
                  {user.website}
                </a>
                <a href="https://www.w3schools.com" target="_blank">
                  Visit W3Schools!
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
