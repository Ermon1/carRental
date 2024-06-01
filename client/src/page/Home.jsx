import Main from '../component/Main';
import react, { useEffect } from 'react'

import { getOneReservation } from '../redux/actions/ReservationAction'
 import { useSelector ,useDispatch} from "react-redux";
function Home() {
  const { user } = useSelector((state) => state.loginReducer);
   
    
   
const dispatch=useDispatch()
  
    
  return (
     
  
     <Main/>
           
  );
  
}

export default Home