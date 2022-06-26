import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { FaUser } from 'react-icons/fa'
// import { register, reset } from '../../features/auth/authSlice'
// import Spinner from '../components/Spinner'
import { register } from '../../../features/auth/authService'

function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: '',
//   })

//   const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.auth
//   )

//   useEffect(() => {
//     // if (isError) {
//     //   toast.error(message)
//     // }

//     if (isSuccess || user) {
//       navigate('/')
//     }

//     // dispatch(reset())
//   }, [user, isError, isSuccess, message, navigate, dispatch])

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()

//     if (password !== password2) {
//     //   toast.error('Passwords do not match')
//     } else {
//       const userData = {
//         username: name,
//         email,
//         password,
//       }

//     //   dispatch(register(userData))
//     }
//   }

  // if (isLoading) {
  //   return <Spinner />
  // }
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    password2: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault()

    // const userData = {
    //   username,
    //   password,
    // }

    // dispatch(login(credentials))
    register(dispatch, credentials)
  }

  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (isSuccess || user) {
      navigate('/')
    }

    // dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  return (
    <>
      <section className='heading'>
        <h1>
          {/* <FaUser /> Register */}
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form >
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              onChange={handleChange}
              placeholder='Enter your name'
            
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              onChange={handleChange}
              placeholder='Enter your email'
              
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              onChange={handleChange}
              placeholder='Enter password'
              
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              onChange={handleChange}
              placeholder='Confirm password'
              
            />
          </div>
          <div className='form-group'>
            <button type='submit' onClick={handleClick} className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register