import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./room";

function App() {
  return (
    <div>
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      </head>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/room/:roomID" element = {<Room />} />
      </Routes>
    </div>
  );
}

export default App;
