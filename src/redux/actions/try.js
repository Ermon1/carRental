import axios from 'axios'


// create acction
export const reservation_requiest = "reservation_requiest"
export const reservation_success = "reservation_success"
export const reservation_failed = "reservation_failed"
// we create action creater for the the part we do asyn requiest the backed 
// this is done by the by the thunk this alow us to do async requiest and wait the action to return and update the state and the store js

// we create action creater 

export const getReservation = async (reservation) => {
    // we return a anonmous function
    return async (dispatch) => {
        try {
            dispatch({type:reservation_requiest})
            const res = axios.post('/reservation', reservation)
            dispatch({type:reservation_success,payload:res})
        } catch (error) {
            dispatch({type:reservation_failed, payload:error.message})
        }
       
    }
    
}
