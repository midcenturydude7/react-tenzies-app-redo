/* eslint-disable react/jsx-key */
import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [dice, setDice] = React.useState(allNewDice);
  
  function allNewDice() {
    const newDice = [];
    for(let i=0; i<10; i++) {
      newDice.push(Math.ceil(Math.random()*6));
    }
    return newDice;
  }

  const diceElements = dice.map(die => 
    <Die key={nanoid()} value={die}/>
  );

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  );
}

export default App;
