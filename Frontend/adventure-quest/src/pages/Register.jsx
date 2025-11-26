import { useState } from 'react';
import '../pages/styles/Login.css';
import '../pages/styles/Register.css';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    relationship: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const goToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Add your registration logic here
  };

  return (
    <div className="login-page">
      {/* Background Image */}
      <div className="login-background"></div>

      {/* Registration Card */}
      <div className="login-card-wrapper register-card-wrapper">
        <div className="login-card register-card">
          <h1 className="login-title">Registration</h1>
          
          <div className="login-form-container register-form-container">
            {/* Full Name Row */}
            <div className="form-row">
              <div className="form-group-small">
                <label htmlFor="firstName" className="form-label">Full name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter First Name"
                  required
                />
              </div>

              <div className="form-group-small">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Last Name"
                  required
                  style={{ marginTop: '1.5rem' }}
                />
              </div>

              <div className="form-group-small">
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Middle Name"
                  style={{ marginTop: '1.5rem' }}
                />
              </div>
            </div>

            {/* Date of Birth and Relationship Row */}
            <div className="form-row">
              <div className="form-group-small">
                <label htmlFor="dateOfBirth" className="form-label">Date of birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Date of birth"
                  required
                />
              </div>

              <div className="form-group-small">
                <label htmlFor="relationship" className="form-label">Relationship to student</label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="form-input form-input-small form-select"
                  required
                >
                  <option value="">Select relationship</option>
                  <option value="parent">Parent</option>
                  <option value="guardian">Guardian</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Username and Email Row */}
            <div className="form-row">
              <div className="form-group-small">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Username"
                  required
                />
              </div>

              <div className="form-group-small">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>

            {/* Password and Confirm Password Row */}
            <div className="form-row">
              <div className="form-group-small">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="form-group-small">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input form-input-small"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <button onClick={handleSubmit} className="login-button register-button">
              Register
            </button>

            <p className="register-text register-link-text">
              Already have an account? <a href="#login" className="register-link" onClick={goToLogin}>Login here!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;