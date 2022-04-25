import React from 'react'

import { Layout, Menu, Tree } from 'antd'
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
      collapsed: !this.state.collapsed
    })
  }

  treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          // disabled: true,
          children: [
            {
              title: 'leaf1',
              key: '0-0-0-0'
              // disableCheckbox: true
            },
            {
              title: 'leaf2',
              key: '0-0-0-1'
            }
          ]
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            { title: <span style={{ color: '#1890ff' }}>sss111</span>, key: '0-0-1-0' },
            { title: <span style={{ color: '#1890ff' }}>sss222</span>, key: '0-0-1-1' }
          ]
        }
      ]
    }
  ]

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
            <Tree
              checkable
              // defaultExpandedKeys={['0-0-0', '0-0-1']}
              // defaultSelectedKeys={['0-0-0', '0-0-1']}
              // defaultCheckedKeys={['0-0-0', '0-0-1']}
              // onSelect={onSelect}
              onCheck={(value) => console.log(value)}
              treeData={this.treeData}
            />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
