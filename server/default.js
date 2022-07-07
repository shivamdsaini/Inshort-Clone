
import {data} from "./constant/data.js";
import News from "./modal/news.js";

const DefaultData = async ()=>{
   try{
   
   await News.insertMany(data);
   console.log('Data imported successfully');
   }catch(error){
    console.log('ERROR ', error.message);
   }
}

export default DefaultData;