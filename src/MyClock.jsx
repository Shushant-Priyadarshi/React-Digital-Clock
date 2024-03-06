import { useEffect, useState } from "react";

export default function MyClock(){

    const[time,setTime] =useState(new Date());

    useEffect(()=>{
        const intervalId =setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meredium = hours >12? "PM":"AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(min)}:${addZero(sec)} ${meredium}`;
    }

    function addZero(number){
      return( number<10?"0":"")+number;
    }


    return(
        <div className="container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}