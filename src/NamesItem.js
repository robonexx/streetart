import React from 'react'
import './list.scss'

export default function NamesItem(props) {
  return (
      <div className='name' >
          <h4>{props.name}</h4>
    </div>
  )
}
