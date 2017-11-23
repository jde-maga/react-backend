/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/09 03:08:40 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/23 15:02:35 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';

@connect((state) => ({
  exampleGraph: state.data.get('exampleGraph'),
  exampleTable: state.data.get('exampleTable'),
}))
class Index extends Component {
  static propTypes = {
    exampleGraph: PropTypes.array.isRequired,
    exampleTable: PropTypes.array.isRequired,
  }

  render() {
    const { exampleGraph, exampleTable } = this.props;

    return (
      <div>
        DASHBOARD
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16} style={{ padding: '10px' }}>
            <Col span={8}>
              <Card title="Graph Exemple" bordered={false}>{exampleGraph.size} entrées</Card>
            </Col>
            <Col span={8}>
              <Card title="Table Exemple" bordered={false}>{exampleTable.size} entrées</Card>
            </Col>
            <Col span={8}>
              <Card title="Exemples" bordered={false}>Card content</Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ padding: '10px' }}>
            <Col span={8}>
              <Card title="Exemples" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Exemples" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Exemples" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Index;
