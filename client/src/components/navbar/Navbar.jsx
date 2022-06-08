import { Link } from "react-router-dom";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  // const  cart  = useSelector((state) => state.cart)
  const  quantity  = useSelector((state) => state.cart.quantity)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
   
    dispatch(reset())
    navigate('/')
  }



  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <span className="logo">UDEMY</span>
            </Link>
            <div className="navItems">
                <button className="navTextButton">Categories</button>
                <button className="navTextButton">Udemy Business</button>
                <button className="navTextButton">Teach On Udemy</button>
                  <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
                    <button className="navTextButton"> <FontAwesomeIcon icon={faCartPlus} /><span className="cart">{quantity}</span></button>
                  </Link>
                

                {user? (
                  
                  <button className="navButton" onClick={onLogout}>Logout</button>
                
                ) : (
                  <>
                    <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
                  <button className="navButton">Register</button>
                </Link>
                <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                  <button className="navButton">Login</button>
                </Link>
                  </>
                )}
                
            </div>
        </div>
    </div>

    // <div className="navbarBackground">
    //     <div className='navbar'>
    //     <h2>UDEMY</h2>
    //     <p>Categories</p>
    //     <input/>
    //     <p>Udemy Business</p>
    //     <p>Teach On Udemy</p>
    //     <FontAwesomeIcon icon={faCartPlus} />
    //     <button>Login</button>
    //     <button>Signup</button>
    // </div>
    // </div>
  )
}

export default Navbar