import MongoClient from 'mongodb';

const url = "mongodb+srv://BrianFlores:WCo7XveXNNPzTEhK@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null
        this.database = null
        this.collection = null
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("portfolio2");
        this.collection = this.database.collection("BrianFlores");
    }

    async createOne(anime, author, rating) {
        if (this.collection != null) {
            await this.collection.insertOne({
                "Anime": anime,
                "Author": author,
                "Rating": rating
            })
            return { "Anime": anime, "Author": author, "Rating": rating }

        } else {
            return "Connecting to MongoDB..."
        }
    }

    async add(name) {
        if (this.collection != null) {
            await this.collection.insertOne({
                "pokemon": name
            })
            return { "pokemon": name }

        } else {
            return "Connecting to MongoDB..."
        }
    }

    async readOne(anime) {
        if (this.collection != null) {
            const result = await this.collection.findOne({ "Anime": anime })
            if (result == null) {
                return { Anime: "Not found" }
            }
            else {
                return { Anime: result };
            }
        }
        else {
            return "Connecting to MongoDB..."
        }
    }

    async read(name, id) {
        if (this.collection != null) {
            const result = await this.collection.findOne({ "pokemon" : name, "id": id })
            if (result == null) {
                return { Pokemon: "Not found",
            user: "Not found"}
            }
            else {
                return { Pokemon: result };
            }
        }
        else {
            return "Connecting to MongoDB..."
        }
    }


    async updateOne(anime, author, rating) {
        if (this.collection != null) {
            await this.collection.updateOne({
                "Anime": anime,
            },
                {
                    $set: {
                        "Author": author,
                        "Rating": rating
                    }
                }
            )
            return { "Anime": anime, "Author": author, "Rating": rating }
        } else {
            return "Connecting to MongoDB..."
        }
    }

    async deleteOne(anime) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne({ "Anime": anime })
            return { Books: result.deletedCount }
        } else {
            return { Anime: 0 };
            
        } 
        
    }


    close() {
        if (this.collection != null) {
            this.collection.close();
        }
    }
}

