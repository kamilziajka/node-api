import Express from 'express';

export default () => {
  let app = new Express();

  app.disable('x-powered-by');

  // error 404 handler
  app.use((req, res) => {
    res.status(404).end();
  });

  return app;
};
