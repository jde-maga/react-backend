import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import RedBox from 'redbox-react';

import Login from './Login';

const MOUNT_NODE = document.getElementById('react-index-root');

const renderRoots = () => {
  render(
    <Login />,
    MOUNT_NODE,
  );
};

const renderError = (error) => {
  render(<RedBox error={error} />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept('./Login', () => {
    setImmediate(() => {
      unmountComponentAtNode(MOUNT_NODE);
      try {
        renderRoots();
      } catch (e) {
        renderError(e);
      }
    });
  });
}

renderRoots();
