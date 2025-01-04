import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld user={ {name:'Anna', lastname:'Frank'} } id={1} />
  </React.StrictMode>,
)
