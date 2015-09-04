import config from 'config';

import logger from './logger';
import app from './app';

let init = (resolve, reject) => {
  try {
    let port = config.get('server.port');
    app().listen(port, () => resolve('server up'));
  }
  catch (error) {
    reject (error);
  }
};

export default {
  server: () => new Promise(init),
  logger: logger
};
