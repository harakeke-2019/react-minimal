import React from 'react'
import SupGolem from './SupGolem'

function HowYouDoing (props) {
  return (
    <div>
      <div>How you doing {props.title} {props.name}</div>
      <img src="https://img.huffingtonpost.com/asset/58280af1180000180030db1f.jpg?ops=scalefit_720_noupscale" />
      <div><SupGolem/></div>
    </div>
  )
}

export default HowYouDoing
