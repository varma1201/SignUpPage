import { useState, useEffect } from 'react';
import './signupPage.css';
const Signup = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const url = 'https://surveyor-app-server.vercel.app/users/';
  const UserDetails = {};
  const submitHandler = (e) => {
    e.preventDefault();
    UserDetails.Username = username;
    UserDetails.password = password;
    UserDetails.Phone = Phone;
    UserDetails.email = email;
    console.log(UserDetails);
  };

  return (
    <>
      <div className='container'>
        <div className='content'>
          <form>
            <div className='tag'>
              <div>User Name:</div>
              <input
                type='text'
                name=''
                id=''
                className='field'
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className='tag'>
              <div>Password:</div>
              <input
                type='text'
                name=''
                id=''
                className='field'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className='tag'>
              <div>Phone Number:</div>
              <input
                type='text'
                name=''
                id=''
                className='field'
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className='tag'>
              <div>Email:</div>
              <input
                type='text'
                name=''
                id=''
                className='field'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button
              type='submit'
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
