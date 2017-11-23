/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:18 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/09 03:09:02 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from '../redux/store';

import Body from './Body';
import Index from './Index/Index';
import GridExample from './GridExample/GridExample';
import TableExample from './TableExample/TableExample';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Body>
          <Switch>
            <Route path="/table" component={TableExample} />
            <Route path="/grid" component={GridExample} />
            <Route component={Index} />
          </Switch>
        </Body>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
