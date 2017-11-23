import queryString from 'query-string';
import axios from 'axios';

const apiMiddleware = (store) => (next) => async (action) => {
  if (!action.type.startsWith('API:')) return next(action);

  const prefix = action.type.split(':')[1];
  const {
    method = 'get',
    body,
    query,
    onSucceeded,
    onFailed,
  } = action.payload;
  let url = action.payload.endpoint;
  const options = {
    method,
    headers: {},
  };

  if (query) {
    const params = queryString.stringify(query);
    url = `${url}?${params}`;
  }
  if (body) options.body = JSON.stringify(body);
  store.dispatch({ type: prefix });

  try {
    const response = await axios({ ...options, url });
    const isNetworkError = response.status < 200 || response.status >= 300;
    const { data } = response;
    const isAPIError = data.code < 200 || data.code >= 300 || data.status === 'error';

    const type = isNetworkError || isAPIError ? `$FAIL_${prefix}` : `SUCCESS_${prefix}`;
    store.dispatch({ type, payload: data });
    if (onSucceeded && !isAPIError) onSucceeded(data);
    if (onFailed && isAPIError) onFailed(data);

    return data;
  } catch (error) {
    store.dispatch({ type: `FAIL_${prefix}`, error });

    if (onFailed) {
      onFailed(error);
    }
  }
  return null;
};

/**
 * Interface
 */

export default apiMiddleware;
