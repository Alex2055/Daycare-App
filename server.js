const express = require('express');
const sequelize = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express();

const routes = require('./controllers');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routes);

app.use((req, res) => {
    res.status(404).end();
  });

  sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  