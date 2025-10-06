import { useEffect, useState } from "react";

export function Sample() {
    const [users,setUsers]=useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    } catch (e) {
      console.error("catch bloack", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <table>
  <tr>
    <th>email</th>
    <th>name</th>
    <th>website</th>
  </tr>
{users.map((user,ind)=><tr>
    <td>{user.email}</td>
    <td>{user.name}</td>
    <td>
    <a href={
        "https://"+String(user.website)} target="_blank">{user.website}</a>
    <a href="https://www.w3schools.com" target="_blank">Visit W3Schools!</a>
    </td>
  </tr>)  }
  
</table>;
}
