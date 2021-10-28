const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/routes');
const {
  handlerError,
  handlerBoomError,
  HandlerOrmError,
} = require('./middlewares/handlerError');

// Configures
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

const whiteList = ['http://locahost:4000', 'https://myapp.com'];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso denegado'));
    }
  },
};
app.use(cors(options));

routerApi(app);

// Middleware
app.use(HandlerOrmError);
app.use(handlerBoomError);
app.use(handlerError);

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
