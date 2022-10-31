import { Rate } from 'antd'
import { useState } from 'react'
import React from 'react'
import 'antd/lib/rate/style/index.css'

function StarsRating({book, setBooks, books}) {
const [currentValue, setCurrentValue] = useState(book.rate)

const handleRating = (value) => {
  book.rate = value
  setCurrentValue(value)
  setBooks([...books])
}

return ( 
  <div onClick={e => e.stopPropagation()}>
    <Rate allowHalf value={currentValue} onChange={value => handleRating(value)}/>
  </div>
)
}

export default StarsRating