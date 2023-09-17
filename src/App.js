import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [showButton, setShowButton] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app running");

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowButton((prevShowButton) => !prevShowButton);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevToggle) => !prevToggle);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title!");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showButton} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleHandler}>Toggle Paragraph!</Button>
      <br />
      <br />
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
