import React, { useState } from 'react';


const AddEntryForm = (props) => {
    
    const[weight, setWeight] = useState(0);     /*setWeight is the function to call to update weight. setWeight(event.target.value) is what makes what you type display in the input box - value is bound to weight state variable */
    const[date, setDate] = useState('');

    /* page reloads, submitting a form, function to avoid this */
    function handleSubmit(event) {
        event.preventDefault();     /* prevents page from refreshing */
        let newEntry = {            /* object that will be passed up to the App.js component and placed inside entries array */
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Weight</label>
            <input type = 'number' value = {weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type = 'date' value = {date} onChange={(event) => setDate(event.target.value)}/>  
            <button type= 'submit'>Add</button>    
        </form>         /* if you set the type = 'date', auto get date picker tool */
     );
}
 
export default AddEntryForm;