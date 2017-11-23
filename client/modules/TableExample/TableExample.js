import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Table, Icon } from 'antd';

@connect((state) => ({
  chartData: state.data.get('exampleTable'),
}))
class TableExample extends Component {
  static propTypes = {
    chartData: PropTypes.array.isRequired,
  }

  render() {
    const { chartData } = this.props;

    return (
      <Table
        columns={[{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="#">{text}</a>,
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }]}
        dataSource={chartData.toJS()}
      />
    );
  }
}

export default TableExample;
