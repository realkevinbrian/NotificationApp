import { useState } from "react";
import Appbar from "./components/Appbar";
import NotificationViewer from "./components/NotificationViewer";

function App() {
  const [limit, setLimit] = useState(3);

  return (
    <div className="App">
      <Appbar action = {setLimit}/>
      <NotificationViewer limit={limit}/>
    </div>
  );
}

export default App;
