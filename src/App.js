import React, {useState} from 'react'

export default function App() {
  setInterval(getTime, 1000)
  
  const [time, setTime] = useState()

  function getTime(){
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const now = `${hour}:${minute}:${second}`
    setTime(now)
    document.title = 'Time: ' + now
  }

  return (
    <div className='timer-container'>
      <span className='timer'>{time}</span>
    </div>
  );

}
