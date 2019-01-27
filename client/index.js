import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

// const data = {name: 'humans'}

// function helloTemplate (props) {
//   return (
//     <div>hello {props.name}</div>
//   )
// }
// Hello.helloTemplate({ name: 'humans' })

// const view = helloTemplate(data)

// const placeToMount = document.getElementById('root')

ReactDOM.render(<Hello name ="Auckland" />, document.getElementById('root'))
