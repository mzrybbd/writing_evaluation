import React from 'react';
import './App.css';
import { Layout, Avatar, Card } from 'antd';
import { WriteForm } from './Form'

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(192,204,218,.3)'}} className="header3">
          <div className="header-main">
            <div className="logo" ></div>
            <span style={{ float: 'right' }}>
              <Avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" className="avatar" />
            </span>
          </div>
        </Header>
        <Content style={{ backgroundColor: '#f7f7f7', marginTop: '64px' }} className="header4">
          <Card style={{ width: '100%', marginTop: '20px', height: '100%' }}>
            <h2 style={{ textAlign: 'center' }}>智能批阅</h2>
            <WriteForm />
          </Card>
        </Content>
      </Layout>
    </div >
  )
}

export default App;
