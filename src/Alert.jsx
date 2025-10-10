const Alert = ({ type, message }) => {
  const colors = {
    success: "green",
    error: "red",
    warning: "orange",
  };
  return (
    <div style={{ color: colors[type] || "black", padding: "8px" }}>
      {message}
    </div>
  );
};

export default Alert;