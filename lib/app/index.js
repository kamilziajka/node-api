import Express from 'express';

export default () => {
  let app = new Express();

  app.disable('x-powered-by');

  return app;
};
