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
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    async createOne(ISBN, title, author, description) {
        if (this.collection != null) {
            await this.collection.insertOne({
                "ISBN": ISBN,
                "title": title,
                "author": author,
                "description": description
            })
            return { "ISBN": ISBN, "title": title, "author": author, "description": description }

        } else {
            return "Connecting to MongoDB..."
        }
    }

    async readOne(ISBN) {
        if (this.collection != null) {
            const result = await this.collection.findOne({ "ISBN": ISBN })
            if (result == null) {
                return { Book: "Not found" }
            }
            else {
                return { Book: result };
            }
        }
        else {
            return "Connecting to MongoDB..."
        }
    }

    readMany(title, author) {
        if (this.collection != null) {
           let cursor = this.collection.find({"title": title,"author": author}).toArray()
            return {books: cursor}
        }
        else {
            return "Connecting to MongoDB..."
        }
    }


    async updateOne(ISBN, title, author, description) {
        if (this.collection != null) {
            await this.collection.updateOne({
                "ISBN": ISBN,
            },
                {
                    $set: {
                        "title": title,
                        "author": author,
                        "description": description
                    }
                }
            )
            return { "ISBN": ISBN, "title": title, "author": author, "description": description }
        } else {
            return "Connecting to MongoDB..."
        }
    }

    async deleteOne(ISBN) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne({ "ISBN": ISBN })
            return { Books: result.deletedCount }
        } else {
            return { Books: 0 };
            
        } 
        
    }


    close() {
        if (this.collection != null) {
            this.collection.close();
        }
    }
}

