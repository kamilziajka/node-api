import winston from 'winston';
import config from 'config';

let init = (resolve, reject) => {
  try {
    let loggers = config.get('loggers');

    Object.keys(loggers).forEach(
      logger => winston.loggers.add(logger, loggers[logger])
    );

    resolve();
  }
  catch (error) {
    reject(error);
  }
};

export default () => new Promise(init);
