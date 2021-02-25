import Express from "express";

const App = Express();

const object = {
    name: "Brian",
    color: "Blue"
}

const port = 45030;

App.get('/', function(req, res)
{
    res.send("Hello World")
});

App.get('/person', function(req, res)
{
    res.json(object)
});

App.listen(port, function(){
    console.log("Server running!");
});