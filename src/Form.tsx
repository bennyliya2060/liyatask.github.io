import React from 'react'
import './Form.css';
import { useState } from "react";
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom/client';

//form and button component
const Form = (props: any) => {
    //veriables for form input
    const [year, setYear] = useState("");
    //assigned the enterd year and date and month from json
    const d = new Date(year, props.datas.date, props.datas.month);

    //function for execute when button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        const newyear = year.getFullYear();
    }

    return (
        <div>
            {/* form */}
            <label>Enter a year :</label>
            <input type="number" value={year}
                onChange={(e) => setYear(e.target.value)}></input>
            <button type="button" onClick={handleSubmit}>Update</button>

        </div>
    )
}
export default Form;



