import { set } from 'lodash';
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "../styles/datetask.css";
export default function Datetask() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newD, setNewD] = useState(new Date());
    const [status, setStatus] = useState('');

    var d = new Date;

    function handleOnclick() {
        if (startDate > endDate) {
            alert("startDate should be less than end date ")
        }
        else {
            d.setDate(startDate.getDate() + 10);
            setNewD(d);
            console.log("----------------d------",);
        }
        if (d.getDate() < newD.getDate()) {
            setStatus("Early")
            console.log("-----------newD----------", d.getDate(), newD.getDate());

        }
        else if (d.getDate() > newD.getDate()) {
            setStatus("Late")
            console.log("-----------newD----------", d.getDate(), newD.getDate());

        }
        else {
            setStatus("Good")
            console.log("-----------newD----------", d.getDate(), newD.getDate());

        }
    }
    return (
        <div className='container'>
            <h3>Date Select</h3>
            <div className='startDate'>
                <p>Start Date</p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className='endDate'>
                <p>End Date</p>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
            <button className='btn btn-primary' onClick={handleOnclick}>Add 10 Days</button>
            {/* <p>{newD}</p> */}
            <p className='status'>{status}</p>
        </div>
    )
}
