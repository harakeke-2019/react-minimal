import React from 'react'

const jokes = [
  'My girlfriend was complaining last night that I never listen to her. Or something like that...',
  'Don’t use “beef stew” as a computer password. It’s not stroganoff. ',
  'Q: What happened after an explosion at a French cheese factory? A: All that was left was de brie.'
]

function showJokes (props) {
  return (
    <div>
      wanna hear a funny azz joke ow!!
      <ul>
        {props.jokes.map(name => {
          return <li key={name}>{jokes}</li>
        })}
      </ul>
    </div>
  )
}

export default showJokes
