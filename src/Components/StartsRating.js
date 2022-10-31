import { Rate } from 'antd'
import { useState } from 'react'
import React from 'react'
import 'antd/lib/rate/style/index.css'

function StarsRating({onClick}) {
const [currentValue, setCurrentValue] = useState(0)

return (
  <div onClick={e => e.stopPropagation()}>
    <Rate allowHalf value={currentValue} onChange={setCurrentValue} onClick={onClick}/>
  </div>
)
}

export default StarsRating