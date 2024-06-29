import mongoose from 'mongoose'

export async function connect() { 
 try {
     mongoose.connect(process.env.MONGO_URL!)
     const connection = mongoose.connection;
     connection.on('connected', () => { 
         console.log("mongo db connected");
     })
     connection.on('error', (err) => { 
         console.log("oops we ran into a problem "+err)
     })
 } catch (error) {
        
 }
}