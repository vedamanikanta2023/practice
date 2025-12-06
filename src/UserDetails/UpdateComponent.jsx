export const UpdateComponent = ({ age, name,updateNameAge}) => {

  return <button onClick={()=>updateNameAge(age,name)}>Update</button>;
};


