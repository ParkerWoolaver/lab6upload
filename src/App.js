import React, { useState } from 'react';
import './App.css';

//function that calculates the total calories based on macronutrient breakdown
function App() {

  //setting defualt values 
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [calories, setCalories] = useState(0);

  //setting the caloric values of each macro per gram eg. 1g fat = 9cal
  //multiplying gram by caloric value and adding them together as totalCalories
  //setting totalCalories
  const calculateCalories = () => {
    const fatCalories = parseFloat(fat) * 9;
    const proteinCalories = parseFloat(protein) * 4;
    const carbsCalories = parseFloat(carbs) * 4;
    const totalCalories = fatCalories + proteinCalories + carbsCalories;
    setCalories(totalCalories);
  };

  return (
    <div className="App">
      <h1>Macronutrient Calorie Calculator</h1>
      <form>
        <div className="form-group">
          <label htmlFor="fat">Fat(g):</label>
          <input
            type="number"
            id="fat"
            name="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="protein">Protein(g):</label>
          <input
            type="number"
            id="protein"
            name="protein"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carbs">Carbohydrates(g):</label>
          <input
            type="number"
            id="carbs"
            name="carbs"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateCalories}>
          Calculate Calories
        </button>
      </form>
      {calories !== 0 && (
        <div className="result">
          <p>Total Calories: {calories}</p>
        </div>
      )}
    </div>
  );
}

export default App;
