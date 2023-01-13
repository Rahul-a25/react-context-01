import "./App.css";

import context from "./Components/Context";
import MyContext from "./Components/MyContext";
import NavBar from "./Components/NavBar";
import LINK from "./Components/LINK";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <context.Provider value={theme}>
      <LINK/>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <NavBar />
    </context.Provider>
  );
}

export default App;