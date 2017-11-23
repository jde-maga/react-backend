/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Body.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 17:33:40 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/13 12:47:05 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Sidemenu from './Sidemenu/Sidemenu';
import TopHeader from './Header/Header';

const { Content, Sider, Header } = Layout;

class Body extends Component {
  static propTypes = {
    children: PropTypes.oneOf(['string', 'object']).isRequired,
  };

  state = { collapsed: false };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header><TopHeader /></Header>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => this.setState({ collapsed: !collapsed })}
          >
            <div className="logo" />
            <Sidemenu />
          </Sider>
          <Content style={{ minHeight: 360, background: '#fff', padding: 36 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Body;
