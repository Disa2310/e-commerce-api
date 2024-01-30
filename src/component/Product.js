import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// const api='https://dummyjson.com/products/1';
const Product = () =>{
    const [pro,setpro]=useState([]);
    
    const params=useParams();



    useEffect( ()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then ((res)=>{
            console.log('res<<<<<<',res)
            setpro(res.data)
        })
    },[])

    
 

    return(
        <div className="container">
            <div className="row">
                <div className="col-4 text-center">
                
                <img src={pro.thumbnail} width={600}/>
            
                 </div>
                 
                 <div>
                    {
                        
                        pro?.images?.map((item)=>{
                            return(<img src={item} width={80} height={80} className="ms-5 pt-4  pill"></img>)
                        })
                    }

                 </div>
           
            </div>
        </div>
)
    }
    export default Product;