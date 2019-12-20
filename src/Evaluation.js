import React from 'react';
import './App.css';
import { Layout, Avatar, Card,Dropdown,Menu,Icon,Button } from 'antd';
import DetailResult from './detail'
import History from "./history";
import Logo from './logo1.svg'
import { Link } from 'react-router-dom'
import Utils from './utils/utils';

const { Header, Content } = Layout;

function signOut(e) {
  e.preventDefault();
  Utils.clearCookie();
  localStorage.clear();
  History.push("/login");
}
export default function WriteingEvaluation() {
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
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', boxShadow: '0 2px 4px 0 rgba(192,204,218,.3)' }} className="header1">
          <div className="header-main">
            {/* <div className="logo" ></div> */}
            <img className="logo" src={Logo}/>
            <span style={{ float: 'right' }}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button type="link" className="ant-dropdown-link more" href="/">
                  <Avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" className="avatar" />
                  <Icon type="down" style={{ fontSize: 16, verticalAlign: 'middle' }} />
                </Button>
              </Dropdown>
              <Link to="/" style={{ paddingLeft: '10px', fontSize: '16px' }}>[回到首页]</Link>
            </span>
          </div>
        </Header>
        <Content className="header2" style={{ backgroundColor: '#f7f7f7', height: '100%', marginTop: '64px' }}>
          <DetailResult />
        </Content>
      </Layout>
    </div >
  )
}