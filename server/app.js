import express from 'express';
import accountRoute from './routes/create_account';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/v1/create_account',accountRoute);

const port = process.env.port || 8000;
console.log( process.env.SECRET);


app.listen(port, () => {
    console.log(`You are on port ${port}`)
})

export default app;
