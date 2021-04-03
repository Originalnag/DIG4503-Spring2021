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
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("People");
    }

    async createOne() {
            if(this.collection != null) {
              let results = await this.collection.insertOne({
                "firstName": "Test", 
                "lastName": "2", 
                "favoriteColor": "3"
              })
              return results
            }
        }

        async readOne() {
            if(this.collection != null) {
               let results = await this.collection.findOne({
                "firstName": "Test", 
                "lastName": "2", 
                "favoriteColor": "3"
               })
               return results
            }
        }
    
        
        close() {
            if(this.collection != null) {
            this.collection.close();
            }
    }
}

