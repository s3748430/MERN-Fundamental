import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();

const PORT = 3000;

//mongo connection

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:${PORT}/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//body parser set up

app.use(bodyParser.urlencoded({ extended : true}));

app.use(bodyParser.json());

app.get('/', (req, res) =>
    res.send(`Our new MERN application is running ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your MERN server is running on port ${PORT}`)
);

