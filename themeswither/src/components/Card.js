import React from "react";
import  useTheme from "../contexts/theme";

function Card() {
  const { themeMode } = useTheme();

  return (
    <div style={{
      border: "2px solid black",
      background: themeMode === "light" ? "lightgreen" : "darkgreen",
      margin: "20px"
    }}>
      <h2>This is a card</h2>
      <p>Additionally, I added the themeMode as a class to the App component,
        assuming you want to apply different styles based on the theme</p>
    </div>
  );
}

export default Card;
