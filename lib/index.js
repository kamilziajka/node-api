import { Server } from 'http';
import config from 'config';
import logger from 'winston';

import './config';
import app from './app';

export default () => {
  let server = Server(app);

  let port;

  try {
    port = config.get('server.port');
  } catch (err) {
    logger.error('server port not set');
  }

  if (!!port) {
    server.listen(port, () => console.log('server up'));
  }
};
