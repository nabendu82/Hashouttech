import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Videos from './dbModel.js';

const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://admin:admin@cluster0.y4vsq.mongodb.net/tiktokDB?retryWrites=true&w=majority';

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url);

app.get('/', (req, res) => res.status(200).send("Tiktok mern backend"));

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err) 
            res.status(500).send(err);
        else 
            res.status(201).send(data);
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err) 
            res.status(500).send(err);
        else 
            res.status(200).send(data);
    })
})

app.listen(port, () => console.log(`Server is running on port ${port}`));