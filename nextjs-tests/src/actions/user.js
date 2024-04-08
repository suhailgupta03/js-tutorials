"use server"; // this refers to the server action

import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://kebomo8311:bUHjD34kg3ftqSa5@cluster0.mlffs4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function login(username, password) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }); // we are creating a new client to connect to the mongodb database

  return client.connect().then(() => {
    // we are connecting to the mongodb database
    return client
        .db("user_database") // use the user_database database
        .collection("user_passwords") // use the user_passwords collection
        .findOne({
            username: username,
            password: password,
        }) // https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
        .then(r => {
            if(r) { // found the user in the database
                return true;
            }else { // did not find the user in the database
                return false;
            }
        })
        .catch(e => {
            console.log(e);
        })
  });
}
