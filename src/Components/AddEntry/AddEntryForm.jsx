import React, { useState } from 'react';
import './AddEntryForm.css'


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
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Weight</label>
                <input type = 'number' className='form-control' value = {weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type = 'date' className='form-control' value = {date} onChange={(event) => setDate(event.target.value)}/> 
            </div>
            <button type= 'submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>    
        </form>         /* if you set the type = 'date', auto get date picker tool */
     );
}
 
export default AddEntryForm;