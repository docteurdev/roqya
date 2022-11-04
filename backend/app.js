const express = require('express');
const sequelize = require('./src/db/sequelize');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

sequelize.connectDb();

// USING OF ROUTES

// centre routes
require('./src/routes/centre/create')(app);
require('./src/routes/centre/getAll')(app);
require('./src/routes/centre/getOne')(app);
require('./src/routes/centre/update')(app);
require('./src/routes/centre/delete')(app);

// route typeEmploye
require('./src/routes/type_employe/create')(app);

// route employe
require('./src/routes/employe/create')(app);
require('./src/routes/employe/getAll')(app);
require('./src/routes/employe/getOne')(app);
require('./src/routes/employe/delete')(app);

// route patient
require('./src/routes/carnet/create')(app);
require('./src/routes/carnet/getAll')(app);
require('./src/routes/carnet/getOne')(app);

// routes rdv
require('./src/routes/rdv/create')(app);
require('./src/routes/rdv/getAll')(app);




app.get('/', (req, res) =>{
    res.json('le server de roqya a demaré')
})
app.listen(port, () => console.log(`le server de roqya a demaré sur http://localhost:${port}`) );