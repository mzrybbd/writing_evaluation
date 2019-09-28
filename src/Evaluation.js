import React from 'react';
import './App.css';
import { Layout, Avatar, Button, Card } from 'antd';
import DetailResult from './detail'
import { Link } from 'react-router-dom'

const { Header, Content } = Layout;
export default function WriteingEvaluation() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(192,204,218,.3)', padding: '0 10%' }}>
          <div className="header-main">
            <div className="logo" ></div>
            <span style={{ float: 'right' }}>
              <Avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" className="avatar" />
              <Link to="/home" style={{paddingLeft: '15px', fontSize: '16px'}}>[回到首页]</Link>
            </span>
          </div>
        </Header>
        <Content style={{ padding: '0 12%', backgroundColor: '#f7f7f7', height: '100%', marginTop: '64px' }}>
          <DetailResult />
        </Content>
      </Layout>
    </div >
  )
}