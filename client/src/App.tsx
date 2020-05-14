import React from "react";
import axios from "axios";

function App() {
  const [visits, setVisits] = React.useState<number | null>(null);

  React.useEffect(() => {
    axios.get("/api").then((res) => setVisits(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Visits: {visits}</h1>
    </div>
  );
}

export default App;
