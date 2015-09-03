import winston from 'winston';

import init from './lib';

export default () => {
  let getLogger = () => winston.loggers.get('runtime');

  init.logger()
    .then(
      () => init.server(),
      error => getLogger().error(error)
    )
    .then(
      () => getLogger().info('server up'),
      error => getLogger().error(error)
    );
};
