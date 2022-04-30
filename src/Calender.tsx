import React from 'react'
import './index.css';
import IUser from './type';
import { useNavigate } from "react-router-dom";
import { Routes, Route, useParams, Link } from "react-router-dom";

const Calender: React.FC<IUser> = (props: any) => {
    // const Calender = () => {
    // const navigate = useNavigate();

    // const Table = () => {
    //     navigate("/")
    // }

    
    return (
        //calender component
        <div className="table">
            <table>
                <h6 id="heading">January</h6>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tr>
                    <td>{props.datas.name[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default Calender

// interface IProps{
//     datas: IUser[]
//     }