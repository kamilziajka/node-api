import winston from 'winston';

import init from './lib';

export default () => {
  let logger =
    (level, message) => winston.loggers.get('runtime').log(level, message);

  process.on(
    'uncaughtException',
    error => logger('error', error)
  );

  init.logger()
    .then(init.server)
    .then(
      message => logger('info', message),
      error => logger('error', error)
    );
};
