import React, { useState, useEffect } from 'react';
import './UI/time.css';

const Time = () => {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    function addZero(n) {
        return ((n < 10) ? '0' : '') + n;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let currentDate = new Date();
            let day = currentDate.getDate();
            let month = currentDate.getMonth();
            let year = currentDate.getFullYear();
            let hour = currentDate.getHours();
            let min = currentDate.getMinutes();

            setTime(`${addZero(hour)}:${addZero(min)}`);
            setDate(`${addZero(day)}.${addZero(month + 1)}.${year}`);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);


    return (
        <div>
            <div className='timeDate'>
                <div className='time'>{time}</div>
                <div className='date'>{date}</div>
            </div>
        </div>
    );
}

export default Time;
