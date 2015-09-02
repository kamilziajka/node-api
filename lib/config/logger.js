import winston from 'winston';
import config from 'config';

export default () => {
  let loggers = config.get('loggers');

  Object.keys(loggers).forEach(
    logger => winston.loggers.add(logger, loggers[logger])
  );
};
