import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

/* props property called parentEntries that we can access all the data from App.js */

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);

    /* convert entry data into something the chart can understand */
    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData);
    }, [props.parentEntries])


    return ( 
        <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;