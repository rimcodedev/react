import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp user={{ name: 'Anna', lastname: 'Frank' }} id={1} title={'Example of title'} />
  </React.StrictMode>,
)
