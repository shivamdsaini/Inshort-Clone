import { useEffect } from "react";

import { getNews } from "../service/api.js";

const Article =()=>{

    useEffect(()=>{
        dailyNews();
    },[])

    const dailyNews = async () =>{
     let data = await getNews();
     console.log(data);
    }

    return (
        <p>hello shivam</p>
    )
}
export default Article;