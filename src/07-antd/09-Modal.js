import React from 'react'

import { Layout, Menu, Button, Modal } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

import './css/03-layout.css'

const { Header, Sider, Content } = Layout

class App extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      isModalVisible: false
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              },
              {
                key: '4',
                icon: <UploadOutlined />,
                label: 'nav 4'
              }
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <Button
              type="primary"
              onClick={() => {
                this.setState({ isModalVisible: !this.state.isModalVisible })
              }}
            >
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.isModalVisible}
              onOk={() => {
                console.log('??????')
                this.setState({ isModalVisible: !this.state.isModalVisible })
              }}
              onCancel={() => {
                console.log('??????')
                this.setState({ isModalVisible: !this.state.isModalVisible })
              }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
