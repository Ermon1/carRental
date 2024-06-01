// DeletePage.js

import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/employee";

const EmplDalete = () => {
  const dispatch = useDispatch();
  const [message,setMessage]=useState('')
const [formData, setFormData] = useState({
  email: "",
  
    
});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const clear = () => {
    setFormData({
       email:""
    })
    setMessage("delete seccessfull");
  }

  const handleDelete = () => {
    // Assuming you have the employee ID as a prop or from the URL params
    const employeeId = formData.email; // Replace with the actual employee ID
    dispatch(deleteEmployee(employeeId));
    clear()
  };

  return (
    <div className="tw-container tw-mx-auto tw-mt-8">
      <div className="tw-mb-4">
        <label
          className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="tw-border tw-border-gray-300 tw-py-2 tw-px-3 tw-rounded tw-w-full tw-focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
          required
        />
      </div>
      {message}
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4">Delete Employee</h1>

      <button
        onClick={handleDelete}
        className="tw-bg-red-500 hover:tw-bg-red-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500"
      >
        Delete Employee
      </button>
    </div>
  );
};

export default EmplDalete;
