import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();

const PORT = 4000;

//mongo connection

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//body parser set up

app.use(bodyparser.urlencoded({ extended : true}));

app.use(bodyparser.json());

//Cors set up

app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`Our new MERN application is running ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your MERN server is running on port ${PORT}`)
);

