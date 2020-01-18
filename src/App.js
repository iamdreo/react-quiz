import React, { useState } from 'react';
import './App.css';
import Category from './components/Category';
import Result from './components/Result';
import { FirstCategoryData, SecondCategoryData, ThirdCategoryData } from './Data';

/**
 * App holds entire application state, sets the result and on each card click changes the category
 */

function App() {
  const [category, setCategory] = useState(1)
  const [result, setResult] = useState(0)

  /**
   * @param {function} e - updates state on every card click
   */

  const cardClick = (e) => {
    setResult(parseInt(e.target.id) + result)
    setCategory(category + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Find out your this is us character</h3>
      </header>

      {(() => {
        switch (category) {
          case 1:
            return <Category data={FirstCategoryData} categoryNumber="First" onClick={cardClick} />;
          case 2:
            return <Category data={SecondCategoryData} categoryNumber="Second" onClick={cardClick} />;
          case 3:
            return <Category data={ThirdCategoryData} categoryNumber="Third" onClick={cardClick} />;
          case 4:
            return <Result result={result} />
          default:
            return null;
        }
      })()}


    </div>
  );
}

export default App;
