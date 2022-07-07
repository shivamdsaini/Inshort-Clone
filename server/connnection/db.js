
import mongoose from 'mongoose';

const Connection = async ()=>{
   try{ 
    const  URL = `mongodb://shivam:shivam@cluster0-shard-00-00.amjp2.mongodb.net:27017,cluster0-shard-00-01.amjp2.mongodb.net:27017,cluster0-shard-00-02.amjp2.mongodb.net:27017/SHIVAMPORJ?ssl=true&replicaSet=atlas-13l7i1-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await  mongoose.connect(URL , { useNewUrlParser: true})

    console.log('database connnected successfully');


} catch (error) {
    console.log('error while connecting with database', error);
}
}

export default Connection;
 