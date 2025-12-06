import { useState } from "react";
import { UpdateComponent } from "./UpdateComponent";

export function UserDetails() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const updateNameAge = (age,name)=>{
    setAge(Number(age)+10);
    setName(name+"___")
  }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p>name : {name}<br/> age:{age}</p>
      <UpdateComponent updateNameAge={updateNameAge} name =  {name}  age = {age} />
    </div>
  );
}
