import { set } from 'lodash';
import React from 'react';
import Logout from './logout';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "../styles/datetask.css";
export default function Datetask() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newD, setNewD] = useState(new Date());
    const [status, setStatus] = useState('');

    var d = new Date;
    var c = new Date;
    const handleStartDatechange = (e) => {
        // console.log("=====", e.getDate());
        setStartDate(e)
    }
    const handleEndDatechange = (e) => {
        console.log("*****************88", e.getDate(), startDate.getDate(), e.getMonth());
        if (e.getDate() < startDate.getDate() && e.getMonth() <= startDate.getMonth()) {
            setEndDate('')
        }
        else {
            setEndDate(e)
        }
    }

    function handleOnclick() {
        if (startDate > endDate) {
            alert("startDate should be less than end date ")
        }
        else {
            d.setDate(startDate.getDate() + 10);
            setNewD(d);
        }
        if (d.getDate() < c.getDate()) {
            setStatus("Early")
            console.log("-------d----newD-----Early-----", d.getDate(), c.getDate());

        }
        else if (d.getDate() > c.getDate()) {
            setStatus("Late")
            console.log("------d-----newD-----Late-----", d.getDate());

        }
        else {
            setStatus("Good")
            console.log("------d-----newD------Good----", d.getDate());

        }
    }
    return (
        <div>
            <Logout />
            <div className='container'>
                <h3>Date Select</h3>
                <div className='startDate'>
                    <p>Start Date</p>
                    <DatePicker selected={startDate} onChange={(date) => handleStartDatechange(date)} />
                </div>
                <div className='endDate'>
                    <p>End Date</p>
                    <DatePicker selected={endDate} onChange={(date) => handleEndDatechange(date)} />
                </div>
                <button className='btn btn-primary' onClick={handleOnclick}>Add 10 Days</button>
                {/* <p>{newD}</p> */}
                <p className='status'>{status}</p>
            </div>
        </div>

    )
}
