import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`Our new MERN application is running ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your MERN server is running on port ${PORT}`)
)