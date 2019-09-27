import React from 'react';
import './App.css';
import { Layout, Avatar, Button, Card } from 'antd';
import { WriteForm } from './Form'
import DetailResult from './detail'
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(192,204,218,.3)', padding: '0 10%' }}>
          <div className="header-main">
            <div className="logo" ></div>
            <span style={{ float: 'right' }}>
              <Avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" className="avatar" />
              <Button type="link" >[回到首页]</Button>
            </span>
          </div>
        </Header>
        <Content style={{ padding: '0 12%', backgroundColor: '#f7f7f7', height: '100%', marginTop: '64px' }}>
          {/* <Card style={{ width: '100%',marginTop: '20px' }}>
            <h2>智能批阅</h2>
          <WriteForm />
          </Card> */}
          <DetailResult />
        </Content>
      </Layout>
    </div >
  );
}

export default App;
