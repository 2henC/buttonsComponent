import React from 'react';
import MButton from './Compoments/CompomentButton/CompomentButton';


function App() {


  return (
    <div className="App">
      Kiểm tra CompomentButton
      <MButton
        variant="contained"
        size="medium"
        href="https://mui.com/material-ui/react-button/#sizes"
        color="success"
        className="mt-10"
      >
        Text
      </MButton>



    </div>
  );
}

export default App;
