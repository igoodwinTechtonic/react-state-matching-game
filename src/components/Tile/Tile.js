import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const colors = props.selected || props.matched
  ? { backgroundColor: props.color }
  : null;

  return (
    <div className='Tile'>
      {props.selected || props.matched ? props.svg : null }
      {colors}
    </div>
  )
}

export default Tile
