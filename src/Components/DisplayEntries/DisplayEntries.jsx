


/* child of App.js bc it's being instantiated in App.js */
/* pass data from one component down to another is through props, in child instantiation */

const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) =>{
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;