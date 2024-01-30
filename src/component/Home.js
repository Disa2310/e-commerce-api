import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import { addtocart } from "../redux/Cartslice";
import { FaShoppingCart } from "react-icons/fa";


const Home = ({title,thumbnail}) =>{
    const cartitems=useSelector(state=>state.cart.cart)
    const dispatch=useDispatch()
    const [Product,setproduct] =useState([])
    const [value, setValue] = useState('');
    const [categories,setCategories] = useState([])
    const [search,setsearch] = useState('');
    // console.log(search)

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
            console.log('res',res)
            setproduct(res.data.products)
        })

        axios.get('https://dummyjson.com/products/categories')
            
        .then( (res)=> {
        //  console.log('result',res)
         setCategories(res.data)
          
        });
    },[])
  

    // const handle

  const handleChange = (e) => {
    setValue(e.target.value);
  };
    
   const itemCahnge = ((item)=>{

        axios.get(`https://dummyjson.com/products/category/${item}`)
            
            .then(function (response) {
            //  console.log('productItem',response)
             setproduct(response.data.products)
            })

   })
    
    
return(
    <>
    {/* <Link to={Home}>home</Link> */}

    <div className="container">
        <div className="row">
            <div className="col-3">
            <div style={{cursor:"pointer"}}className="ms-5 fw-bold fs-3 mb-4 text-primary text-decoration-underline " ><h1>Filter</h1></div>
              
              <div className="text-success fs-3 ms-4 text-decoration-underline">Products</div>
            <ul className="ul ">
                        {
                            categories.map((item)=>{
                            return(
                                <li  style={{cursor:"pointer"}} onClick={()=>{itemCahnge(item)}} className="fs-6 categories pt-2 "  >{item}</li>
                            )                             
                        })
                    }
                    </ul>
            </div>
            <div className="col-9">
          <form>
          <div>
                    <h1 className='text-center text-danger'> E-Commerce</h1>
            </div>
                <div className='d-flex justify-content-start py-3 gap-4 mb-5'>
                
                <input  onChange={(e) =>setsearch(e.target.value)} type='text' placeholder='search character' 
                className='input bg-light w-50' ></input>
                {/* <div className=' border px-3 '>search </div> */}
                <Link to="/checkout"><h2>cart:<small>{cartitems.length}</small><FaShoppingCart/></h2></Link>
            </div>
          </form>
                <div className="row">
                
                {
                    Product.filter((item) => {
                        return search.
                        toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(search);
                    })
                    .map((item)=>{
                        return(
                            <div key={item.id} className="card" style={{width: '19rem'}}>        
                    <img src={item.thumbnail} className="card-img-top" alt="..." width={200} height={200}  />
                    <div className="card-body">
                        <h5 className="card-title"><b>{item.title}</b></h5>
                        <p className="card-text"><b className="me-3 ">Description:</b>{item.description}</p>
                        <div className="card-text"><b className="me-2">price:</b>{item.price}</div>
                        <div className="card-text"><b className="me-2">DiscountPercentage:</b>{item.discountPercentage}</div>
                        <div className="card-text"><b className="me-2">Rating:</b>{item.rating}</div>
                        <div className="card-text"><b className="me-2">Stock:</b>{item.stock}</div>
                        <div className="card-text"><b className="me-2">Brand:</b>{item.brand}</div>
                        <div className="card-text"><b className="me-2">Category:</b>{item.category}</div>
                        </div>   
                    <center className="mb-3">
                    <Link to={`/Product/${item.id}`} className="btn btn-primary 3">View more</Link>
                       <button className="btn btn-primary ms-3 w-50 text-center" onClick={()=>dispatch(addtocart(item))} >
                            Add To Cart</button>
                    </center>
                      
                    
                </div> 
                        )
                    })
                }
                    {/* <div className="col-4"></div> */}
                </div>
            </div>
        </div>
    </div>

    
    </>
)
}
export default Home;