import type { FC } from 'react'

import Router from './router'
import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

const customizeTheme = {
  token: {
    colorPrimary: '#FB9337',
  },
}

const App: FC = () => (
  <BrowserRouter>
    <ConfigProvider theme={customizeTheme}>
      <Router></Router>
    </ConfigProvider>
  </BrowserRouter>
)

export default App
