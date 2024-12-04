import "../Style/Root.css"
import MyNavBar from "../Components/MyNavBar"
import Container from 'react-bootstrap/Container';
import { Link,Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice.js'

function MainRoot(){

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
            
            
            {/* <MyNavBar/> */}
            <Container>
                <div className="rootPage">

                    <div className="sideBar">
                        <Link to="/Products"> <span>test</span> </Link>  
                    </div>
                    <div>
                        <span>
                            {count}
                        </span>
                        <br></br>
                        
                        <button aria-label="minus -"
                        onClick={()=>{dispatch(decrement())}}
                        >
                            -1
                        </button>

                        <button aria-label="add 1"
                        onClick={()=> dispatch(increment())}
                        >
                            +1
                        </button>

                        <button aria-label="add 5"
                        onClick={()=> dispatch(incrementByAmount(5))}
                        >
                            +5
                        </button>

                        <button aria-label="minus 5"
                        onClick={()=> dispatch(incrementByAmount(-5))}
                        >
                            -5
                        </button>


                        
                        
                        <Outlet/>
                    </div>
                </div>
            </Container>
            </>
    )
}

export default MainRoot