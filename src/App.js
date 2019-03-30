
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';

import {
  Layout, Menu, Breadcrumb, Icon,Row,Col
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="read" />
              <span>News Feed</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calculator" />
              <span>Estimator</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="shop" /><span>Market</span></span>}
            >
              <Menu.Item key="4">Tom</Menu.Item>
              <Menu.Item key="5">Bill</Menu.Item>
              <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
            
            <Menu.Item key="3">
              <Icon type="global" />
              <span>Nearby</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'green', padding: 0, textAlign:'center',fontSize:28, fontWeight:"bolder", color:'white' }}> 
          <Row>
          <Col span={23}>ilava </Col>
          <Col span={1} style={{background:'darkblue'}}>
          <Icon type='user' />
          </Col>
          </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
               Project ilava aims to solve the traditional farming problems prevailing in India, one step at a time.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Prana ©2019
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;