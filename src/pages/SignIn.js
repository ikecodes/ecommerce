import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import Toast from '../utils/Toast';
import { register, login } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, data, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) return navigate('/');
    if (data) return changeMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, data]);
  const [modeSignin, setModeSignin] = useState(true);
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
    passwordConfirm: '',
  });
  const changeMode = () => {
    setModeSignin(true);
  };
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password, phone, name } = formdata;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modeSignin && formdata.password !== formdata.passwordConfirm)
      return Toast('passwords do not match', 'error');
    if (
      !modeSignin &&
      (formdata.name === '' ||
        formdata.phone === '' ||
        formdata.email === '' ||
        formdata.password === '' ||
        formdata.passwordConfirm === '')
    )
      return Toast('please fill all fields', 'error');
    if (modeSignin && (formdata.email === '' || formdata.password === ''))
      return Toast('please fill all fields', 'error');
    if (modeSignin) {
      dispatch(login({ email, password }));
      if (token) return navigate('/');
    } else {
      dispatch(register({ email, password, phone, name }));
      if (data) return changeMode();
    }
  };
  return (
    <Layout>
      <div className='my-10 flex justify-center'>
        <form className='align-center space-y-4 w-full md:w-[40%] flex flex-col p-2'>
          {!modeSignin && (
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              onChange={handleChange}
              className='p-2 border-2 rounded outline-none'
            />
          )}
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            onChange={handleChange}
            className='p-2 border-2 rounded outline-none'
          />
          {!modeSignin && (
            <input
              type='tel'
              name='phone'
              placeholder='+234'
              required
              onChange={handleChange}
              className='p-2 border-2 rounded outline-none'
            />
          )}
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            onChange={handleChange}
            className='p-2 border-2 rounded outline-none'
          />
          {!modeSignin && (
            <input
              type='password'
              name='passwordConfirm'
              placeholder='Confirm Password'
              required
              onChange={handleChange}
              className='p-2 border-2 rounded outline-none'
            />
          )}

          <button
            onClick={handleSubmit}
            className='bg-[#3EC1F9] rounded-full p-2 text-white capitalize font-semibold'
          >
            {loading ? '...' : modeSignin ? 'sign in' : 'sign up'}
          </button>

          {/* ///////////////////////////////////////////////////////////////////SET MODE */}
          {modeSignin ? (
            <p style={{ marginTop: '1rem', textTransform: 'capitalize' }}>
              don't have an account ?
              <span
                style={{
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginLeft: '1rem',
                }}
                onClick={() => setModeSignin((prev) => !prev)}
              >
                sign up
              </span>
            </p>
          ) : (
            <p style={{ margin: '1rem', textTransform: 'capitalize' }}>
              already have an account ?
              <span
                style={{
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginLeft: '1rem',
                }}
                onClick={() => setModeSignin((prev) => !prev)}
              >
                sign in
              </span>
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
