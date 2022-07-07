import axios from 'axios';


const URL = 'http://localhost:8000';


export const getNews= async()=>{
    try{
        const de= (await axios.get(`${URL}`));
              return de;
    }catch(error){
        console.log('ERROR while calling getNews API', error);
    }
}