// Задание:
//    Написать компонент, который выводит число 999 и две кнопки (плюс и минус).
//    По кликам на кнопки число увеличивается/уменьшается на 5-->
import React from 'react'
import { useState } from 'react'
import s from './Counter.module.css'

function Counter() {
    const [counter, setCounter] = useState(999)
     
    function plus() {
        setCounter((count) => (count+1))
    }
    function minus() {
        setCounter((count)=> (count-1))
        
    }
    const [counters, setCounters] = useState(0)
    
      function plusfive() {
        setCounters((count) => (count+5))
    }
    function minusfive() {
        setCounters((count)=> (count-5))
        
    }
    return (
      <>
      <div>
          <h2>{counter}</h2>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
      </div>
      <div>
         <h2>{counters}</h2>
          <button className={s.btn} onClick={plusfive}>+</button>
          <button onClick={minusfive}>-</button>     
      </div>
    </>
  )
}

export default Counter  