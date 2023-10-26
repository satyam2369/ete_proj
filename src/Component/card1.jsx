import React from 'react'
import './card.css'

function Card1() {
  return (
    <div className='card'>
      <h3>Typing Speed Test</h3>
      <p>Test your speed on our best in the market speed typing speed test application</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfvqHjID9y7UwXbfLjj5W-rIXENau7dBPbg&usqp=CAU" alt="" style={{height:"13vh",width:"8vw",marginTop:"0.4vh"}}/>
      <button style={{marginTop:"3vh"}} type="button" class="btn btn-dark">Test</button>
    </div>
  )
}

export default Card1
