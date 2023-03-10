import { FC, useEffect } from 'react'

import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuProps } from 'antd'

import { SelectEventHandler } from 'rc-menu/lib/interface'

import ToolBar from './ToolBar'

const logoUrl =
  'https://7169-qingmall-29ii8-1306124533.tcb.qcloud.la/img/%E8%BD%BB%E6%B5%81%E5%AD%A6%E9%99%A2%20logo%EF%BC%88%E9%BB%91%EF%BC%89.png?sign=e190c2a4bee212c7bb544fdab68f8c66&amp;t=1659709307'

const menuItems: MenuProps['items'] = [
  { label: '帮助文档', key: 'help-docs' },
  { label: '最佳实践', key: 'best-practices' },
  { label: '最近更新', key: 'recent-update' },
  { label: '轻流学院', key: 'qflow-college' },
]

const CustomizeMenu = styled(Menu)`
  flex: 1;
  margin-left: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  border-bottom: unset;
`

const Header: FC = () => {
  const navigate = useNavigate()
  const onSelect: SelectEventHandler = ({ key }) => {
    navigate(key)
  }

  const location = useLocation()
  const selectedKeys = location.key === 'default' ? [''] : [location.pathname.split('/')[1]]

  useEffect(() => {
    if (location.key === 'default') {
      navigate('help-docs')
    }
  })

  return (
    <header className="flex justify-between h-[60px] border-0 border-b border-solid border-20 px-16 bg-white">
      <div className="flex items-center w-[140px] h-full">
        <img className="w-[140px] h-32 " src={logoUrl} />
      </div>
      <CustomizeMenu
        mode="horizontal"
        items={menuItems}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
      ></CustomizeMenu>
      <div className="w-[450px]">
        <ToolBar></ToolBar>
      </div>
    </header>
  )
}

export default Header
