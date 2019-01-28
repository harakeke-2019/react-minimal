import React from 'react'
import Animal from './Animal'


function Hello (props) {
  return (
    <div>
      <h1>Yoza  {props.name} you muddy funksta!! </h1>
      <h2>Gotta joke for you, pick one </h2>
      <ol>
        <li>My girlfriend was complaining last night that I never listen to her. Or something like that...,</li>
        <li>Don’t use “beef stew” as a computer password. It’s not stroganoff. ,</li>
        <li>Q: What happened after an explosion at a French cheese factory? A: All that was left was de brie.</li>
      </ol>

      <h3><Animal name="Monkey"/></h3>
     
    </div>
  )
}

export default Hello
