const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);

import { use, useEffect, useEffectEvent } from "react";

function User() {
  const user = use(todoPromise);
  const onScroll = useEffectEvent(() => {
    console.log("mving");
  });

  useEffect(() => {
    window.addEventListener("mousemove", onScroll);
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <h1>ID: {user.id}</h1>
      <h1>Title: {user.title}</h1>
      <h1>UserID: {user.userId}</h1>
      <h1>Status: {user.completed ? "Completed" : "Not completed"}</h1>
    </>
  );
}

export default User;
