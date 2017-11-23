import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
  me: state.me,
}))
class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'API:GET_ME' });
  }

  render() {
    return (
      <div style={{ color: '#fff' }}>
        <div className="logo">
          Techforce
        </div>
      </div>
    );
  }
}

export default Header;
