import React from 'react'
import { Link } from 'react-router-dom'
function Index() {
  const [text, setText] = React.useState('cenrer') 
  let url = 'https://63c9ca37904f040a9664c241.mockapi.io/emoji/emojies';
  //  async function data() { 
  //   let respone =  await fetch(url);
  //   let data = respone.json()
  //   console.log(data);
  //  }
  // data()
 
  return (
    <div>
          {/* <h2 style={{textAling:text}}>Align me</h2>
          <button onClick={() => { setText('left')}} >Left</button>
          <button onClick={() => { setText('right')}}>Center</button>
      <button>Right</button> */}
      
      
      <Link to="/"> назад</Link>
   </div>
  )
}

export default Index 