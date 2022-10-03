import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


function App() {

  /* setEntries is function responsible for updating state variable entries, call it when need to update entries */
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])  /* setEntries is responsible for updating entries. useState([initializing with first entry]) */
  /* using .map() to modify the entries to use in EntriesChartTracker*/

  /* DisplayEntries - passing data DOWN TO a child - parentEntries attribute passes down to component DisplayEntries props object */
  /* AddEntryForm - getting data FROM a child - function reference to pass down to child component, child then invokes func on parent*/

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];    /*...entries = spread apart entries state variable - taking the entries array, every value inside of it and placing inside new array that we set tempEntries equal to. without spreading apart - creating a nested array*/
    setEntries(tempEntries);
  }
  /* instantiating child components below */
  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>   
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );    /* not setting addNewEntryProperty={addNewEntry()} bc this will set equal to the result of the function. Setting equal to the function reference instead to use as a pointer to call addNewEntryProperty like a function and it will execute addNewEntry function*/
}

export default App;
