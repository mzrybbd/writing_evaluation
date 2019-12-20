import React from 'react';
import './App.css';
import { Layout, Avatar, Card,Dropdown,Menu,Icon,Button } from 'antd';
import { WriteForm } from './Form'
import Utils from './utils/utils';
import History from "./history";
import Logo from './logo1.svg'

const { Header, Content } = Layout;
function signOut(e) {
  e.preventDefault();
  Utils.clearCookie();
  localStorage.clear();
  History.push("/login");
}
function App() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={signOut} href="/">
          退出
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(192,204,218,.3)'}} className="header3">
          <div className="header-main">
            {/* <div className="logo" ></div> */}
            <img className="logo" src={Logo}/>
            {/* <img className="logo" src="https://res-static.gaosiedu.com/www/static/img/logo.a749978.png"/> */}
            <span style={{ float: 'right' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="link" className="ant-dropdown-link more" href="/">
                 <Avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" className="avatar" />
                <Icon type="down" style={{ fontSize: 16, verticalAlign: 'middle' }} />
              </Button>
            </Dropdown>
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
