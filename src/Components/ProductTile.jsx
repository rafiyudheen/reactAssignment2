
import "../Style/products.css"
import Badge from 'react-bootstrap/Badge';
import RatingSpan from "./RatingSpan";
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Button } from "react-bootstrap";


function ProductTile (props) {

    const cart=useSelector((state)=>state.cart.value)
    const dispatch=useDispatch();

    

    return (
                    <div className="product-Tile">
                        
                        <div style={{position:"relative"}}>
                        <Badge style={{position:"absolute", top:"10px", right:"10px"}} >
                            {props.data.rating.rate}
                        </Badge>
                            <img src={props.data.image} alt="" />

                        </div>
                     {/* </div><div className="product-Details"> */}
                        <p className="prodcut-name">
                            {props.data.title}
                            
                        </p>
                        
                        <div>

                            <p className="prodcut-price">
                                {`$${props.data.price}`}
                            </p>
                            <div>
                            {/* <Button aria-label="add to cart"
                                onClick={()=>{
                                    dispatch(addItem(
                                  {
                                    "id": props.data.id,
                                    "qty": 1  
                                  }
                                 
                                    
                                    ))
                                     console.log(cart)
                            }}
                            >
                                
                                add to Cart
                            </Button> */}

                            
                            </div>
                        </div>
                        {/* </div>    */}
                    </div>
    );

}
export default ProductTile;