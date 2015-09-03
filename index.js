import winston from 'winston';

import init from './lib';

export default () => {
  let errorHandler = error => winston.loggers.get('runtime').error(error);

  init.logger()
    .then(
      () => init.server(),
      error => errorHandler
    )
    .then(
      () => console.log('server up'),
      error => errorHandler
    );
};
