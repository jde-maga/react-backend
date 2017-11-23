import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Sidemenu extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={['dashboard']}
        mode="inline"
      >
        <Menu.Item key="dashboard"><Link to="/"><Icon type="appstore" />Dashboard</Link></Menu.Item>
        <SubMenu key="sub2" title={<span ><Icon type="appstore" /><span>Data Menu</span></span>}>
          <Menu.Item key="5"><Link to="/grid">Grid example</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/table">Table example</Link></Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Submenu 1</Menu.Item>
            <Menu.Item key="8">Submenu 2</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Exemple navigation</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidemenu;
