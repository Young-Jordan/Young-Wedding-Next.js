"use client"
import React, { useEffect, useState } from 'react';

export default function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
  
    useEffect(() => {
      const target = new Date("11/17/2024 23:59:59");
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
  
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
  
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
  return (

    <div className="flex gap-x-4 text-base font-serif lg:flex-row flex-col mr-auto hidden">
      <div className="timer-segment">
        <span className="pr-1">{days}</span>
        <span className="label">Days</span>
      </div>
     <span>&</span>
      <div className="timer-segment">
        <span className="pr-1">{hours}</span>
        <span className="label">Hours</span>
      </div>

    </div>

  )

}