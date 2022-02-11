import express from 'express';
import connectDatabase from './config/db';


const app = express();

//connect to mongodb
connectDatabase();

//middleware
app.use(express.json({ extended: false}));

/**
 * @route Get /
 * @desc Test endpoint
 */
app.get('/', (req, res) => {
    res.send('http get request sent to root api endpoint');
});


/**
 * @route POST api/users
 * @desc Register user
 */
 app.post('/api/users', (req, res) => {
     console.log(reg.body);
    res.send(req.body);
});


app.listen(3000, () => console.log(`Express running on port 3000`));

