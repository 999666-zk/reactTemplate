import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import Header from './header/Header'

const { Content } = Layout

const AppLayout = () => (
  <Layout>
    <Header></Header>
    <Content>
      <Outlet></Outlet>
    </Content>
  </Layout>
)

export default AppLayout
