import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './cartPage.scss'
import axios from 'axios'
import Navbar from '../../../components/common/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
    const [status, setStatus] = useState('');
  const  cart  = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)
  console.log(cart)

//   const products = {
//     product: cart.products.map(unit => unit._id),
//   }
const navigate = useNavigate()
const products = cart.products.map(unit => unit._id)
    

  console.log(products)


 const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/v2/users/purchase/${user.details._id}`, products)
    .then(response => {
        setStatus(response.status);
        navigate('/myCourses')
    })
}


  return (
    <>
    <Navbar/>
      <div className='CartWrapper'>
    <h1 className='title'>Buy Course</h1>
       <div className="top">
            
            <button className='topButton'>Checkout Now</button>
                <div className="topTexts">
                    <span className='topText'>Your Items {`(${cart.quantity})`}</span>
                    <span className='topText'>Your Wishlist: 0</span>
                </div>

            <button className='topButton'>Continue Shopping</button>
        </div>
        <div className="bottom">
            <div className="bottomLeft">
                {cart.products.map((course) => (
                    <>
                        <div className="course" key={course._id}>
                    <div className="courseDetail">
                        <img className='image' alt='Course Img' src={course.img}/>
                        <div className="details">
                            <span className='detail'>Name: {course.name}</span>
                            <span className='detail'>Id: {course._id}</span>
                            <span className='detail'>Rating: {course.rating}</span>
                        </div>
                    </div>
                    <div className="priceDetail">
                        ${course.price}
                    </div>
                </div>
                 <hr/>
                    </>
                ))}
               
               {/* <div className="course">
                    <div className="courseDetail">
                        <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsX3CYsScHT4G8utgfOisFHur8n-rIq8UDhV9S1F4VWA1V8Y871gHQECnCXxCsPNmReLM&usqp=CAU'/>
                        <div className="details">
                            <span className='detail'>Product NAme</span>
                            <span className='detail'>Product Price</span>
                            <span className='detail'>Rating</span>
                        </div>
                    </div>
                    <div className="priceDetail">
                        Price
                    </div>
                </div>
                 <hr/> */}
                

            </div>
            <div className="bottomRight">
                <h1 className='summaryTitle'>Final Order</h1>
                <div className="summaryItems">
                    {/* <span className='summaryItem'>Discount: <span className='discount'>- $15</span></span> */}
                    <span className='summaryItem'>Items: <span className='discount'>{cart.quantity}</span></span>
                    <span className='summaryItem totalPrice'>Total: <span className='total'>$25</span></span>
                    <button onClick={handleUpdate} className=' buyBtn'>Buy Now</button>
                </div>
            </div>
        </div> 
</div>
    </>
  )
}

export default CartPage