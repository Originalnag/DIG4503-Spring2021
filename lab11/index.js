import Express from "express";
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;
App.use(CORS());
App.use(Express.json());

const d = new Database();

d.connect()

App.put("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN
    const title = req.body.title
    const author = req.body.author
    const description = req.body.description
    let result = await d.createOne(ISBN, title, author, description)
    res.json(result)
})

App.get('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN;
    const result = await d.readOne(ISBN);

    res.json(result)
})


App.post('/books/search', (req, res) => {
    let title = req.query.title
    let author = req.query.author
    let result = d.readMany(title, author)
    res.json(result)
})


App.patch('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN
    const title = req.body.title
    const author = req.body.author
    const description = req.body.description

    const result = await d.updateOne(ISBN, title, author, description)

    res.json(result)
})

App.delete('/books/:ISBN', async (req, res) => {
    const ISBN = req.params.ISBN
    const result = await d.deleteOne(ISBN)

    res.json(result)
});


d.close()

App.listen(port, function () {
    console.log("Server running!");
});
