import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])  /* setEntries is responsible for updating entries. useState([initializing with first entry]) */


  /* parentEntries to DisplayEntries props object */
  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>   
      <AddEntryForm />   
    </div>
  );
}

export default App;
