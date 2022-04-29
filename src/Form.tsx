import React from 'react'
import './Form.css';
import Array from './Array.json';
import Calender from './Calender';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

//form and button component
const Form = () => {
    //veriables for form input
    const [year, setName] = useState("");

    //function for execute when button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        // Array.map((user) => (
        //     <Calender datas={user} />
        // ))
    }

    return (
        <div>
            {/* form */}
            <label>Enter a year</label>
            <input type="number" value={year}
                onChange={(e) => setName(e.target.value)}></input>
            <button type="button" onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default Form