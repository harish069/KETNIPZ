import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";



function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
    }, [])
    
    async function getData()
    {
        const { data } = await axios.get("http://localhost:1234/prod")
        console.log(data);
        //setTimeout(() => {}, 1000)   
        setProducts(data)
    }

    return (
    <>
         {console.log("Products: ", products)}
            <div>
                {products.title}
                <br />
                {products.price}
            </div>
       </>
    )
}

export default Home
