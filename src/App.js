import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {

  return <>{
  data.map((elem)=>{
    return  <Question key={elem.id} {...elem}></Question>;
  })
   
  }
  </>;
}

export default App;
