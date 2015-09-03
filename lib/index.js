import Promise from 'promise';
import config from 'config';

import logger from './logger';
import app from './app';

let init = (resolve, reject) => {
  try {
    let port = config.get('server.port');
    app().listen(port, resolve);
  }
  catch (error) {
    reject (error);
  }
};

export default {
  server: () => new Promise(init),
  logger: logger
};
