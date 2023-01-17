import React, { useState } from 'react'
import { Card, Layout, Menu } from 'antd'
import { SymbolsCard } from './components/SymbolCard/SymbolsCard'
import { CheatSheet } from './components/CheatSheet/CheatSheet'
const { Header, Content } = Layout

const App: React.FC = () => {
  const [tabOpen, setTabOpen] = useState('1')

  const renderTab = () => {
    if (tabOpen === '1') {
      return <SymbolsCard />
    }

    if (tabOpen === '2') {
      return <CheatSheet />
    }
  }

  return (
    <Layout>
      <Header>
        <Menu theme={'dark'} mode="horizontal" defaultSelectedKeys={[tabOpen]}>
          <Menu.Item title={'Hiragana'} key={'1'} onClick={() => setTabOpen('1')}>
            Hiragana
          </Menu.Item>
          <Menu.Item title={'CheatSheet'} key={'2'} onClick={() => setTabOpen('2')}>
            Glossário
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '48px 48px' }}>
        <div className="site-layout-content" style={{ background: '#f5f5f5' }}>
          <Card>{renderTab()}</Card>
        </div>
      </Content>
    </Layout>
  )
}

export default App
