import React from 'react'
import Cardss from './mainCards'

function Mid() {
  return (
    <div className='min'>
    <h1 className='headings' >Try our Products</h1>
    <div style={{display:"flex",marginTop:"-60px"}}>
      
      <div className="first">
      <Cardss title="Typing Speed" para="do a quick speed test to check your progress and accelarate in your career with your fingers." img="https://cdn-icons-png.flaticon.com/512/1188/1188519.png"/>
      
      </div>
      <div className="second">
      <Cardss title="Typing Speed" para="do a quick speed test to check your progress and accelarate in your career with your fingers." img="https://cdn-icons-png.flaticon.com/512/1188/1188519.png"/>
      </div>
      <Cardss title="Typing Speed" para="do a quick speed test to check your progress and accelarate in your career with your fingers." img="https://cdn-icons-png.flaticon.com/512/1188/1188519.png"/>
    </div>
    </div>
  )
}

export default Mid
