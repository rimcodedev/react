import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const h1 = React.createElement('div', null,  React.createElement('ul', null,  React.createElement('li', null, 'First item'),  
//   React.createElement('li', null, 'Second item'),  React.createElement('li', null, 'Third item')))

const h1 =<div><ul><li>Hello World!</li></ul></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  h1
)
