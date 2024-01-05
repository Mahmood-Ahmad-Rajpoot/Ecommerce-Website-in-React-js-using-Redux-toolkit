
import { useEffect } from "react";
import Routers from "./Routers";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/CartSlice";

function App() {
  const {noOfItems} = useSelector((store)=>store.cart.noOfItems);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(calculateTotal());


  },[noOfItems])
  return <Routers />;
}

export default App;
