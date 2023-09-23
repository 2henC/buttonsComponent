import React from 'react';
import MButton from './Compoments/CompomentButton/CompomentButton';


function App() {

  const handleClick = () => {
    alert('Button clicked!');
  }


  return (
    <div className="App">
      Kiểm tra CompomentButton
      <MButton
        variant="contained"
        color="success"
        size="small"
        className="custome-btn"
        onClick={handleClick}
      >
        Text
      </MButton>



    </div>
  );
}

export default App;
