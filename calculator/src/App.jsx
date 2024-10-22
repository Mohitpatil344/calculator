import { useState } from 'react';
import './App.css';

function App() {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=','C','DEL'];
  const [value, setValue] = useState('');

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // Function to handle button clicks
  const handleClick = (e) => {
    const id = e.target.id;

    // Clear the input
    if (id === 'C') {
      setValue('');
      return;
    }

    // Delete the last character
    if (id === 'DEL') {
      setValue(value.slice(0, -1));
      return;
    }

    // Perform calculation when '=' is clicked
    if (id === '=') {
      try {
        // Evaluate the expression safely
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
      return;
    }

    // Append the clicked button value to the current input
    setValue(value + id);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter a number"
        value={value}
        onChange={handleInputChange}
      />
      <div className="container">
        {buttons.map((item) => (
          <button
            id={item}
            className="button"
            onClick={handleClick}
          >
            {item}
          </button>
        ))}
     
      </div>
    </div>
  );
}

export default App;
