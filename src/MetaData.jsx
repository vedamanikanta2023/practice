import * as  React from "react";

export function MetaData() {

    React.useEffect(() => {
    // ✅ Set page title
    document.title = "Dashboard | Budget Tracker";

    // ✅ Update existing meta tag (or create if missing)
    let description = document.querySelector("meta[name='description']");
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = "View your expense dashboard and track your finances.";

    // ✅ You can also add Open Graph or other tags dynamically
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", "Budget Tracker Dashboard");
  }, []);

  return (
     <>

      <h1>Welcome to Budget Tracker</h1>
    </>
  );
}
