import React from 'react';
import AddTask  from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

const  App= () => {

  return (
    <div className="App">
  
<AddTask />
<ListTask />


    </div>
  );
};

export default App;
