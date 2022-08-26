// import React from 'react';
//import './App.css';
//import Tag from './Tag';
function App() {
  return (
    <div className="App">
      <Tag 
        backgroundColor="#ff0000"
        color="white"
        borderRadius="0"
        label="Youtube"
      />
      <Tag 
        backgroundColor="#6441a5"
        color="hsl(0, 0%, 100%)"
        borderRadius="4"
        label="Twitch"
      />
      <Tag 
        backgroundColor="#e1306c"
        color="rgb(255, 255, 255)"
        borderRadius="8"
        label="Instagram"
      />
    </div>
  );
}
export default App;