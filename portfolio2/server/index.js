import Express from "express";
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;
App.use(CORS());
App.use(Express.json());

const d = new Database();

d.connect()

App.put("/BrianFlores/:anime", async (req, res) => {
    const anime = req.params.anime;
    const author = req.body.author
    const rating = req.body.rating
    const result = await d.createOne(anime,author,rating, id)

    res.json(result)
})

App.put('/pokemon/:name', async (req, res) => {
    const name = req.params.name;
    const id = req.body.id;
    const result = await d.add(name, id);

    res.json(result)
})


App.get('/BrianFlores/:anime', async (req, res) => {
    const anime = req.params.anime;
    const result = await d.readOne(anime);

    res.json(result)
})

App.get('/pokemon/:name', async (req, res) => {
    const name = req.params.name;
    const id = req.body.id;
    const result = await d.read(name, id);

    res.json(result)
})


App.patch('/BrianFlores/:anime', async (req, res) => {
    const anime = req.params.anime;
    const author = req.body.author
    const rating = req.body.rating
    const result = await d.updateOne(anime,author,rating)

    res.json(result)
})

App.delete('/BrianFlores/:anime', async (req, res) => {
    const anime = req.params.anime;
   
    const result = await d.deleteOne(anime)

    res.json(result)
});


d.close()

App.listen(port, function () {
    console.log("Server running!");
});
