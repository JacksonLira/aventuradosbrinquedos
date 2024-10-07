import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Routes from './Routes/Routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <Routes />
      <GlobalStyles />
    </>
  </React.StrictMode>
)
