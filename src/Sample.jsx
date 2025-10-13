import { useEffect, useState } from "react";

let timeoutId;

export function Sample() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterdUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
    } catch (e) {
      console.error("catch bloack", e);
    }
  };

  console.log(searchString);

  const handleFilterUsers = () => {
    const filtered = users.filter((user) =>
      JSON.stringify(user)
        .toLowerCase()
        .includes(searchString.toLocaleLowerCase())
    );
    setFilterdUsers(!!searchString ? filtered : users);
  };

  // Effect to debounce the input value
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchString(inputValue);
    }, 500); 

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]); 

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFilterUsers();
  }, [searchString, users]);

  return (
    <>
      <input id="searchinput" value={inputValue} onChange={handleChange} />
      {searchString && (
        <p>
          Results with <strong>{searchString}</strong>{" "}
        </p>
      )}
      <table style={{ marginTop: 10 }}>
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
