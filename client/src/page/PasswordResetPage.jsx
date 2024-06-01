import React, { useState } from 'react';
import {requestPasswordReset} from "../redux/actions/resetpassword";
import { useDispatch,useSelector } from 'react-redux'



const PasswordResetPage = () => {

const  {loading ,success,  error  ,message}=useDispatch((state)=>state.passwordResetRequestReducer)




  const [email, setEmail] = useState('');
 const dispatch=useDispatch()
  const handleResetPasswordRequest = async () => {
    dispatch(requestPasswordReset(email));
  };

   return (
     <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-500">
       <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-8 tw-max-w-md tw-w-full">
         <h1 className="tw-text-3xl tw-font-semibold tw-mb-6 tw-text-center">
           Password Reset
         </h1>
         <form className="tw-space-y-4">
           <div>
             <label
               className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-1"
               htmlFor="email"
             >
               Email
             </label>
             <input
               className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-lg tw-bg-gray-100 tw-appearance-none"
               type="email"
               id="email"
               name="email"
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               required
             />
           </div>
           <button
             className="tw-w-full tw-bg-indigo-600 tw-hover:bg-indigo-700 tw-text-white tw-py-2 tw-rounded-lg tw-font-semibold"
             type="submit"
             onClick={handleResetPasswordRequest}
           >
             Reset Password
           </button>
         </form>
       </div>
     </div>
   );
};

export default PasswordResetPage;
