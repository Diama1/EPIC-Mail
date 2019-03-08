import express from 'express';
import userRoute from './routes/users';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(userRoute);

const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`You are on port ${port}`)
})

export default app;