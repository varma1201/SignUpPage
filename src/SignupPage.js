import './signupPage.css';
const Signup = () => {
  const submitHandler = () => {};
  return (
    <>
      <div className='container'>
        <div className='content'>
          <form>
            <div className='tag'>
              <div>User Name:</div>
              <input type='text' name='' id='' className='field' />
            </div>
            <div className='tag'>
              <div>Password:</div>
              <input type='text' name='' id='' className='field' />
            </div>
            <div className='tag'>
              <div>Phone Number:</div>
              <input type='text' name='' id='' className='field' />
            </div>
            <div className='tag'>
              <div>Email:</div>
              <input type='text' name='' id='' className='field' />
            </div>
            <button type='submit' onClick={submitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
