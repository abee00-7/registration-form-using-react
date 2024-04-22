import React, { useState } from 'react';
import './App.css'; 
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile' && value.length > 10) {
      return; 
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.address || !formData.mobile || !formData.email || !formData.gender || !formData.dob || !formData.course) {
      alert("Please fill out all fields");
      return;
    }
    
    alert("Registration sucessfull!!!!");
  };

  const handleCancel = () => {
    
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <div>
      <h2>Higher Secondary Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select</option>
            <option value="biology">Biology</option>
            <option value="computer_science">Computer Science</option>
            <option value="commerce">Commerce</option>
            <option value="humanities">Humanities</option>
          </select>
        </div>
        <div className='mt-3'>
          <button className=' btn btn-danger' type="submit">Register</button>
          <button className='ms-2 btn btn-danger' type="button" onClick={handleCancel}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;