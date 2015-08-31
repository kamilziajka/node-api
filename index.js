import express from 'express';
import config from 'config';

export default function () {
  var app = express();

  var port = config.get('server.port');

  app.listen(port, function () {
    console.log('server up');
  });
};
