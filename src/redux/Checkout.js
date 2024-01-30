
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';

const Checkout = () => {

    const cartitems = useSelector(state=>state.cart.cart)
    return(
        <>
    <div>
        <h2 className="text-center">Cart Items</h2>
        {
            cartitems.map(item =>{
                return(
                    
                    <Table striped bordered hover size="sm" className="w-100 border ms-5 " >
      <thead>
        <tr>
        <div className="bg ">
        
        <h4 className=" "><td className="text-center"></td>{item.title}</h4>
                        <img src={item.thumbnail} alt="" width={200}/>
                     <div className="ms-4">
                             
                             
                       </div>

                   </div>
        </tr>
      </thead>
      
    </Table>
                )
            })
        }
    </div>
        
        </>
    )
}
export default Checkout;