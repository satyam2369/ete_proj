import React from 'react'
import './mainCards.css'
function Cardss(prop) {
  return (
    <div>
      <div className='cardss'>
      <h3>{prop.title}</h3>
      <p>{prop.para}</p>
      <img src={prop.img} alt="" style={{height:"19vh",width:"10vw",marginTop:"0.4vh"}}/>
      {/* <button style={{marginTop:"3vh"}} type="button" class="btn btn-dark">Test</button> */}
    </div>
    </div>
  )
}

export default Cardss
