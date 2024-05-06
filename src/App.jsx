import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
   const theme = useSelector(state => state.theme.value);

  return (
    <>
      <div
        className={`bg-${theme} text-${theme === "light" ? "black" : "white"}`}
      >
        {/* /<button onClick={() => dispatch(themeToggle())}>toogle</button> */}
        <h2>hello world</h2>
      </div>
    </>
  );
}

export default App;
