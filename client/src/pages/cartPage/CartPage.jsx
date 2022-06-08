import React from 'react'
import { useSelector } from 'react-redux'
import './cartPage.css'

const CartPage = () => {

  const  cart  = useSelector((state) => state.cart)
  console.log(cart)

  const products = {
    product: cart.products.map(unit => unit._id),
  }

  console.log(products)

  return (
              <div className='Wrapper'>
              <div className='Title'>YOUR BAG</div>

              <div className='Top'>
                  <button>Continue Shopping</button>
                      <div className='Toptexts'>
                          <div className='Toptext'>Shopping bag (3)</div>
                          <div className='Toptext'>Your Wishlist (1)</div>
                      </div>

                  <button>Check Out</button>
              </div>



              <div className='Bottom'>
                  <div className='Info'>
                      
                          

                          
                          {cart.products.map(item => (
                            <div className='Product'>
                            <div className='ProductDetail'>
                                <img className='Image'  src="https://media.npr.org/assets/img/2021/06/30/smn_npr_choosingart_illo2_wide-47e947d97fe721a92e0bad06ac077bdb14262c70-s1100-c50.jpg"/>
                                <div className='Details'>
                                    <div className='ProductName'><b>{item._id}</b> product.title</div>
                                    <div className='ProductId'><b>Id:</b> {item.title}</div>
                                    {/* <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize> */}

                                </div>
                            </div>
                            <div className='PriceDetail'>
                                <div className='ProductAmountContainer'>
                                    {/* <Add style={{cursor: 'pointer'}}/> */}
                                    <div className='ProductAmount'>product.quantity</div>
                                    {/* <Remove style={{cursor: 'pointer'}}/> */}
                                </div>
                                <div className='ProductPrice'>$ product.price*product.quantity</div>
                            </div>
                        </div>
                          ))}
                          
                     
                      

                  </div>





                  <div className='Summary'>
                      <div className='SummaryTitle'>
                          CHECKOUT SUMMARY
                      </div>

                      <div className='SummaryItem'>
                          <div className='SummaryItemText'>Subtotal</div>
                          <div className='SummaryItemPrice'>$ cart.total</div>
                      </div>

                      <div className='SummaryItem'>
                          <div className='SummaryItemText'>Discount</div>
                          <div className='SummaryItemPrice'>-$ 15</div>
                      </div>
                      
                      <div type="total" className='SummaryItem'>
                          <div className='SummaryItemText'>Total</div>
                          <div className='SummaryItemPrice'>$ 50</div>
                      </div>

                     
                      {/* <StripeCheckout
            name="Lama Shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button>CHECKOUT NOW</button>
          </StripeCheckout> */}
           <button>CHECKOUT NOW</button>
                  </div>
              </div>
          </div>
  )
}

export default CartPage