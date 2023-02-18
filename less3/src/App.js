
// import { useState } from 'react';
import './App.css';
// import Counter from './component/Counter/Counter';
import Index from './component/Index';
import { Route, Routes, Link } from 'react-router-dom'
import { useEffect } from 'react';


function App() {
  // const arr = ['hello', 'hi', 'avenu']
  // console.log(arr[1]);
  // const second = arr[1]
  // const [first, second,] = arr
  // console.log(first);

  // const [counter, setCounter] = useState(0)

  // function increment() {
  //   setCounter((count) => count+1 )
  // }
  const url = 'https://63c9ca37904f040a9664c241.mockapi.io/emoji/emojies';
  useEffect(() => { 
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  

  //  console.log(counter);
  return (
    <>
    <div className='App'>
        1223
        <Link to="Index"> назад</Link>
    </div>
    
    {/* <Counter  /> */}
      
        <Routes>
        <Route path='/Index' element={<Index />} />
      </Routes>
      
    </>
  );
}

export default App;
// Задание:
// Написать компонент, который выводит число 999 и две кнопки (плюс и минус).
//По кликам на кнопки число увеличивается/уменьшается на 5-->