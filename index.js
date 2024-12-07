const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
});