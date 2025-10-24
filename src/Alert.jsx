import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const url="https://jsonplaceholder.typicode.com/users";

const Alert = ({ type, message }) => {
  const colors = {
    success: "green",
    error: "red",
    warning: "orange",
  };
  const [timer, setTimer] = useState(0);
  const [data] = useFetch(url);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1); // Use functional update for correct state
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 



  return (
    
    <div style={{ color: colors[type] || "black", padding: "8px" }}>
      {console.log("rendering")}
      {message}
      <br/>
      {timer}
    </div>
  );
};

export default Alert;