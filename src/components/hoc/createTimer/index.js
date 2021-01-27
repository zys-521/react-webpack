import React, {useState, useEffect} from 'react';

const createTimer = (WrappedComponent) => {
  const Timer = (props) => {
    const [time, setTime] = useState(() => {
      return new Date().getTime()
    })

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().getTime())
      }, 1000);
      return () => {
        clearTimeout(timer)
      }
    }, [])

    return (
      <WrappedComponent time={time} {...props}/>
    )
  }
  return Timer
}

export default createTimer;