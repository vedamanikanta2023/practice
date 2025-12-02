async function addUser(formData) {
  "use server";
  const name = formData.get("name");
  const phonenumber = formData.get("phonenumber");

  console.log("User added:", {name,phonenumber});
}

export default function Form() {
  return (
    <form action={addUser}>
      <input name="name" />
      <input name="phonenumber" />
      <button type="submit">Submit</button>
    </form>
  );
}