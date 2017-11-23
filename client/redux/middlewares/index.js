/**
 * Dependencies
 */

import 'whatwg-fetch';

/**
 * Middlewares
 */

import logger from './logger';
import api from './api';

/**
 * Interface
 */
export default [
  logger,
  api,
];
